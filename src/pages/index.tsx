import { ArticleSection } from '@/components/ArticleSection';
import { BreakSection } from '@/components/BreakSection';
import { HeroSection, SocmedSection } from '@/components/HeroSection';
import { NavBar } from '@/components/NavBar';
import { ProjectSection } from '@/components/ProjectSection';
import { TestimonialSection } from '@/components/TestimonialSection';
import { ToolSection } from '@/components/ToolSection';

export default function Home() {
  return (
    <>
      <main>
        {/* Navbar */}
        <NavBar />
        <div className='flex flex-col sm:h-screen'>
          {/* Hero Section */}
          <HeroSection />
        </div>
        {/* Tools Section */}
        <ToolSection />
        {/* Project Section */}
        <ProjectSection />
        {/* Break Section */}
        <BreakSection />
        {/* Testimonial Section */}
        <TestimonialSection />
        {/* Article Section */}
        <ArticleSection />
      </main>
      <footer className='flex px-6 flex-col justify-center items-start gap-[.625rem] self-stretch sm:py-4 sm:px-40 sm:items-center'>
        <div className='flex py-4 flex-col justify-between items-center self-stretch border-t border-[#929292] min-h-[6rem] sm:py-9 sm:justify-between sm:flex-row'>
          <SocmedSection />
          <p className='text-base font-medium'>@2023 Muhammad Rifqi</p>
        </div>
      </footer>
    </>
  );
}
