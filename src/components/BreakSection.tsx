import Image from 'next/image';

export function BreakSection() {
  return (
    <section className='flex p-6 justify-center items-center sm:justify-between sm:px-40'>
      <Image
        src={'/images/background.png'}
        alt='background'
        width={0}
        height={0}
        className='sm:rotate-6 absolute -z-20 left-8 sm:blur-[100px] blur-xl w-10/12'
        sizes='100vw'
      />
      <h1 className='hidden sm:flex text-center drop-shadow-lg text-[2rem] font-extrabold -tracking-tighter mix-blend-overlay shadow-inner text-4xl'>
        Interested working with me?
      </h1>
      <button className='flex py-4 px-6 gap-[0.625rem] bg-[#322E7D] shadow-[6px_6px_0px_0px_#FFF] text-base font-semibold text-center uppercase transition-all hover:text-[#322E7D] hover:bg-white hover:shadow-[6px_6px_0px_0px_#2d83b6]'>
        Contact Me
      </button>
    </section>
  );
}
