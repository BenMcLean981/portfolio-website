export function Headshot() {
  return (
    <div className="relative aspect-[3/4] h-full w-full lg:aspect-auto">
      <img
        src={'/images/headshot.jpg'}
        alt={'Ben McLean Headshot'}
        className={'absolute inset-0 h-full w-full object-cover'}
        fetchPriority={'high'}
      />
    </div>
  );
}
