import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Search, Code, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: 'Penetration Testing & Vulnerability Assessment',
      description: 'Simulated real-world attacks to identify vulnerabilities in your systems, networks, and applications before malicious actors do.',
      features: [
        'Web application penetration testing',
        'API penetration testing ',
        'Network penetration testing',
      ]
    },
    {
      icon: Search,
      title: 'Security Testing',
      description: 'Thorough security evaluation of your infrastructure and applications to ensure robust protection against various attack vectors.',
      features: [
        'Security configuration review',
        'Vulnerability scanning and analysis',
        'Security control validation'
      ]
    },
    {
      icon: Code,
      title: 'Source Code Review',
      description: 'In-depth analysis of application source code to uncover security weaknesses and improve overall code integrity.',
      features: [
        'Comprehensive code analysis to find risks',
        'Identification of vulnerabilities and insecure coding patterns',
        'Clear remediation guidance to strengthen code security'
      ]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            My Services
          </h2>
          <div className="w-20 h-1 bg-gradient-cyber mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Specialized cybersecurity services to help protect your digital assets and strengthen your security posture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`cyber-border hover:cyber-glow transition-all duration-300 bg-card/50 backdrop-blur-sm group fade-in-up delay-${index + 1}`}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-left mx-auto max-w-[100%]">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* <Button 
                  variant="outline" 
                  className="w-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground group/btn"
                  onClick={scrollToContact}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button> */}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 fade-in-up delay-3">
          <div className="inline-flex items-center space-x-4 p-6 bg-primary/5 rounded-lg border border-primary/20">
            <Shield className="w-8 h-8 text-primary" />
            <div className="text-left">
              <h3 className="font-semibold text-foreground">Ready to Secure Your Systems?</h3>
              <p className="text-sm text-muted-foreground">Get in touch to discuss your cybersecurity needs</p>
            </div>
            <Button 
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary-glow text-primary-foreground cyber-glow"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;