import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "Vraj75509@gmail.com",
      href: "mailto:Vraj75509@gmail.com"
    },
    {
      icon: <Phone size={24} />,
      label: "Phone",
      value: "+91 9110615868",
      href: "tel:+919110615868"
    },
    {
      icon: <MapPin size={24} />,
      label: "Location",
      value: "Bengaluru, Karnataka",
      href: "#"
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      value: "linkedin.com/in/vickyrajv",
      href: "https://www.linkedin.com/in/vickyrajv"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-card-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center">Get In Touch</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  I'm always open to discussing new opportunities, collaborating on interesting projects, 
                  or simply having a conversation about technology and software development.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : '_self'}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="flex items-center p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-200 group"
                  >
                    <div className="text-primary mr-4 group-hover:scale-110 transition-transform duration-200">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-medium">{info.label}</p>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="pt-6">
                <h4 className="font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/vickyrajv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card border border-border rounded-lg hover:border-primary/50 hover:text-primary transition-all duration-200 hover:scale-110"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-card border border-border rounded-lg hover:border-primary/50 hover:text-primary transition-all duration-200 hover:scale-110"
                  >
                    <Github size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card-elevated">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <Input placeholder="Enter your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <Input placeholder="Enter your last name" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="Enter your email" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input placeholder="What's this about?" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project or just say hello!"
                    rows={5}
                  />
                </div>
                
                <Button type="submit" className="btn-primary w-full">
                  <Send size={20} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;