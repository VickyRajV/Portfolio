import { Code, Database, Globe, Server } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: "Full Stack Development",
      description: "Experienced in Java, HTML, CSS, and modern web technologies"
    },
    {
      icon: <Database size={24} />,
      title: "Database Management",
      description: "Proficient in SQL, MySQL, and Hibernate ORM"
    },
    {
      icon: <Globe size={24} />,
      title: "Web Applications",
      description: "Built responsive web applications with MVC architecture"
    },
    {
      icon: <Server size={24} />,
      title: "Backend Systems",
      description: "Skilled in Java Servlets and RESTful API development"
    }
  ];

  return (
    <section id="about" className="py-20 bg-card-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center">About Me</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate Computer Science graduate from Presidency University with a strong foundation 
                in software development. Currently maintaining a <span className="text-primary font-semibold">7.51 CGPA</span>, 
                I've dedicated myself to mastering both frontend and backend technologies.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Through hands-on projects and a comprehensive internship at Dhee Coding Lab, I've gained 
                practical experience in building full-stack applications, implementing CRUD operations, 
                and working with modern development practices.
              </p>

              <div className="bg-card border border-border rounded-lg p-6 mt-8">
                <h3 className="text-xl font-semibold mb-4 text-gradient">Objective</h3>
                <p className="text-muted-foreground">
                  Seeking a Software Engineer position at a leading multinational company (MNC) where I can 
                  contribute to dynamic development teams and grow with innovative, large-scale projects while 
                  continuously expanding my technical skills and professional expertise.
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div key={index} className="card-elevated group">
                  <div className="text-primary mb-3 group-hover:scale-110 transition-transform duration-200">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;