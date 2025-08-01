import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Zap, Cog, CheckCircle, Target, Users, Lightbulb } from 'lucide-react';

interface OurWorkSectionProps {
  activeSubsection?: string;
}

export const OurWorkSection = ({ activeSubsection }: OurWorkSectionProps) => {
  const [activeTab, setActiveTab] = useState(activeSubsection || 'renewable-energy');

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Our Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our innovative projects and consulting services making real impact
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-12 bg-card/50 backdrop-blur-sm">
            <TabsTrigger 
              value="renewable-energy" 
              className="flex items-center space-x-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <Zap className="h-4 w-4" />
              <span>Renewable Energy</span>
            </TabsTrigger>
            <TabsTrigger 
              value="digital-transformation"
              className="flex items-center space-x-2 data-[state=active]:bg-secondary data-[state=active]:text-primary-foreground"
            >
              <Cog className="h-4 w-4" />
              <span>Digital Transformation</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="renewable-energy" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
                <CardHeader>
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mb-2">
                    <Target className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">Proof of Concepts (POC) & Evidence Generation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Design and conduct POCs on:</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Small scale community run mini hydro's providing power for irrigation water pumping</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Portable renewable energy-based irrigation water pumping packs</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Irrigation water pumping as service for small scale farmers</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>CapEx-as-a-Service (CaaS) for irrigation water pumping for small scale farmers</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Scaling of Decentralized Renewable Energy (DRE) innovations in rural communities</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Develop business models of scaling proven viable innovative options</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
                <CardHeader>
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mb-2">
                    <Lightbulb className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">Contribute to Evidence</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>The viability and effectiveness of various innovative business solutions across agricultural value chains.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>The social-economic benefits of adopting innovative technologies including improvements in income, productivity, and quality of life.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>The benefits of capacity-building and matchmaking support in facilitating the integration of innovative technologies in agricultural value chains.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
                <CardHeader>
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mb-2">
                    <Zap className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">Innovation in Renewable Energy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Small scale irrigation water pumping</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Productive Use of Renewable (PURE) Technologies in Agricultural Value Chains</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Mobilize resources to support scaling of innovative business models that incorporate PURE technologies.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Scale innovative business models including CapEx-as-a-Service (CaaS), Irrigation as a service (IaaS) and lease to own models for small holder agriculture</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50 md:col-span-2 lg:col-span-3">
                <CardHeader>
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mb-2">
                    <Users className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">Enhance Capacity and Foster Strategic Linkages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-muted-foreground mb-3">By strengthening the abilities of cooperatives, farmer producer organizations, self-help groups, and women's groups – to integrate PURE technologies to improve their agronomy practices</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Encourage collaborations with other stakeholders to create a supportive ecosystem for the adoption and sustainability of PURE technologies.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50 md:col-span-2 lg:col-span-3">
                <CardHeader>
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mb-2">
                    <Zap className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">Decentralized Renewable Energy (DRE) Innovations in Rural Communities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium text-foreground">Mini Hydro Development</h4>
                      <p className="text-sm text-muted-foreground">Development of mini hydro-based power generation plants (&lt;1MW) as off grid sources for portable power (power on wheels) to health facilities, schools, community lighting and irrigation</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-foreground">Youth & Women Empowerment</h4>
                      <p className="text-sm text-muted-foreground">Development youth and women operated cost effective power on wheels solutions for health facilities, schools, community lighting and irrigation</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-foreground">Local Training Programs</h4>
                      <p className="text-sm text-muted-foreground">Initiate partnerships to train local youths to undertake low skill electrical work to support power on wheels solutions in the rural areas</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="digital-transformation" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-all duration-300 border-2 hover:border-secondary/50">
                <CardHeader>
                  <div className="w-10 h-10 bg-gradient-to-r from-secondary to-accent rounded-lg flex items-center justify-center mb-2">
                    <Target className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">Innovations and Digital Transformation Evaluations for Country Strategies</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Country Programs Evaluation (CPEs) and Thematic Evaluations (TEs) for the UN, Governments and international agencies on Innovations and digital transformations</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Strategic and technical advisory on innovations and digital transformation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Strategic and technical advisory services at pre-planning, planning and execution phase of innovations and digital transformation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 border-2 hover:border-secondary/50">
                <CardHeader>
                  <div className="w-10 h-10 bg-gradient-to-r from-secondary to-accent rounded-lg flex items-center justify-center mb-2">
                    <Cog className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">Operational Planning & Strategy Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Development of innovations and digital transformation operational plans</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                      <span>Development of innovations and digital transformation operational plans that align to the organization's strategic perspectives, resource capacity and changes in the market</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};