import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import StatsSection from '@/components/sections/StatsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ServicesSection from '@/components/sections/ServicesSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ProjectsSection />
      <ServicesSection />
    </>
  );
}