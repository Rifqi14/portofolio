import Image from 'next/image';
import Link from 'next/link';

type NavItem = {
  label: string;
  link: string;
  key: string;
  active?: boolean;
  className?: string;
};

export function NavBar() {
  const navItems: NavItem[] = [
    { label: 'Home', link: '#', key: 'home' },
    { label: 'About', link: '#', key: 'about' },
    { label: 'Project', link: '#', key: 'projects' },
    { label: 'Services', link: '#', key: 'services' },
    { label: 'Work', link: '#', key: 'work' }
  ];
  return (
    <div
      className='flex sm:flex-initial z-50 px-6 py-2 sm:px-40 sm:py-[0.63rem] justify-between items-center self-stretch sticky top-0 backdrop-blur-xl'
      style={{
        background:
          'linear-gradient(180deg, #0A1323 0%, rgba(19, 27, 43, 0.20) 100%)'
      }}
    >
      <Link href={'/'}>
        <Image
          src={'/images/favicon.png'}
          alt='Icon'
          width={0}
          height={0}
          className='w-8 h-8 sm:w-16 sm:h-16'
          sizes='100vw'
        />
      </Link>
      <div
        className='hidden sm:flex p-2 justify-center items-center rounded-[0.63rem] border-[#7B1BA8] border-2'
        style={{
          background:
            'linear-gradient(315deg, #322E7D 0%, rgba(50, 46, 125, 0.00) 100%)',
          boxShadow: '0px 4px 50px 0px rgba(123, 27, 168, 0.65)'
        }}
      >
        {navItems.map(item => (
          <a
            key={item.key}
            href={item.link}
            className='flex min-w-[6.25rem] px-2 justify-center items-center gap-[0.625rem] text-[#818084] text-center font-montserrat text-base font-medium uppercase hover:text-[#fff]'
          >
            {item.label}
          </a>
        ))}
      </div>
      <button className='sm:hidden'>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g id='bars'>
            <path
              id='Vector'
              d='M2.25 6.1875H21.75C22.1642 6.1875 22.5 5.85173 22.5 5.4375V3.5625C22.5 3.14827 22.1642 2.8125 21.75 2.8125H2.25C1.83577 2.8125 1.5 3.14827 1.5 3.5625V5.4375C1.5 5.85173 1.83577 6.1875 2.25 6.1875ZM2.25 13.6875H21.75C22.1642 13.6875 22.5 13.3517 22.5 12.9375V11.0625C22.5 10.6483 22.1642 10.3125 21.75 10.3125H2.25C1.83577 10.3125 1.5 10.6483 1.5 11.0625V12.9375C1.5 13.3517 1.83577 13.6875 2.25 13.6875ZM2.25 21.1875H21.75C22.1642 21.1875 22.5 20.8517 22.5 20.4375V18.5625C22.5 18.1483 22.1642 17.8125 21.75 17.8125H2.25C1.83577 17.8125 1.5 18.1483 1.5 18.5625V20.4375C1.5 20.8517 1.83577 21.1875 2.25 21.1875Z'
              fill='white'
            />
          </g>
        </svg>
      </button>
      <button className='hidden sm:flex py-4 px-6 items-start gap-[0.625rem] bg-[#322E7D] shadow-[6px_6px_0px_0px_#FFF] text-base font-semibold text-center uppercase transition-all hover:text-[#322E7D] hover:bg-white hover:shadow-[6px_6px_0px_0px_#2d83b6]'>
        Contact Me
      </button>
    </div>
  );
}
