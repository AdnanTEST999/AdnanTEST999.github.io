import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, Target } from 'lucide-react';

const About = () => {
  const certifications = [
    'eWPTx (eLearnSecurity Web application Penetration Tester eXtreme)',
    'eWPT (eLearnSecurity Web application Penetration Tester)',
    'eJPT (eLearnSecurity Junior Penetration Tester)',
    'ISC2 CC (Certified in Cybersecurity)'
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-cyber mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* About Content */}
            <div className="fade-in-up delay-1">
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Target className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">My Journey</h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  As a cybersecurity consultant, I'm passionate about helping organizations 
                  identify and address security vulnerabilities. My focus is on practical, hands-on 
                  security testing and assessment to strengthen digital defenses.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  I believe in continuous learning and staying current with the latest security 
                  threats and mitigation techniques. My approach combines technical expertise 
                  with clear communication to help clients understand and address their security challenges.
                </p>

                <div className="flex items-center space-x-3 mt-8">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  <h4 className="text-lg font-semibold text-foreground">Focus Areas</h4>
                </div>
                
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Penetration Testing & Vulnerability Assessment</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Security Testing & Risk Evaluation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Source Code Analysis</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Cybersecurity Consultancy</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Certifications Card */}
            <div className="fade-in-up delay-2">
              <Card className="p-8 cyber-border bg-card/50 backdrop-blur-sm">
                <div className="flex items-center space-x-3 mb-6">
                  <Award className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">Certifications</h3>
                </div>
                
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="group">
                      <Badge 
                        variant="outline" 
                        className="w-full justify-start p-3 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                      >
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-125 transition-transform"></div>
                          <span className="text-sm text-foreground">{cert}</span>
                        </div>
                      </Badge>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <p className="text-sm text-muted-foreground text-center">
                    Committed to continuous learning and professional development in cybersecurity
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;