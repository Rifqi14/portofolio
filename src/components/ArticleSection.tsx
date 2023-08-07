import Image from 'next/image';
import Link from 'next/link';

export type ArticleTagProps = {
  title: string;
  color: string;
  className?: string;
};

export type ArticleProps = {
  date: string;
  tags: ArticleTagProps[];
  title: string;
  article: string;
  link: string;
};

function ArticleCard({ article, date, link, tags, title }: ArticleProps) {
  return (
    <div className='flex flex-col items-start gap-4 self-stretch'>
      {/* Body */}
      <div className='flex flex-col items-start gap-2 self-stretch'>
        {/* Dates */}
        <div className='flex px-2 py-1 items-start gap-2 border-l-2 border-[#6C63FF]'>
          <p className='text-[.625rem] text-[#A5A5A5]'>{date}</p>
        </div>
        {/* Tags */}
        <div className='flex items-start gap-[.625rem]'>
          {tags.map((tag, idx) => (
            <span
              className={`${tag.color} px-4 py-1 rounded-full ${
                tag.className ?? ''
              }`}
              key={idx}
            >
              {tag.title}
            </span>
          ))}
        </div>
        <p className='text-xl font-semibold'>{title}</p>
        <p className='text-justify overflow-hidden text-ellipsis text-xs self-stretch ellipsis'>
          {article}
        </p>
      </div>
      {/* Footer */}
      <div className='flex justify-end items-center gap-1 self-stretch'>
        <Link href={link} className='flex gap-1'>
          <p className='text-xs text-[#9747FF]'>Read More</p>{' '}
          <svg
            width='16'
            height='16'
            viewBox='0 0 12 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g id='angle-double-right'>
              <path
                id='Vector'
                d='M7.0082 7.46487L3.28945 11.1836C3.03242 11.4406 2.6168 11.4406 2.3625 11.1836L1.74453 10.5656C1.4875 10.3086 1.4875 9.89299 1.74453 9.6387L4.38047 7.00276L1.74453 4.36682C1.4875 4.10979 1.4875 3.69416 1.74453 3.43987L2.35977 2.81643C2.6168 2.5594 3.03242 2.5594 3.28672 2.81643L7.00547 6.53518C7.26523 6.79221 7.26523 7.20784 7.0082 7.46487ZM12.2582 6.53518L8.53945 2.81643C8.28242 2.5594 7.8668 2.5594 7.6125 2.81643L6.99453 3.4344C6.7375 3.69143 6.7375 4.10706 6.99453 4.36135L9.63047 6.99729L6.99453 9.63323C6.7375 9.89026 6.7375 10.3059 6.99453 10.5602L7.6125 11.1781C7.86953 11.4352 8.28516 11.4352 8.53945 11.1781L12.2582 7.4594C12.5152 7.20784 12.5152 6.79221 12.2582 6.53518Z'
                fill='#9747FF'
              />
            </g>
          </svg>
        </Link>
      </div>
    </div>
  );
}

function ArticlesWrapper() {
  const articles: ArticleProps[] = [
    {
      article:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aut, mollitia autem quidem error minus debitis qui consequatur deleniti ea inventore, nihil, explicabo in cumque vel possimus earum dignissimos recusandae!',
      date: 'July 25, 2023',
      link: 'http://localhost:3000',
      tags: [
        { color: 'bg-[#6C63FF]', title: 'Typescript' },
        { color: 'bg-[#83CD29]', title: 'Typescript', className: 'text-black' }
      ],
      title: 'Utility Types'
    },
    {
      article:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aut, mollitia autem quidem error minus debitis qui consequatur deleniti ea inventore, nihil, explicabo in cumque vel possimus earum dignissimos recusandae!',
      date: 'July 25, 2023',
      link: 'http://localhost:3000',
      tags: [
        { color: 'bg-[#6C63FF]', title: 'Typescript' },
        { color: 'bg-[#83CD29]', title: 'Typescript', className: 'text-black' }
      ],
      title: 'Utility Types'
    },
    {
      article:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aut, mollitia autem quidem error minus debitis qui consequatur deleniti ea inventore, nihil, explicabo in cumque vel possimus earum dignissimos recusandae!',
      date: 'July 25, 2023',
      link: 'http://localhost:3000',
      tags: [
        { color: 'bg-[#6C63FF]', title: 'Typescript' },
        { color: 'bg-[#83CD29]', title: 'Typescript', className: 'text-black' }
      ],
      title: 'Utility Types'
    },
    {
      article:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aut, mollitia autem quidem error minus debitis qui consequatur deleniti ea inventore, nihil, explicabo in cumque vel possimus earum dignissimos recusandae!',
      date: 'July 25, 2023',
      link: 'http://localhost:3000',
      tags: [
        { color: 'bg-[#6C63FF]', title: 'Typescript' },
        { color: 'bg-[#83CD29]', title: 'Typescript', className: 'text-black' }
      ],
      title: 'Utility Types'
    }
  ];

  return (
    <div className='flex flex-col items-start gap-4 self-stretch'>
      {articles.map((article, idx) => (
        <ArticleCard key={idx} {...article} />
      ))}
      <Link href={'/'} className='w-full'>
        <span className='flex w-full px-2 py-1 justify-center items-center text-center gap-2 bg-[#00949D] shadow-[3px_3px_0px_0px_#FFF] text-xs font-semibold uppercase sm:text-base sm:py-2 sm:px-4 transition-all hover:bg-white hover:shadow-[3px_3px_0px_0px_#00949D] hover:text-[#00949D]'>
          View More Article
        </span>
      </Link>
    </div>
  );
}

export function ArticleSection() {
  return (
    <section className='flex self-stretch px-6 sm:px-40 py-4 flex-col gap-6'>
      <Image
        src={'/images/background.png'}
        alt='background'
        width={0}
        height={0}
        className='sm:rotate-6 absolute -z-20 left-8 sm:blur-[100px] blur-xl w-10/12'
        sizes='100vw'
      />
      <h1 className='text-center sm:text-left drop-shadow-lg text-[2rem] font-extrabold -tracking-tighter mix-blend-overlay shadow-inner sm:text-6xl uppercase'>
        Articles
      </h1>
      <div className='wrapper flex flex-col sm:flex-row items-start gap-[4.5rem] self-stretch'>
        <ArticlesWrapper />
        {/* Right Wrapper */}
        <div className='flex flex-col items-start gap-9 self-stretch'>
          {/* Subscribe */}
          <div className='flex flex-col p-8 justify-center items-start gap-6 self-stretch rounded-md border-[#7C00B6] shadow-[0px_0px_50px_0px_#7B1BA8]'>
            <div className='flex flex-col justify-center items-start gap-2 self-stretch'>
              <div className='flex items-center gap-3'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                >
                  <path
                    d='M15.6969 5.9625C15.8187 5.86563 16 5.95625 16 6.10938V12.5C16 13.3281 15.3281 14 14.5 14H1.5C0.671875 14 0 13.3281 0 12.5V6.1125C0 5.95625 0.178125 5.86875 0.303125 5.96562C1.00312 6.50937 1.93125 7.2 5.11875 9.51562C5.77813 9.99687 6.89062 11.0094 8 11.0031C9.11563 11.0125 10.25 9.97813 10.8844 9.51562C14.0719 7.2 14.9969 6.50625 15.6969 5.9625ZM8 10C8.725 10.0125 9.76875 9.0875 10.2937 8.70625C14.4406 5.69688 14.7562 5.43437 15.7125 4.68437C15.8937 4.54375 16 4.325 16 4.09375V3.5C16 2.67188 15.3281 2 14.5 2H1.5C0.671875 2 0 2.67188 0 3.5V4.09375C0 4.325 0.10625 4.54062 0.2875 4.68437C1.24375 5.43125 1.55938 5.69688 5.70625 8.70625C6.23125 9.0875 7.275 10.0125 8 10Z'
                    fill='#D6D3D3'
                  />
                </svg>
                <p className='text-base font-medium'>Subscribe</p>
              </div>
              <p className='text-justify text-xs'>
                Get notified when I publish something new, and unsubscribe at
                any time.
              </p>
            </div>
            {/* Form */}
            <div className='flex items-center gap-4 self-stretch'>
              <input
                placeholder='Email address'
                className='flex px-2 py-3 items-center gap-[.625rem] flex-[1_0_0] rounded-md border-[#A5A5A5] bg-[#3F3D56] w-full'
                type='email'
                autoComplete='off'
              />
              <button className='text-xs font-medium flex px-2 justify-center items-center gap-[.625rem] self-stretch rounded-md bg-[#7B1BA8]'>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
