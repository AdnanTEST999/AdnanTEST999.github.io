import { Shield, Mail, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

  };
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold text-foreground">Adnan Chehab Eddin</h3>
            </div>
            <p className="text-muted-foreground">
              Cybersecurity Consultant specializing in penetration testing, 
              vulnerability assessment, and security testing.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:contact@adnanchehabeddin.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/adnanchehabeddin/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Services</h4>
            <ul className="space-y-2">
              <li>
                <span
                  onClick={() => scrollToSection('services')}
                  className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  Penetration Testing
                </span>
              </li>
              <li>
                <span
                  onClick={() => scrollToSection('services')}
                  className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  Security Testing
                </span>
              </li>
              <li>
                <span
                  onClick={() => scrollToSection('services')}
                  className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  Source Code Review
                </span>
              </li>
            </ul>
          </div>


          {/* Certifications */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Certifications</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground">eWPTx</li>
              <li className="text-muted-foreground">eWPT</li>
              <li className="text-muted-foreground">eJPT</li>
              <li className="text-muted-foreground">ISC2 CC</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Adnan Chehab Eddin. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="text-muted-foreground hover:text-primary transition-colors text-sm mt-4 md:mt-0"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;