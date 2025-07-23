import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin } from 'lucide-react';
import profilePhoto from '@/assets/thwariqanwar.png';

const Hero = () => {
  const handleResumeDownload = () => {
    // Create a link element to trigger download
    const link = document.createElement('a');
    link.href = '/THWARIQ_ANWAR_CV.pdf';
    link.download = 'THWARIQ_ANWAR_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center tech-pattern">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src={profilePhoto}
                alt="Thwariq Anwar - Cybersecurity Professional"
                className="w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover border-4 border-primary cyber-glow floating-animation"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-cyber opacity-20"></div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            <span className="gradient-text">Thwariq Anwar</span>
          </h1>
          <div className="text-xl lg:text-2xl text-secondary mb-6 font-mono">
            <span className="typing-animation">Cybersecurity Enthusiast</span>
          </div>

          {/* Summary */}
          <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Passionate about cybersecurity, I am dedicated to staying ahead in this dynamic field by 
            continuously learning the latest technologies, trends, and best practices to protect 
            digital assets and ensure robust security frameworks.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleResumeDownload}
              className="cyber-button text-primary-foreground px-8 py-3 text-lg"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <a 
                  href="https://linkedin.com/in/thwariq-anwar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                asChild
              >
                <a 
                  href="https://github.com/thwariq-anwar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;