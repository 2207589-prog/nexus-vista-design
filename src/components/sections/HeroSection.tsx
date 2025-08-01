import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

export const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background - will be replaced with uploaded image */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-light to-cyber-darker"></div>
      
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%)] bg-[length:60px_60px]"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Logo placeholder - will be replaced with uploaded logo */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-primary-foreground">A</span>
          </div>
        </div>
        
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Turning Innovation
          </span>
          <br />
          <span className="bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">
            into Impact
          </span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Pioneering innovative technologies in renewable energy and digital transformation consulting
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            onClick={() => onNavigate('who-we-are')}
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-semibold px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Discover Our Mission
          </Button>
          <Button 
            onClick={() => onNavigate('our-work')}
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-3 transition-all duration-300"
          >
            Explore Our Work
          </Button>
        </div>
        
        {/* Scroll indicator */}
        <div className="animate-bounce">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onNavigate('who-we-are')}
            className="text-muted-foreground hover:text-foreground"
          >
            <ArrowDown className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};