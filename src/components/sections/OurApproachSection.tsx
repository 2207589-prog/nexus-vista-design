import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, Lightbulb } from 'lucide-react';

export const OurApproachSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Our Approach
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Card className="group hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-primary/5 to-secondary/5 border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Innovation-Driven Solutions</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We employ a combination of innovation, technology and business model to build a customer-centric innovative solutions in climate, health, energy and food security that can scale up commercially and remain sustainably viable.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-secondary/5 to-accent/5 border-l-4 border-l-secondary">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-secondary to-accent rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Women's Economic Empowerment</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We have intentional commitment to advancing women's economic empowerment. Gender equality is both an investment theme and a strategic goal. We recognize that women and girls are disproportionately affected by prevailing issues in the developing world, such as climate change, global health crises, food insecurity and forced migration.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-card to-muted/50 rounded-2xl p-8 backdrop-blur-sm border border-border/50">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Core Values</h3>
              </div>
              
              <div className="space-y-4 text-center">
                <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                  <h4 className="font-semibold text-primary mb-1">Innovation</h4>
                  <p className="text-sm text-muted-foreground">Pioneering solutions for tomorrow's challenges</p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/20">
                  <h4 className="font-semibold text-secondary mb-1">Sustainability</h4>
                  <p className="text-sm text-muted-foreground">Building viable, long-term solutions</p>
                </div>
                <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
                  <h4 className="font-semibold text-accent mb-1">Impact</h4>
                  <p className="text-sm text-muted-foreground">Creating meaningful change in communities</p>
                </div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};