
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import PortfolioFilter from "@/components/PortfolioFilter";
import { allProjects } from "@/data/projects";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(allProjects);
  
  // Extract unique categories from projects
  const categories = [...new Set(allProjects.flatMap(project => project.tags))];
  
  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredProjects(allProjects);
    } else {
      setFilteredProjects(
        allProjects.filter(project => project.tags.includes(activeCategory))
      );
    }
  }, [activeCategory]);
  
  return (
    <Layout>
      <Section
        title="Our Portfolio"
        subtitle="Explore our collection of web applications and projects that demonstrate our expertise in creating innovative digital solutions."
        centered
      >
        <PortfolioFilter 
          categories={categories} 
          activeCategory={activeCategory}
          onChange={setActiveCategory}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              className="animate-fade-in opacity-0" 
              style={{ animationDelay: "calc(100ms * var(--index))" } as React.CSSProperties}
            />
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground">No projects found in this category.</p>
          </div>
        )}
      </Section>
    </Layout>
  );
};

export default Portfolio;
