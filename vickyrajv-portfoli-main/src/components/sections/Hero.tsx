import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      href: "https://www.linkedin.com/in/vickyrajv",
      label: "LinkedIn"
    },
    {
      icon: <Github size={24} />,
      href: "#",
      label: "GitHub"
    },
    {
      icon: <Mail size={24} />,
      href: "mailto:Vraj75509@gmail.com",
      label: "Email"
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="Professional workspace" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">Vicky Raj V</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-muted-foreground">
              Software Engineer & Full Stack Developer
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Recent Computer Science graduate with expertise in Java, SQL, and web technologies. 
              Passionate about building scalable applications and solving complex problems.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
            <Button className="btn-primary">
              <Download size={20} className="mr-2" />
              Download Resume
            </Button>
            <Button variant="outline" className="btn-secondary">
              View Projects
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 animate-fade-in">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card-secondary border border-border rounded-lg hover:border-primary/50 hover:text-primary transition-all duration-200 hover:scale-110"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: "1s" }} />
    </section>
  );
};

export default Hero;