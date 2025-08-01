import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

export const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/1286d8c1-5e0a-4acf-9ede-c1bb0eda99c8.png" 
          alt="Innovation Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark/80 via-cyber-dark/60 to-cyber-darker/90"></div>
      </div>
      
      {/* Animated Background Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.05)_50%,transparent_75%)] bg-[length:60px_60px] animate-pulse-neon"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* ALTINNOVA Logo */}
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 p-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full backdrop-blur-sm border border-primary/30 animate-glow">
            <img 
              src="/lovable-uploads/7afbff88-236e-4bc2-aab2-98cb7ffe59cc.png" 
              alt="ALTINNOVA Logo" 
              className="w-full h-full object-contain"
            />
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
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-semibold px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 animate-glow border border-primary/30"
          >
            Discover Our Mission
          </Button>
          <Button 
            onClick={() => onNavigate('our-work')}
            variant="outline"
            size="lg"
            className="border-primary/60 text-primary hover:bg-primary/10 hover:border-primary hover:text-primary backdrop-blur-sm font-semibold px-8 py-3 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
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