import Image from 'next/image';
import Link from 'next/link';

export type ProjectCardProps = {
  imagePosition: 'left' | 'right';
};

export function ProjectCardSection({ imagePosition }: ProjectCardProps) {
  return (
    <div
      className={`flex flex-col ${
        imagePosition === 'left' ? 'sm:flex-row' : 'sm:flex-row-reverse'
      } pb-0 items-start gap-2 border-2 border-[#BA48FF] rounded-md bg-[#181548] shadow-[0px_0px_20px_0px_#CF46FF] w-full sm:px-40 sm:py-9 sm:bg-inherit sm:border-none sm:shadow-none sm:gap-6`}
    >
      <Image
        src={'/profile-picture.png'}
        width={0}
        height={0}
        alt='card-image'
        sizes='100vw'
        className='w-full object-cover max-w-min max-h-48 sm:w-full sm:min-w-[32rem] sm:min-h-[21rem] sm:max-w-[32rem] sm:max-h-[21rem] sm:rounded-lg'
      />
      <div
        className={`flex px-4 py-4 flex-col items-start gap-6 self-stretch sm:py-4 sm:px-2 sm:gap-4 sm:items-start`}
      >
        <div className='flex flex-col items-start gap-2 self-stretch flex-auto'>
          <div
            className={`flex justify-between items-center self-stretch sm:flex-col-reverse ${
              imagePosition === 'left' ? 'sm:items-start' : 'sm:items-end'
            } sm:gap-4`}
          >
            <span className='text-xl font-bold sm:text-6xl'>Title</span>
            <div className='flex px-2 py-[.125rem] items-center gap-3 rounded-full border-2 border-[#29FA31] bg-gradient-to-br from-[#3860ED_0%] to-[#d538ed80] shadow-[0px_0px_27px_0px_#32C75C] text-xs sm:text-xl sm:py-1 sm:px-4'>
              Backend
            </div>
          </div>
          <span className='text-justify text-xs font-light text-ellipsis overflow-hidden w-full h-12 sm:h-36 sm:text-base'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            maxime molestiae dicta nesciunt voluptatum minima consequuntur
            dolore et nihil ad? Ut voluptatibus ratione dolores id neque dolor
            eveniet aperiam optio! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Placeat maxime molestiae dicta nesciunt voluptatum
            minima consequuntur dolore et nihil ad? Ut voluptatibus ratione
            dolores id neque dolor eveniet aperiam optio! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Placeat maxime molestiae dicta
            nesciunt voluptatum minima consequuntur dolore et nihil ad? Ut
            voluptatibus ratione dolores id neque dolor eveniet aperiam optio!
            dolores id neque dolor eveniet aperiam optio! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Placeat maxime molestiae dicta
            nesciunt voluptatum minima consequuntur dolore et nihil ad? Ut
            voluptatibus ratione dolores id neque dolor eveniet aperiam optio!
          </span>
        </div>
        <Link
          href={'/'}
          className={`flex flex-col content-center items-end gap-3 self-stretch ${
            imagePosition === 'right' ? 'sm:items-start' : 'sm:items-end'
          }`}
        >
          <span className='flex px-2 py-1 content-end items-center gap-2 bg-[#00949D] shadow-[3px_3px_0px_0px_#FFF] text-xs font-semibold uppercase sm:text-base sm:py-2 sm:px-4 transition-all hover:bg-white hover:shadow-[3px_3px_0px_0px_#00949D] hover:text-[#00949D]'>
            View Project
          </span>
        </Link>
      </div>
    </div>
  );
}
