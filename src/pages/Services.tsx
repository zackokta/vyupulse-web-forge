
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const Services = () => {
  return (
    <Layout>
      <Section
        title="Our Services"
        subtitle="VyuApp offers a comprehensive suite of web development and design services to help businesses create impactful digital experiences."
        centered
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Web Development */}
          <div className="bg-secondary p-8 rounded-lg">
            <h3 className="heading-md mb-4">Web Development</h3>
            <ul className="space-y-4 mb-6">
              <li className="flex gap-3 items-start">
                <div className="rounded-full bg-primary/10 p-1 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <strong className="font-medium">Custom Web Applications</strong>
                  <p className="text-muted-foreground">Tailored solutions designed to address your specific business challenges and goals.</p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <div className="rounded-full bg-primary/10 p-1 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <strong className="font-medium">Frontend Development</strong>
                  <p className="text-muted-foreground">Responsive interfaces built with React, Vite, and modern frameworks for optimal user experience.</p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <div className="rounded-full bg-primary/10 p-1 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <strong className="font-medium">Backend Development</strong>
                  <p className="text-muted-foreground">Robust server-side architecture with secure APIs and efficient database management.</p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <div className="rounded-full bg-primary/10 p-1 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <strong className="font-medium">Ecommerce Solutions</strong>
                  <p className="text-muted-foreground">Custom shopping experiences with secure payment integration and inventory management.</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* UI/UX Design */}
          <div className="bg-secondary p-8 rounded-lg">
            <h3 className="heading-md mb-4">UI/UX Design</h3>
            <ul className="space-y-4 mb-6">
              <li className="flex gap-3 items-start">
                <div className="rounded-full bg-primary/10 p-1 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <strong className="font-medium">User Research</strong>
                  <p className="text-muted-foreground">In-depth analysis of your target audience to create user-centered designs.</p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <div className="rounded-full bg-primary/10 p-1 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <strong className="font-medium">Interface Design</strong>
                  <p className="text-muted-foreground">Beautiful, intuitive designs that align with your brand identity and user expectations.</p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <div className="rounded-full bg-primary/10 p-1 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <strong className="font-medium">Prototyping</strong>
                  <p className="text-muted-foreground">Interactive prototypes to test and refine user flows before development.</p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <div className="rounded-full bg-primary/10 p-1 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <strong className="font-medium">Usability Testing</strong>
                  <p className="text-muted-foreground">Comprehensive testing to ensure your application is intuitive and accessible.</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Digital Strategy */}
          <div className="bg-secondary p-8 rounded-lg">
            <h3 className="heading-md mb-4">Digital Strategy</h3>
            <ul className="space-y-4 mb-6">
              <li className="flex gap-3 items-start">
                <div className="rounded-full bg-primary/10 p-1 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <strong className="font-medium">Business Analysis</strong>
                  <p className="text-muted-foreground">Understanding your goals and challenges to develop targeted digital solutions.</p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <div className="rounded-full bg-primary/10 p-1 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <strong className="font-medium">Competitive Analysis</strong>
                  <p className="text-muted-foreground">Evaluating market trends and competitor strategies to position your brand effectively.</p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <div className="rounded-full bg-primary/10 p-1 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <strong className="font-medium">Technology Planning</strong>
                  <p className="text-muted-foreground">Selecting the right technologies and platforms to support your business objectives.</p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <div className="rounded-full bg-primary/10 p-1 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <strong className="font-medium">Growth Strategy</strong>
                  <p className="text-muted-foreground">Long-term planning for scaling your digital presence and adapting to market changes.</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Maintenance & Support */}
          <div className="bg-secondary p-8 rounded-lg">
            <h3 className="heading-md mb-4">Maintenance & Support</h3>
            <ul className="space-y-4 mb-6">
              <li className="flex gap-3 items-start">
                <div className="rounded-full bg-primary/10 p-1 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <strong className="font-medium">Regular Updates</strong>
                  <p className="text-muted-foreground">Keeping your web application secure and up-to-date with the latest technologies.</p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <div className="rounded-full bg-primary/10 p-1 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <strong className="font-medium">Performance Monitoring</strong>
                  <p className="text-muted-foreground">Continuous monitoring of your application's performance and user experience.</p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <div className="rounded-full bg-primary/10 p-1 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <strong className="font-medium">Technical Support</strong>
                  <p className="text-muted-foreground">Responsive assistance for any issues or questions that arise after launch.</p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <div className="rounded-full bg-primary/10 p-1 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <strong className="font-medium">Feature Enhancements</strong>
                  <p className="text-muted-foreground">Ongoing improvements to keep your application competitive and aligned with user needs.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Section>
      
      {/* Process Section */}
      <Section
        title="Our Process"
        subtitle="We follow a proven methodology to ensure your project is completed efficiently and meets your expectations."
        centered
        background="muted"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center">
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-vyuapp-100 flex items-center justify-center">
              <span className="text-2xl font-bold text-vyuapp-600">1</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Discovery</h3>
            <p className="text-muted-foreground">
              We begin by understanding your business, goals, users, and technical requirements.
            </p>
          </div>
          
          <div className="text-center">
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-vyuapp-100 flex items-center justify-center">
              <span className="text-2xl font-bold text-vyuapp-600">2</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Planning</h3>
            <p className="text-muted-foreground">
              We create detailed specifications, wireframes, and project timelines.
            </p>
          </div>
          
          <div className="text-center">
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-vyuapp-100 flex items-center justify-center">
              <span className="text-2xl font-bold text-vyuapp-600">3</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Development</h3>
            <p className="text-muted-foreground">
              Our team designs and builds your solution with regular check-ins and iterations.
            </p>
          </div>
          
          <div className="text-center">
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-vyuapp-100 flex items-center justify-center">
              <span className="text-2xl font-bold text-vyuapp-600">4</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Launch & Support</h3>
            <p className="text-muted-foreground">
              We deploy your application, provide training, and offer ongoing maintenance.
            </p>
          </div>
        </div>
      </Section>
      
      {/* Call to Action */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-lg mb-4">Ready to start your project?</h2>
          <p className="body-lg text-muted-foreground mb-8">
            Contact us today to discuss how we can help bring your vision to life.
          </p>
          <Button size="lg" asChild>
            <NavLink to="/contact">Get in Touch</NavLink>
          </Button>
        </div>
      </Section>
    </Layout>
  );
};

export default Services;
