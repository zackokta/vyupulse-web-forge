
import { NavLink } from "react-router-dom";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";
import { featuredProjects } from "@/data/projects";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      
      {/* Services Section */}
      <Section
        title="Our Services"
        subtitle="We offer a comprehensive suite of digital services to help your business thrive online."
        centered
        background="muted"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 w-12 rounded-lg bg-vyuapp-100 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-vyuapp-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="heading-sm mb-2">Web Development</h3>
            <p className="text-muted-foreground mb-4">
              We build responsive, high-performance websites and web applications that engage users and drive results.
            </p>
            <NavLink to="/services" className="text-primary font-medium hover:text-primary/80 transition-colors">
              Learn more →
            </NavLink>
          </div>
          
          <div className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 w-12 rounded-lg bg-vyuapp-100 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-vyuapp-600" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="heading-sm mb-2">UI/UX Design</h3>
            <p className="text-muted-foreground mb-4">
              We create intuitive, beautiful interfaces that delight users and align with your business goals.
            </p>
            <NavLink to="/services" className="text-primary font-medium hover:text-primary/80 transition-colors">
              Learn more →
            </NavLink>
          </div>
          
          <div className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 w-12 rounded-lg bg-vyuapp-100 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-vyuapp-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="heading-sm mb-2">Digital Strategy</h3>
            <p className="text-muted-foreground mb-4">
              We help you plan and execute digital initiatives that align with your business objectives and drive growth.
            </p>
            <NavLink to="/services" className="text-primary font-medium hover:text-primary/80 transition-colors">
              Learn more →
            </NavLink>
          </div>
        </div>
      </Section>
      
      {/* Featured Projects */}
      <Section
        title="Featured Projects"
        subtitle="Explore some of our recent work that showcases our expertise in web development and design."
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <NavLink to="/portfolio">View All Projects</NavLink>
          </Button>
        </div>
      </Section>
      
      {/* Call to Action */}
      <Section background="primary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-lg mb-4">Ready to transform your digital presence?</h2>
          <p className="body-lg mb-8 text-primary-foreground/90">
            Let's discuss how VyuApp can help you achieve your business goals with innovative web solutions.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <NavLink to="/contact">Get Started Today</NavLink>
          </Button>
        </div>
      </Section>
    </Layout>
  );
};

export default Index;
