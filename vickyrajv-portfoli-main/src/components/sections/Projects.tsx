import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Player Management System",
      description: "A comprehensive web-based application for managing player profiles with full CRUD operations. Built using modern web technologies with a focus on user experience and data integrity.",
      technologies: ["Java Servlets", "Hibernate", "MySQL", "HTML", "CSS"],
      features: [
        "MVC Architecture implementation",
        "Responsive user interface",
        "ORM-based database integration",
        "Efficient player record management"
      ],
      category: "Web Application"
    },
    {
      title: "Shopping Cart Application",
      description: "A feature-rich shopping cart system with complete product management capabilities. Includes transaction handling for data accuracy and a user-friendly console interface.",
      technologies: ["Java", "Hibernate", "MySQL", "Maven"],
      features: [
        "Add, edit, view, and remove items",
        "Console-based user interface",
        "Transaction management",
        "Maven project structure"
      ],
      category: "E-commerce System"
    },
    {
      title: "Health Buddy",
      description: "An innovative health tracking application that analyzes food intake using machine learning to predict nutritional content and potential health risks.",
      technologies: ["Machine Learning", "Java", "Database Integration", "API"],
      features: [
        "Food intake analysis with ML model",
        "Vitamin and protein prediction",
        "Calorie calculation",
        "Deficiency warnings and disease prevention",
        "Water intake tracking with reminders"
      ],
      category: "Health Tech"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-card-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center">Projects</h2>
          
          <div className="grid lg:grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="card-elevated">
                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Project Info */}
                  <div className="lg:col-span-2 space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div>
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-muted-foreground flex items-start">
                            <span className="text-primary mr-2 mt-1">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  {/* Technologies */}
                  <div className="space-y-4">
                    <h4 className="font-semibold">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="skill-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;