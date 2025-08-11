import { Button } from '@/components/ui/button';
import { ArrowDown, Shield, Code, Search } from 'lucide-react';
import heroImage from '@/assets/cyber-hero.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Cybersecurity Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-glow rounded-full opacity-20 float-animation" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-glow rounded-full opacity-15 float-animation" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-foreground">Adnan Chehab Eddin</span>
          </h1>
        </div>

      <div className="fade-in-up delay-1">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-primary">
          Cybersecurity Consultant
        </h2>
      </div>

        <div className="fade-in-up delay-2">
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Committed cybersecurity professional dedicated to helping organizations protect their digital assets and enhance overall security.
          </p>
        </div>

        {/* Service Icons */}
        <div className="fade-in-up delay-3 flex justify-center items-center space-x-8 mb-12">
          <div
            onClick={() => scrollToSection('services')}
            className="flex flex-col items-center space-y-2 cyber-glow p-4 rounded-lg cursor-pointer select-none"
          >
            <Shield className="w-8 h-8 text-primary" />
            <span className="text-sm text-muted-foreground">Pen Testing</span>
          </div>
          <div
            onClick={() => scrollToSection('services')}
            className="flex flex-col items-center space-y-2 cyber-glow p-4 rounded-lg cursor-pointer select-none"
          >
            <Search className="w-8 h-8 text-primary" />
            <span className="text-sm text-muted-foreground">Security Testing</span>
          </div>
          <div
            onClick={() => scrollToSection('services')}
            className="flex flex-col items-center space-y-2 cyber-glow p-4 rounded-lg cursor-pointer select-none"
          >
            <Code className="w-8 h-8 text-primary" />
            <span className="text-sm text-muted-foreground">Code Review</span>
          </div>
        </div>

        <div className="fade-in-up delay-3 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => scrollToSection('services')}
            className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-3 cyber-glow font-semibold"
          >
            View Services
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 cyber-border font-semibold"
          >
            Get in Touch
          </Button>
        </div>
        <div className="fade-in-up delay-3 flex flex-col sm:flex-row gap-4 justify-center mb-20">
          {/* buttons */}
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 fade-in-up delay-3">
          <ArrowDown 
            className="w-6 h-6 text-primary animate-bounce cursor-pointer hover:text-primary-glow transition-colors"
            onClick={() => scrollToSection('about')}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;