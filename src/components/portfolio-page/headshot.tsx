export function Headshot() {
  return (
    <img
      src={'/images/portrait.jpg'}
      alt={'Ben McLean'}
      width={800}
      height={880}
      className={
        'aspect-[10/11] w-full rounded-[14px] object-cover shadow-[0_12px_30px_-12px_rgb(0_0_0/0.6)]'
      }
      fetchPriority={'high'}
    />
  );
}
