
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/30 pt-20 md:pt-32 pb-16 md:pb-32">
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="animate-fade-in opacity-0 [animation-delay:200ms] heading-xl mb-6 bg-gradient-to-r from-vyuapp-600 to-vyuapp-800 bg-clip-text text-transparent">
            Building Digital Experiences That Elevate Brands
          </h1>
          <p className="animate-fade-in opacity-0 [animation-delay:400ms] body-lg text-muted-foreground mb-8">
            VyuApp creates innovative web applications that transform businesses through 
            cutting-edge technology and thoughtful design, delivering digital solutions 
            that make a lasting impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in opacity-0 [animation-delay:600ms]">
            <Button size="lg" asChild>
              <NavLink to="/portfolio">View Our Work</NavLink>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <NavLink to="/contact">Get In Touch</NavLink>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-vyuapp-500/10 blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-vyuapp-600/10 blur-3xl translate-x-1/3"></div>
    </section>
  );
};

export default HeroSection;
