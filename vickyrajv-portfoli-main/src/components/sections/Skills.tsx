const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "SQL", "HTML", "CSS", "JavaScript"]
    },
    {
      title: "Frameworks & Technologies",
      skills: ["Hibernate", "Java Servlets", "Spring", "Maven"]
    },
    {
      title: "Databases",
      skills: ["MySQL", "Database Design", "CRUD Operations"]
    },
    {
      title: "Concepts",
      skills: ["OOP Concepts", "MVC Architecture", "RESTful APIs", "Responsive Design"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "IDE (Eclipse/IntelliJ)", "Web Development", "Full Stack Development"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center">Technical Skills</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="card-elevated">
                <h3 className="text-xl font-semibold mb-4 text-gradient">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Featured Skills */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-8">Core Competencies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {["Java", "SQL", "HTML", "CSS"].map((skill, index) => (
                <div key={index} className="group">
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group-hover:scale-105">
                    <h4 className="text-xl font-bold text-gradient">{skill}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;