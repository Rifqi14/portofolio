import { useEffect, useState } from 'react';

type NavItem = {
  label: string;
  link: string;
  key: string;
  active?: boolean;
  className?: string;
};

export default function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMobileViewport, setIsMobileViewport] = useState<boolean>(false);

  const navItems: NavItem[] = [
    { label: 'Home', link: '#', key: 'home' },
    { label: 'About', link: '#', key: 'about' },
    { label: 'Post', link: '#', key: 'post' },
    { label: 'Project', link: '#', key: 'projects' },
    { label: 'Skill', link: '#', key: 'skills' },
    { label: 'Services', link: '#', key: 'services' }
  ];

  useEffect(() => {
    if (window.innerWidth >= 640) {
      setIsMobileViewport(false);
    } else {
      setIsMobileViewport(true);
    }
    window.addEventListener(`resize`, () => {
      if (window.innerWidth >= 640) {
        setIsMobileViewport(false);
      } else {
        setIsMobileViewport(true);
      }
    });
  }, []);

  return (
    <header
      className={`top-0 z-10 h-16 pt-3 fixed w-full bg-transparent backdrop-filter backdrop-blur-lg bg-opacity-10 border-b border-transparent`}
    >
      <div className='sm:px-8 w-full'>
        <div className='mx-auto max-w-7xl lg:px-8'>
          <div className='relative px-4 sm:px-8 lg:px-12'>
            <div className='mx-auto max-w-2xl lg:max-w-5xl'>
              <div
                className={`relative ${
                  !isMobileViewport ? 'flex' : 'block'
                } gap-4`}
              >
                <div
                  className={`flex ${
                    !isMobileViewport ? 'flex-1' : 'justify-end'
                  }`}
                >
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`${
                      isMobileViewport
                        ? 'flex items-start px-3 py-2 rounded text-black-500 hover:text-black-400'
                        : 'hidden'
                    }`}
                  >
                    <svg
                      className={`fill-[#FD8F8F] h-5 w-5 ${
                        isOpen ? 'hidden' : 'block'
                      }`}
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
                    </svg>

                    <svg
                      className={`fill-[#FD8F8F] h-5 w-5 ${
                        isOpen ? 'block' : 'hidden'
                      }`}
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z' />
                    </svg>
                  </button>
                </div>
                <div
                  className={`${
                    !isMobileViewport
                      ? 'flex flex-1 justify-end sm:justify-center sm:block'
                      : isOpen
                      ? 'block'
                      : 'hidden'
                  }`}
                >
                  <nav className='pointer-events-auto md:block'>
                    <ul
                      className={`${
                        !isMobileViewport
                          ? 'flex items-center justify-between'
                          : 'block'
                      } rounded-md border-black shadow-md border-[.25rem] bg-[#FD8F8F] dark:bg-[#FD8F8F] px-3 text-sm font-medium`}
                    >
                      {navItems.map(nav => (
                        <li key={nav.key}>
                          <a
                            className={`relative block px-3 py-2 transition hover:text-amber-900 dark:hover:text-amber-900`}
                            href={nav.link}
                          >
                            {nav.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
                <div className='flex justify-end flex-1'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
