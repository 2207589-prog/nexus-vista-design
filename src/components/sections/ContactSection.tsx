import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to turn innovation into impact? Get in touch with our team
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Get in Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you're interested in our renewable energy innovations, digital transformation consulting, or exploring partnership opportunities, we'd love to hear from you.
              </p>
            </div>

            <div className="grid gap-6">
              <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/30">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Address</h4>
                      <div className="text-muted-foreground space-y-1">
                        <p>Ongata Mall, Ongata Rongai</p>
                        <p>P.O Box 266 - 00511</p>
                        <p>Ongata Rongai, Kenya</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/30">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Phone</h4>
                      <a 
                        href="tel:+254727717835" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +254727717835
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/30">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Email</h4>
                      <a 
                        href="mailto:info@altinnova.ke" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        info@altinnova.ke
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="bg-gradient-to-br from-card to-muted/50 border-2 border-border/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Ready to Innovate Together?</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto">
                  <Mail className="h-10 w-10 text-primary-foreground" />
                </div>
                
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Partner with us to create sustainable solutions that make a real difference in communities worldwide.
                  </p>
                  
                  <div className="space-y-3">
                    <Button 
                      asChild
                      className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-semibold"
                    >
                      <a href="mailto:info@altinnova.ke">Send us an Email</a>
                    </Button>
                    
                    <Button 
                      asChild
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <a href="tel:+254727717835">Call Us Now</a>
                    </Button>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    We typically respond within 24 hours
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};