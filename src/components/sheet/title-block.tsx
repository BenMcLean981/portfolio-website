import { type PropsWithChildren } from 'react';

export type TitleBlockProps = {
  title: string;
  sheetNumber?: number;
  sheetCount: number;
  revision: string;
  date: string;
};

/**
 * The block in the corner of an engineering drawing that says what the sheet
 * is, who drew it, and which revision you're looking at. Here the revision
 * is the commit the page was built from.
 */
export function TitleBlock(props: TitleBlockProps) {
  const { title, sheetNumber, sheetCount, revision, date } = props;

  const sheet = sheetNumber ? `${sheetNumber} of ${sheetCount}` : '—';

  return (
    <dl className="grid w-full grid-cols-[1fr_1.4fr_1fr] border border-ink text-ink sm:w-[28rem]">
      <Field label="Drawn by" className="col-span-1 border-r border-b">
        Ben McLean
      </Field>
      <Field label="Title" className="col-span-2 border-b">
        {title}
      </Field>
      <Field label="Rev" className="border-r">
        {revision}
      </Field>
      <Field label="Date" className="border-r">
        {date}
      </Field>
      <Field label="Sheet">{sheet}</Field>
    </dl>
  );
}

type FieldProps = PropsWithChildren<{ label: string; className?: string }>;

function Field(props: FieldProps) {
  return (
    <div className={`border-ink px-3 py-2 ${props.className ?? ''}`}>
      <dt className="lettering text-xs text-ink-soft">{props.label}</dt>
      <dd className="lettering text-lg font-semibold leading-tight">
        {props.children}
      </dd>
    </div>
  );
}
