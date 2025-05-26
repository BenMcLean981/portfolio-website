import Image from 'next/image';

export function Headshot() {
  return (
    <div className={'relative w-full aspect-[3/4]'}>
      <Image
        src={'/images/headshot.jpg'}
        alt={'Ben McLean Headshot'}
        objectFit="cover"
        fill
        priority
      />
    </div>
  );
}
