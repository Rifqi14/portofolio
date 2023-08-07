import Image from 'next/image';
import { TestimonialCard } from './TestimonialCard';

export function TestimonialSection() {
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
      <h1 className='text-center drop-shadow-lg text-[2rem] font-extrabold -tracking-tighter mix-blend-overlay shadow-inner sm:text-6xl uppercase'>
        Testimonial
      </h1>
      <TestimonialCard
        items={[
          {
            avatar: '/profile-picture.png',
            testimonial:
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores corrupti excepturi laudantium eius sint aliquam adipisci eos alias, quibusdam quasi cum possimus et tempora explicabo ratione rerum voluptatem omnis quisquam?',
            name: 'John Doe',
            linkedin: 'https://linkedin.com/',
            last_collab: 'UI/UX Designer'
          },
          {
            avatar: '/profile-picture.png',
            testimonial:
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores corrupti excepturi laudantium eius sint aliquam adipisci eos alias, quibusdam quasi cum possimus et tempora explicabo ratione rerum voluptatem omnis quisquam?',
            name: 'John Doe',
            linkedin: 'https://linkedin.com/',
            last_collab: 'UI/UX Designer'
          },
          {
            avatar: '/profile-picture.png',
            testimonial:
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores corrupti excepturi laudantium eius sint aliquam adipisci eos alias, quibusdam quasi cum possimus et tempora explicabo ratione rerum voluptatem omnis quisquam?',
            name: 'John Doe',
            linkedin: 'https://linkedin.com/',
            last_collab: 'UI/UX Designer'
          },
          {
            avatar: '/profile-picture.png',
            testimonial:
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores corrupti excepturi laudantium eius sint aliquam adipisci eos alias, quibusdam quasi cum possimus et tempora explicabo ratione rerum voluptatem omnis quisquam?',
            name: 'John Doe',
            linkedin: 'https://linkedin.com/',
            last_collab: 'UI/UX Designer'
          },
          {
            avatar: '/profile-picture.png',
            testimonial:
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores corrupti excepturi laudantium eius sint aliquam adipisci eos alias, quibusdam quasi cum possimus et tempora explicabo ratione rerum voluptatem omnis quisquam?',
            name: 'John Doe',
            linkedin: 'https://linkedin.com/',
            last_collab: 'UI/UX Designer'
          },
          {
            avatar: '/profile-picture.png',
            testimonial:
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores corrupti excepturi laudantium eius sint aliquam adipisci eos alias, quibusdam quasi cum possimus et tempora explicabo ratione rerum voluptatem omnis quisquam?',
            name: 'John Doe',
            linkedin: 'https://linkedin.com/',
            last_collab: 'UI/UX Designer'
          },
          {
            avatar: '/profile-picture.png',
            testimonial:
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores corrupti excepturi laudantium eius sint aliquam adipisci eos alias, quibusdam quasi cum possimus et tempora explicabo ratione rerum voluptatem omnis quisquam?',
            name: 'John Doe',
            linkedin: 'https://linkedin.com/',
            last_collab: 'UI/UX Designer'
          },
          {
            avatar: '/profile-picture.png',
            testimonial:
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores corrupti excepturi laudantium eius sint aliquam adipisci eos alias, quibusdam quasi cum possimus et tempora explicabo ratione rerum voluptatem omnis quisquam?',
            name: 'John Doe',
            linkedin: 'https://linkedin.com/',
            last_collab: 'UI/UX Designer'
          },
          {
            avatar: '/profile-picture.png',
            testimonial:
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores corrupti excepturi laudantium eius sint aliquam adipisci eos alias, quibusdam quasi cum possimus et tempora explicabo ratione rerum voluptatem omnis quisquam?',
            name: 'John Doe',
            linkedin: 'https://linkedin.com/',
            last_collab: 'UI/UX Designer'
          },
          {
            avatar: '/profile-picture.png',
            testimonial:
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores corrupti excepturi laudantium eius sint aliquam adipisci eos alias, quibusdam quasi cum possimus et tempora explicabo ratione rerum voluptatem omnis quisquam?',
            name: 'John Doe',
            linkedin: 'https://linkedin.com/',
            last_collab: 'UI/UX Designer'
          }
        ]}
      />
    </section>
  );
}
