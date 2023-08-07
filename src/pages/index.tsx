import { ArticleSection } from '@/components/ArticleSection';
import { BreakSection } from '@/components/BreakSection';
import { HeroSection } from '@/components/HeroSection';
import { NavBar } from '@/components/NavBar';
import { ProjectSection } from '@/components/ProjectSection';
import { TestimonialSection } from '@/components/TestimonialSection';
import { ToolSection } from '@/components/ToolSection';

export default function Home() {
  return (
    <main className='font-montserrat text-[#FFF]'>
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
  );
}
