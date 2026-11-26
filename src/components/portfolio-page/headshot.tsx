export function Headshot() {
  return (
    <figure className="border border-ink p-1.5">
      <div className="relative aspect-[3/4] w-full">
        <img
          src={'/images/headshot.jpg'}
          alt={'Ben McLean Headshot'}
          className={'absolute inset-0 h-full w-full object-cover'}
          fetchPriority={'high'}
        />
      </div>
    </figure>
  );
}
