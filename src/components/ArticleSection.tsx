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
          <p className='text-[.625rem] text-[#A5A5A5] sm:text-sm'>{date}</p>
        </div>
        {/* Tags */}
        <div className='flex items-start gap-[.625rem]'>
          {tags.map((tag, idx) => (
            <span
              className={`${tag.color} px-4 py-1 rounded-full ${
                tag.className ?? ''
              } text-xs font-medium`}
              key={idx}
            >
              {tag.title}
            </span>
          ))}
        </div>
        <Link href={link} className='text-xl font-semibold sm:text-4xl'>
          {title}
        </Link>
        <p className='text-justify overflow-hidden text-ellipsis text-xs self-stretch ellipsis sm:text-base'>
          {article}
        </p>
      </div>
      {/* Footer */}
      <div className='flex justify-end items-center gap-1 self-stretch'>
        <Link
          href={link}
          className='flex gap-1 group hover:bg-[#9747FF] hover:px-2 hover:py-2 hover:rounded-full transition-all'
        >
          <p className='text-xs sm:text-sm text-[#9747FF] group-hover:text-white'>
            Read More
          </p>{' '}
          <svg
            width='16'
            height='16'
            viewBox='0 0 12 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='fill-[#9747FF] group-hover:fill-white'
          >
            <g id='angle-double-right'>
              <path
                id='Vector'
                d='M7.0082 7.46487L3.28945 11.1836C3.03242 11.4406 2.6168 11.4406 2.3625 11.1836L1.74453 10.5656C1.4875 10.3086 1.4875 9.89299 1.74453 9.6387L4.38047 7.00276L1.74453 4.36682C1.4875 4.10979 1.4875 3.69416 1.74453 3.43987L2.35977 2.81643C2.6168 2.5594 3.03242 2.5594 3.28672 2.81643L7.00547 6.53518C7.26523 6.79221 7.26523 7.20784 7.0082 7.46487ZM12.2582 6.53518L8.53945 2.81643C8.28242 2.5594 7.8668 2.5594 7.6125 2.81643L6.99453 3.4344C6.7375 3.69143 6.7375 4.10706 6.99453 4.36135L9.63047 6.99729L6.99453 9.63323C6.7375 9.89026 6.7375 10.3059 6.99453 10.5602L7.6125 11.1781C7.86953 11.4352 8.28516 11.4352 8.53945 11.1781L12.2582 7.4594C12.5152 7.20784 12.5152 6.79221 12.2582 6.53518Z'
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
    <section className='flex self-stretch p-6 sm:px-40 flex-col gap-6'>
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
          <div className='flex flex-col p-8 justify-center items-start gap-6 self-stretch rounded-md border-[#7C00B6] bg-blend-overlay bg-black shadow-[0px_0px_50px_0px_rgb(123,27,168,1)]'>
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
          {/* Contact */}
          <div className='flex flex-col items-start gap-9 self-stretch'>
            <div className='flex items-start gap-[.625rem] flex-shrink-0 self-stretch min-h-[3.5rem]'>
              <div className='flex p-4 flex-col items-start gap-[.625rem] bg-[#7B1BA8] rounded-md'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <path
                    d='M23.3156 16.9592L18.0655 14.7092C17.8412 14.6136 17.5919 14.5935 17.3552 14.6518C17.1185 14.7101 16.9071 14.8438 16.7529 15.0326L14.4279 17.8733C10.779 16.1529 7.84242 13.2163 6.12198 9.5674L8.96266 7.24236C9.15188 7.08845 9.28581 6.87709 9.34418 6.64026C9.40254 6.40343 9.38215 6.15404 9.2861 5.92983L7.03606 0.679743C6.93064 0.438055 6.7442 0.240725 6.50887 0.12178C6.27355 0.00283371 6.00409 -0.0302726 5.74697 0.0281692L0.87189 1.15319C0.623996 1.21043 0.402825 1.35001 0.244474 1.54914C0.0861227 1.74827 -5.71046e-05 1.9952 2.8389e-08 2.24961C2.8389e-08 14.2733 9.74548 24 21.7504 24C22.0049 24.0002 22.2519 23.914 22.4511 23.7557C22.6504 23.5973 22.79 23.3761 22.8473 23.1281L23.9723 18.253C24.0304 17.9946 23.9965 17.7241 23.8767 17.488C23.7568 17.2518 23.5584 17.0649 23.3156 16.9592Z'
                    fill='#FFF4F4'
                  />
                </svg>
              </div>
              <div className='flex py-1 flex-col justify-between items-start self-stretch'>
                <p className='text-xs font-light uppercase'>Phone</p>
                <p className='text-base font-medium uppercase'>083854598413</p>
              </div>
            </div>
            <div className='flex items-start gap-[.625rem] flex-shrink-0 self-stretch min-h-[3.5rem]'>
              <div className='flex px-4 py-[1.19rem] flex-col items-start gap-[.625rem] bg-[#6B63FF] rounded-md'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='18'
                  viewBox='0 0 24 18'
                  fill='none'
                >
                  <path
                    d='M23.5453 5.94375C23.7281 5.79844 24 5.93437 24 6.16406V15.75C24 16.9922 22.9922 18 21.75 18H2.25C1.00781 18 0 16.9922 0 15.75V6.16875C0 5.93438 0.267187 5.80312 0.454687 5.94844C1.50469 6.76406 2.89688 7.8 7.67813 11.2734C8.66719 11.9953 10.3359 13.5141 12 13.5047C13.6734 13.5188 15.375 11.9672 16.3266 11.2734C21.1078 7.8 22.4953 6.75938 23.5453 5.94375ZM12 12C13.0875 12.0188 14.6531 10.6313 15.4406 10.0594C21.6609 5.54531 22.1344 5.15156 23.5687 4.02656C23.8406 3.81562 24 3.4875 24 3.14062V2.25C24 1.00781 22.9922 0 21.75 0H2.25C1.00781 0 0 1.00781 0 2.25V3.14062C0 3.4875 0.159375 3.81094 0.43125 4.02656C1.86563 5.14687 2.33906 5.54531 8.55938 10.0594C9.34688 10.6313 10.9125 12.0188 12 12Z'
                    fill='#D6D3D3'
                  />
                </svg>
              </div>
              <div className='flex py-1 flex-col justify-between items-start self-stretch'>
                <p className='text-xs font-light uppercase'>Email</p>
                <p className='text-base font-medium'>rifqi.persie@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
