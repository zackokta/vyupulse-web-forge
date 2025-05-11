
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <Layout>
      {/* About Hero */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="heading-xl mb-6">About VyuApp</h1>
            <p className="body-lg text-muted-foreground mb-8">
              VyuApp is a forward-thinking web development company specializing in creating innovative, 
              user-centric web applications. Founded in 2018, we've helped businesses of all sizes transform 
              their digital presence and achieve their goals through technology.
            </p>
            <p className="body-lg text-muted-foreground">
              Our team of developers, designers, and strategists are passionate about crafting exceptional 
              digital experiences that drive results. We combine technical expertise with creative thinking 
              to deliver solutions that stand out in today's competitive digital landscape.
            </p>
          </div>
          <div className="bg-muted rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="VyuApp Team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Section>
      
      {/* Mission and Vision */}
      <Section background="muted">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-background p-8 rounded-lg">
            <h3 className="heading-md mb-4">Our Mission</h3>
            <p className="text-muted-foreground">
              To empower businesses with innovative web solutions that enhance their digital presence,
              streamline operations, and create meaningful connections with their users. We are committed to
              delivering excellence in every project, combining technical expertise with creative thinking
              to solve complex challenges.
            </p>
          </div>
          
          <div className="bg-background p-8 rounded-lg">
            <h3 className="heading-md mb-4">Our Vision</h3>
            <p className="text-muted-foreground">
              To be the leading web development partner for forward-thinking businesses, recognized for our
              innovative approach, technical excellence, and dedication to creating digital experiences that
              drive measurable results. We aspire to shape the future of the web through thoughtful,
              accessible, and sustainable digital solutions.
            </p>
          </div>
        </div>
      </Section>
      
      {/* Our Values */}
      <Section
        title="Our Values"
        subtitle="The principles that guide our work and define our culture."
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="p-6 bg-secondary rounded-lg">
            <div className="h-12 w-12 rounded-lg bg-vyuapp-100 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-vyuapp-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Innovation</h3>
            <p className="text-muted-foreground">
              We continuously explore new technologies and approaches to deliver cutting-edge solutions that keep our clients ahead of the curve.
            </p>
          </div>
          
          <div className="p-6 bg-secondary rounded-lg">
            <div className="h-12 w-12 rounded-lg bg-vyuapp-100 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-vyuapp-600" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Collaboration</h3>
            <p className="text-muted-foreground">
              We believe in working closely with our clients, valuing their input and involving them throughout the development process.
            </p>
          </div>
          
          <div className="p-6 bg-secondary rounded-lg">
            <div className="h-12 w-12 rounded-lg bg-vyuapp-100 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-vyuapp-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Excellence</h3>
            <p className="text-muted-foreground">
              We are committed to delivering the highest quality in every aspect of our work, from code to design to client communication.
            </p>
          </div>
          
          <div className="p-6 bg-secondary rounded-lg">
            <div className="h-12 w-12 rounded-lg bg-vyuapp-100 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-vyuapp-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Transparency</h3>
            <p className="text-muted-foreground">
              We maintain open and honest communication throughout our engagements, ensuring clarity and trust at every step.
            </p>
          </div>
          
          <div className="p-6 bg-secondary rounded-lg">
            <div className="h-12 w-12 rounded-lg bg-vyuapp-100 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-vyuapp-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Accessibility</h3>
            <p className="text-muted-foreground">
              We believe the web should be accessible to everyone and strive to create inclusive digital experiences.
            </p>
          </div>
          
          <div className="p-6 bg-secondary rounded-lg">
            <div className="h-12 w-12 rounded-lg bg-vyuapp-100 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-vyuapp-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Adaptability</h3>
            <p className="text-muted-foreground">
              We embrace change and continuously evolve our skills and approaches to meet the ever-changing digital landscape.
            </p>
          </div>
        </div>
      </Section>
      
      {/* Team Section */}
      <Section
        title="Meet Our Team"
        subtitle="The talented individuals behind VyuApp's success."
        centered
        background="muted"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div className="bg-background rounded-lg overflow-hidden">
            <div className="h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                alt="David Chen"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-lg">David Chen</h3>
              <p className="text-muted-foreground mb-2">Founder & CEO</p>
              <p className="text-sm text-muted-foreground">
                With over 15 years in tech, David leads our vision and strategy.
              </p>
            </div>
          </div>
          
          <div className="bg-background rounded-lg overflow-hidden">
            <div className="h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
                alt="Sarah Johnson"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-lg">Sarah Johnson</h3>
              <p className="text-muted-foreground mb-2">Lead Designer</p>
              <p className="text-sm text-muted-foreground">
                Sarah crafts beautiful interfaces with a focus on user experience.
              </p>
            </div>
          </div>
          
          <div className="bg-background rounded-lg overflow-hidden">
            <div className="h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt="Michael Rodriguez"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-lg">Michael Rodriguez</h3>
              <p className="text-muted-foreground mb-2">Lead Developer</p>
              <p className="text-sm text-muted-foreground">
                Michael brings a decade of expertise in full-stack development.
              </p>
            </div>
          </div>
          
          <div className="bg-background rounded-lg overflow-hidden">
            <div className="h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
                alt="Emily Zhang"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-lg">Emily Zhang</h3>
              <p className="text-muted-foreground mb-2">Project Manager</p>
              <p className="text-sm text-muted-foreground">
                Emily ensures projects are delivered on time and exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Call to Action */}
      <Section background="primary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-lg mb-4">Want to work with us?</h2>
          <p className="body-lg mb-8 text-primary-foreground/90">
            We're always looking for talented individuals to join our team. Check out our current openings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="#" target="_blank" rel="noreferrer">
                View Job Openings
              </a>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/20" asChild>
              <NavLink to="/contact">
                Contact Us
              </NavLink>
            </Button>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default About;
