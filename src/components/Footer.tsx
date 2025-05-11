
import { NavLink } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-12 md:py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-vyuapp-600 to-vyuapp-800 bg-clip-text text-transparent mb-4">
              VyuApp
            </h2>
            <p className="text-muted-foreground max-w-md">
              We create innovative web applications that transform businesses and elevate user experiences.
              With cutting-edge technology and thoughtful design, we build digital solutions that make an impact.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Links</h3>
            <ul className="space-y-2">
              <li><NavLink to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</NavLink></li>
              <li><NavLink to="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</NavLink></li>
              <li><NavLink to="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</NavLink></li>
              <li><NavLink to="/about" className="text-muted-foreground hover:text-primary transition-colors">About</NavLink></li>
              <li><NavLink to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</NavLink></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>hello@vyuapp.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Tech Boulevard,<br />Innovation District,<br />San Francisco, CA 94105</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} VyuApp. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
