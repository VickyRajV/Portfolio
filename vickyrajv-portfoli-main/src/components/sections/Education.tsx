import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Presidency University",
      location: "Bangalore, Karnataka",
      duration: "Sep 2021 - Present",
      cgpa: "7.51",
      semester: "Up to 8th Semester",
      status: "Ongoing"
    },
    {
      degree: "Pre University College (PCMB)",
      institution: "R.K Vision Pre University College",
      location: "Bangalore, Karnataka", 
      duration: "Jun 2019 - Apr 2021",
      percentage: "82.16%",
      status: "Completed"
    }
  ];

  const internship = {
    title: "Java Full Stack Development Internship",
    company: "Dhee Coding Lab",
    duration: "Completed",
    description: "Hands-on internship focused on building full-stack web applications using Java for backend logic and HTML/CSS for front-end design. Gained practical experience in implementing Hibernate to connect Java applications with SQL databases for performing CRUD operations.",
    achievements: [
      "Built full-stack web applications",
      "Implemented Hibernate for database connectivity",
      "Designed responsive user interfaces",
      "Worked with real-time development practices",
      "Managed data interactions in structured environments"
    ]
  };

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center">Education & Experience</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-gradient flex items-center">
                <GraduationCap className="mr-3" />
                Education
              </h3>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="card-elevated">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold">{edu.degree}</h4>
                        <p className="text-primary font-medium">{edu.institution}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        edu.status === 'Ongoing' 
                          ? 'bg-warning/10 text-warning' 
                          : 'bg-success/10 text-success'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                    
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        {edu.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        {edu.location}
                      </div>
                      <div className="flex items-center">
                        <Award size={16} className="mr-2" />
                        {edu.cgpa ? `CGPA: ${edu.cgpa}` : `Percentage: ${edu.percentage}`}
                        {edu.semester && ` (${edu.semester})`}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Internship */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-gradient">
                Internship Experience
              </h3>
              
              <div className="card-elevated">
                <div className="mb-4">
                  <h4 className="text-xl font-semibold">{internship.title}</h4>
                  <p className="text-primary font-medium">{internship.company}</p>
                  <p className="text-muted-foreground">{internship.duration}</p>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {internship.description}
                </p>
                
                <div>
                  <h5 className="font-semibold mb-3">Key Achievements:</h5>
                  <ul className="space-y-2">
                    {internship.achievements.map((achievement, index) => (
                      <li key={index} className="text-muted-foreground flex items-start">
                        <span className="text-primary mr-2 mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;