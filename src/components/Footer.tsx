import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Mail,
  MapPin,
  Phone
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "About Program", href: "#about" },
    { label: "Admissions", href: "#admissions" },
    { label: "Curriculum", href: "#curriculum" },
    { label: "Faculty", href: "#faculty" },
    { label: "Research", href: "#research" },
    { label: "Alumni", href: "#alumni" }
  ];

  const resources = [
    { label: "Course Materials", href: "#materials" },
    { label: "Lab Manual", href: "#lab" },
    { label: "Project Guidelines", href: "#projects" },
    { label: "Thesis Requirements", href: "#thesis" },
    { label: "Industry Partners", href: "#partners" },
    { label: "Career Services", href: "#career" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-gradient-dark border-t border-border/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <span className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                EEE
              </span>
              <span className="text-foreground font-medium">
                Engineering
              </span>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              Empowering the next generation of electrical and electronic engineers 
              through innovative education and cutting-edge research.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-electric-blue" />
                <span>University Campus, Engineering Building</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-electric-blue" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-electric-blue" />
                <span>eee.dept@university.edu</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-electric-blue transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">
              Resources
            </h3>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.label}>
                  <a 
                    href={resource.href}
                    className="text-muted-foreground hover:text-electric-blue transition-colors duration-300"
                  >
                    {resource.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">
              Stay Connected
            </h3>
            
            <p className="text-muted-foreground text-sm">
              Subscribe to our newsletter for the latest updates and announcements.
            </p>
            
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-tech-gray/50 border border-border/30 rounded-lg focus:border-electric-blue focus:outline-none text-foreground placeholder-muted-foreground"
              />
              <Button variant="tesla" size="sm" className="w-full">
                Subscribe
              </Button>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-foreground">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="p-2 rounded-lg bg-tech-gray/30 hover:bg-electric-blue/20 hover:text-electric-blue transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Separator className="opacity-20" />

        {/* Bottom Section */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm">
            © 2024 EEE Department. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a 
              href="#privacy" 
              className="text-muted-foreground hover:text-electric-blue transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a 
              href="#terms" 
              className="text-muted-foreground hover:text-electric-blue transition-colors text-sm"
            >
              Terms of Service
            </a>
            <a 
              href="#accessibility" 
              className="text-muted-foreground hover:text-electric-blue transition-colors text-sm"
            >
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;