import Image from 'next/image';
import Link from 'next/link';
type SocMedType = {
  source: string;
  alt: string;
  link: string;
};

export function HeroSection() {
  const socmeds: SocMedType[] = [
    {
      source: '/socmed/github.svg',
      alt: 'github',
      link: 'https://github.com/Rifqi14'
    },
    {
      source: '/socmed/linkedin.svg',
      alt: 'linkedin',
      link: 'https://www.linkedin.com/in/muhammad-rifqi-rf14/'
    },
    {
      source: '/socmed/twitter-square.svg',
      alt: 'twitter',
      link: 'https://twitter.com/_mrifqi__'
    },
    {
      source: '/socmed/instagram.svg',
      alt: 'instagram',
      link: 'https://www.instagram.com/_mrifqi__'
    },
    {
      source: '/socmed/medium.svg',
      alt: 'medium',
      link: 'https://medium.com/@_mrifqi__'
    }
  ];
  return (
    <div className='flex sm:flex-auto flex-col-reverse sm:flex-row relative sm:py-8 sm:px-40 p-6 justify-center sm:justify-between items-center self-stretch gap-9'>
      <Image
        src={'/images/background.png'}
        alt='background'
        width={0}
        height={0}
        className='sm:rotate-6 absolute -z-20 top-48 left-8 sm:top-72 sm:left-24 sm:blur-[100px] blur-xl w-10/12'
        sizes='100vw'
      />
      <div className='flex flex-col items-center sm:items-start gap-4 sm:gap-6'>
        <div className='flex flex-col items-center sm:items-start gap-2'>
          <div className='text-center text-sm sm:text-2xl'>
            👋 I’m <span className='font-bold'>Muhammad Rifqi</span>
          </div>
          <div className='text-center drop-shadow-lg text-[2rem] font-extrabold -tracking-tighter mix-blend-overlay backdrop-blur-[6.85rem] shadow-inner sm:text-6xl'>
            WEB DEVELOPER
          </div>
        </div>
        <div className='flex flex-col items-center sm:items-start gap-6'>
          <div className='text-center sm:text-justify font-light text-base'>
            Fullstack Typescript Developer, with 3 YoE in Express JS, Nest, Next
            JS Framework
          </div>
          <div className='flex items-start gap-4'>
            {socmeds.map(socmed => (
              <Link href={socmed.link} key={socmed.alt} target='_blank'>
                <Image
                  src={socmed.source}
                  alt={socmed.alt}
                  width={0}
                  height={0}
                  sizes='100vw'
                  className='w-6 sm:w-9'
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className='relative'>
        <Image
          src={'/profile-picture.png'}
          alt='profile-picture'
          width={0}
          height={0}
          sizes='100vw'
          className='w-32 sm:w-52 rounded-full sm:drop-shadow-[0px_0px_50px_#7B1BA8] drop-shadow-[0px_0px_100px_#7B1BA8]'
        />
        <Image
          src={'/ornament.svg'}
          alt='profile-picture-ornament'
          width={0}
          height={0}
          sizes='100vw'
          className='w-[8.75rem] sm:w-56 top-0 absolute max-w-lg'
        />
      </div>
    </div>
  );
}
