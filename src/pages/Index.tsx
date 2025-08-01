import { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { WhoWeAreSection } from '@/components/sections/WhoWeAreSection';
import { OurApproachSection } from '@/components/sections/OurApproachSection';
import { OurWorkSection } from '@/components/sections/OurWorkSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [activeSubsection, setActiveSubsection] = useState<string | undefined>();

  const handleNavigation = (sectionId: string, subsection?: string) => {
    setCurrentSection(sectionId);
    setActiveSubsection(subsection);
    
    // Scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed navigation
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  // Update current section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'who-we-are', 'our-approach', 'our-work', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const bottom = top + element.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition < bottom) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation onNavigate={handleNavigation} currentSection={currentSection} />
      
      <main>
        <section id="home">
          <HeroSection onNavigate={handleNavigation} />
        </section>
        
        <section id="who-we-are">
          <WhoWeAreSection onNavigate={handleNavigation} />
        </section>
        
        <section id="our-approach">
          <OurApproachSection />
        </section>
        
        <section id="our-work">
          <OurWorkSection activeSubsection={activeSubsection} />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>
    </div>
  );
};

export default Index;
