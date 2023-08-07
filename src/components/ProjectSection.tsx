import Image from 'next/image';
import { ProjectCardSection } from './ProjectCardSection';
import Link from 'next/link';

export function ProjectSection() {
  return (
    <section className='flex flex-col px-6 py-4 items-center gap-6 sm:gap-4 self-stretch relative sm:px-40'>
      <Image
        src={'/images/background.png'}
        alt='background'
        width={0}
        height={0}
        className='absolute -z-20 -top-1 left-8 sm:-top-24 sm:left-24 sm:blur-[100px] blur-xl w-10/12'
        sizes='100vw'
      />
      <div className='text-center drop-shadow-lg text-[2rem] font-extrabold -tracking-tighter mix-blend-overlay shadow-inner sm:text-6xl uppercase'>
        PROJECT
      </div>
      <ProjectCardSection imagePosition='left' />
      <ProjectCardSection imagePosition='right' />
      <div className='flex py-2 sm:py-[0.63rem] w-full'>
        <Link href={'/'} className='w-full'>
          <span className='flex w-full px-2 py-1 justify-center items-center text-center gap-2 bg-[#00949D] shadow-[3px_3px_0px_0px_#FFF] text-xs font-semibold uppercase sm:text-base sm:py-2 sm:px-4 transition-all hover:bg-white hover:shadow-[3px_3px_0px_0px_#00949D] hover:text-[#00949D]'>
            View More Project
          </span>
        </Link>
      </div>
    </section>
  );
}
