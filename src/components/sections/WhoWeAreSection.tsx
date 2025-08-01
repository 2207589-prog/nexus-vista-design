import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, Cog, ArrowRight } from 'lucide-react';

interface WhoWeAreSectionProps {
  onNavigate: (section: string, subsection?: string) => void;
}

export const WhoWeAreSection = ({ onNavigate }: WhoWeAreSectionProps) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Who We Are
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            ALTINNOVA focuses on two principal areas of innovation and impact
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Renewable Energy Focus */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mr-4">
                  <Zap className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Innovative Technologies in Grassroots Productive Use of Renewable Energy</h3>
              </div>
              
              <div className="space-y-4 mb-6 text-muted-foreground">
                <p>
                  A social entrepreneurship grassroots organization that champions disruptive socio-technological innovation ecosystems and nurtures innovative solutions in climate, health, energy and food security that can scale up commercially and remain sustainably viable
                </p>
                <p>
                  Employing a combination of innovation, technology and business model to build a customer-centric, sustainable & equitable enterprises that address challenges in climate, health, energy and food security
                </p>
                <p>
                  Invests in the development, rigorous testing, proofing concepts and scaling up of new products, services or business process, that are more cost-effective than current practice and targeted at improving the lives of the world's poorest people.
                </p>
                <p>
                  Open to innovative ideas. Because the best ideas for solving some of the world's most critical development problems can come from anyone, anywhere, we provide an open window to receive innovative ideas.
                </p>
              </div>

              <Button 
                onClick={() => onNavigate('our-work', 'renewable-energy')}
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                variant="outline"
              >
                Learn More About Our Renewable Energy Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Digital Transformation */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-secondary to-accent rounded-lg flex items-center justify-center mr-4">
                  <Cog className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Innovations and Digital Transformation Consulting</h3>
              </div>
              
              <div className="space-y-4 mb-6 text-muted-foreground">
                <p>
                  Provide innovations and digitalization program evaluation services to international development and humanitarian agencies.
                </p>
                <p>
                  Provides innovations and digitalization strategy development services to international development and humanitarian agencies.
                </p>
              </div>

              <Button 
                onClick={() => onNavigate('our-work', 'digital-transformation')}
                className="w-full group-hover:bg-secondary group-hover:text-primary-foreground transition-all duration-300"
                variant="outline"
              >
                Learn More About Our Consulting Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};