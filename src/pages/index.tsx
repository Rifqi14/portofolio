import { HeroSection } from '@/components/HeroSection';
import { NavBar } from '@/components/NavBar';

export default function Home() {
  return (
    <main className='font-montserrat text-[#FFF]'>
      <div className='flex flex-col sm:h-screen'>
        {/* Navbar */}
        <NavBar />
        {/* Hero Section */}
        <HeroSection />
      </div>
    </main>
  );
}
