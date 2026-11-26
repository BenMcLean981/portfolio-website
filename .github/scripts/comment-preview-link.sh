#!/usr/bin/env bash
# Waits for Cloudflare's preview build of a pull request's head commit, then
# posts (or updates) a single comment with the preview link.
#
# Cloudflare's GitHub app only comments preview links for Pages projects, not
# Workers, so this fills the gap. Preview URLs follow a fixed pattern:
# <branch slug>-<worker>.<subdomain>.workers.dev.
#
# Required environment: GH_TOKEN, REPO, PR_NUMBER, HEAD_SHA, BRANCH,
# CHECK_NAME, WORKER_NAME, WORKERS_SUBDOMAIN.
# Optional: DRY_RUN=1 prints the comment instead of posting it.
set -euo pipefail

MARKER='<!-- cloudflare-preview-link -->'
POLL_SECONDS=${POLL_SECONDS:-20}
MAX_POLLS=${MAX_POLLS:-45}

wait_for_check() {
  local i result
  for ((i = 0; i < MAX_POLLS; i++)); do
    result=$(gh api "repos/$REPO/commits/$HEAD_SHA/check-runs" \
      --jq "[.check_runs[] | select(.name == \"$CHECK_NAME\")][0]
            | if . == null then \"\" else \"\(.status)|\(.conclusion)|\(.details_url)\" end")
    if [[ $result == completed\|* ]]; then
      echo "$result"
      return
    fi
    sleep "$POLL_SECONDS"
  done
  echo "timed_out||"
}

preview_url() {
  local slug
  slug=$(tr '[:upper:]' '[:lower:]' <<<"$BRANCH" | sed -E 's/[^a-z0-9]+/-/g; s/^-+//; s/-+$//')
  echo "https://${slug}-${WORKER_NAME}.${WORKERS_SUBDOMAIN}.workers.dev"
}

is_reachable() {
  curl --silent --fail --output /dev/null --max-time 15 --retry 3 --retry-all-errors "$1"
}

comment_body() {
  local status=$1 conclusion=$2 log_url=$3 url short_sha=${HEAD_SHA:0:7}
  url=$(preview_url)

  echo "$MARKER"
  if [[ $status == timed_out ]]; then
    echo "Gave up waiting for the Cloudflare preview build of \`$short_sha\`."
  elif [[ $conclusion != success ]]; then
    echo "The Cloudflare preview build of \`$short_sha\` failed: [build log]($log_url)"
  elif is_reachable "$url"; then
    echo "**Preview:** $url"
    echo
    echo "Built from \`$short_sha\`."
  else
    echo "The Cloudflare preview build of \`$short_sha\` passed, but nothing answered at $url."
    echo "Cloudflare may have shortened the branch name. Find the link under the Worker's Previews: [build log]($log_url)"
  fi
}

upsert_comment() {
  local body=$1 id
  id=$(gh api --paginate "repos/$REPO/issues/$PR_NUMBER/comments" \
    --jq ".[] | select(.user.login == \"github-actions[bot]\" and (.body | contains(\"$MARKER\"))) | .id" | head -n 1)
  if [[ -n $id ]]; then
    gh api --method PATCH "repos/$REPO/issues/comments/$id" -f body="$body" >/dev/null
  else
    gh api --method POST "repos/$REPO/issues/$PR_NUMBER/comments" -f body="$body" >/dev/null
  fi
}

IFS='|' read -r status conclusion log_url <<<"$(wait_for_check)"
body=$(comment_body "$status" "$conclusion" "$log_url")

if [[ ${DRY_RUN:-} == 1 ]]; then
  echo "$body"
else
  upsert_comment "$body"
fi
