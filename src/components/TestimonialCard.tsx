import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import 'swiper/css';

export type TestimonialProps = {
  items: TestimonialItem[];
};

export type TestimonialItem = {
  avatar: string;
  testimonial: string;
  name: string;
  last_collab: string;
  linkedin: string;
};

function Card({
  avatar,
  last_collab,
  linkedin,
  name,
  testimonial
}: TestimonialItem) {
  return (
    <div className='flex p-6 items-start gap-4 flex-[1_0_0] rounded-lg border-[#7B1BA8] bg-black shadow-[0px_0px_200px_0px_rgba(151_71_255_0.80)] relative max-h-[7.5rem] overflow-hidden sm:max-h-44'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='91'
        height='91'
        viewBox='0 0 91 91'
        fill='none'
        className='absolute w-20 -right-2 top-5 sm:w-24 sm:-right-[1rem] sm:top-[2.625rem]'
      >
        <mask
          id='mask0_135_227'
          style={{
            maskType: 'alpha'
          }}
          maskUnits='userSpaceOnUse'
          x='-8'
          y='-41'
          width='87'
          height='148'
        >
          <rect x='-8' y='-41' width='87' height='148' fill='#D9D9D9' />
        </mask>
        <g mask='url(#mask0_135_227)'>
          <path
            d='M82.4688 45.5H68.25V34.125C68.25 27.851 73.351 22.75 79.625 22.75H81.0469C83.4107 22.75 85.3125 20.8482 85.3125 18.4844V9.95312C85.3125 7.58926 83.4107 5.6875 81.0469 5.6875H79.625C63.9133 5.6875 51.1875 18.4133 51.1875 34.125V76.7812C51.1875 81.4912 55.0088 85.3125 59.7188 85.3125H82.4688C87.1787 85.3125 91 81.4912 91 76.7812V54.0312C91 49.3213 87.1787 45.5 82.4688 45.5ZM31.2812 45.5H17.0625V34.125C17.0625 27.851 22.1635 22.75 28.4375 22.75H29.8594C32.2232 22.75 34.125 20.8482 34.125 18.4844V9.95312C34.125 7.58926 32.2232 5.6875 29.8594 5.6875H28.4375C12.7258 5.6875 0 18.4133 0 34.125V76.7812C0 81.4912 3.82129 85.3125 8.53125 85.3125H31.2812C35.9912 85.3125 39.8125 81.4912 39.8125 76.7812V54.0312C39.8125 49.3213 35.9912 45.5 31.2812 45.5Z'
            fill='#7A5A79'
          />
        </g>
      </svg>
      <div>
        <Image
          src={avatar}
          width={0}
          height={0}
          alt='card-image'
          sizes='100vw'
          className='w-full min-w-[4rem] min-h-[4rem] max-w-[4rem] max-h-[4rem] object-cover sm:w-full sm:min-w-[8rem] sm:min-h-[8rem] sm:max-w-[8rem] sm:max-h-[8rem] rounded-md sm:rounded-md'
        />
      </div>
      <div className='flex flex-col items-start gap-1 sm:gap-[0.625rem] flex-[1_0_0] justify-between z-10'>
        <p className='text-justify text-ellipsis overflow-hidden text-xs sm:text-base h-[3.125rem] sm:h-[4.5rem]'>
          {testimonial}
        </p>
        <div className='flex w-full gap-[.625rem] justify-between items-center'>
          <div className='flex flex-col items-start gap-1'>
            <p className='font-bold text-sm sm:text-base'>{name}</p>
            <p className='text-[.625rem] sm:text-base'>{last_collab}</p>
          </div>
          <Link href={linkedin}>
            <span className='hidden sm:flex w-full px-2 py-1 justify-center items-center text-center gap-2 bg-[#0300A0] shadow-[3px_3px_0px_0px_#FFF] text-xs font-semibold uppercase sm:text-base sm:py-2 sm:px-4 transition-all hover:bg-white hover:shadow-[3px_3px_0px_0px_#0300A0] hover:text-[#0300A0]'>
              Visit Linkedin
            </span>
            <span className='flex sm:hidden w-full px-2 py-1 justify-center items-center text-center gap-2 bg-[#0300A0] shadow-[3px_3px_0px_0px_#FFF] text-xs font-semibold uppercase sm:text-base sm:py-2 sm:px-4 transition-all hover:bg-white hover:shadow-[3px_3px_0px_0px_#0300A0] hover:text-[#0300A0]'>
              <svg
                width='16'
                height='16'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g id='linkedin'>
                  <path
                    id='Vector'
                    d='M21 2H2.99531C2.17031 2 1.5 2.67969 1.5 3.51406V21.4859C1.5 22.3203 2.17031 23 2.99531 23H21C21.825 23 22.5 22.3203 22.5 21.4859V3.51406C22.5 2.67969 21.825 2 21 2ZM7.84687 20H4.73438V9.97812H7.85156V20H7.84687ZM6.29062 8.60938C5.29219 8.60938 4.48594 7.79844 4.48594 6.80469C4.48594 5.81094 5.29219 5 6.29062 5C7.28437 5 8.09531 5.81094 8.09531 6.80469C8.09531 7.80312 7.28906 8.60938 6.29062 8.60938ZM19.5141 20H16.4016V15.125C16.4016 13.9625 16.3781 12.4672 14.7844 12.4672C13.1625 12.4672 12.9141 13.7328 12.9141 15.0406V20H9.80156V9.97812H12.7875V11.3469H12.8297C13.2469 10.5594 14.2641 9.72969 15.7781 9.72969C18.9281 9.72969 19.5141 11.8062 19.5141 14.5062V20Z'
                    fill='#FFF'
                  />
                </g>
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export function TestimonialCard({ items }: TestimonialProps) {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slides: {
      perView: 1,
      spacing: 8
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: {
          perView: 2,
          spacing: 16
        }
      }
    }
  });

  return (
    <div className='flex flex-col items-center justify-center gap-1'>
      <div ref={sliderRef} className='keen-slider'>
        {items.map((item, index) => (
          <div className='keen-slider__slide' key={index}>
            <Card {...item} />
          </div>
        ))}
      </div>
      {instanceRef.current && (
        <div className='flex px-6 py-4 gap-1'>
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys()
          ].map(idx => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='8'
                  height='8'
                  viewBox='0 0 8 8'
                  fill='none'
                >
                  <circle
                    cx='4'
                    cy='4'
                    r='4'
                    fill={currentSlide === idx ? '#7B1BA8' : '#818084'}
                  />
                </svg>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
