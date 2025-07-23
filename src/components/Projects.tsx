import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Code, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Game Preachers",
      description: "A comprehensive gaming website showcasing the latest games, reviews, and gaming community features. Built with modern web technologies focusing on responsive design and user experience.",
      technologies: ["CSS", "Java", "HTML", "JavaScript"],
      featured: true,
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "Security Assessment Tool",
      description: "A cybersecurity project focused on vulnerability assessment and threat detection. Currently in development as part of my advanced cybersecurity studies.",
      technologies: ["Cybersecurity", "Threat Analysis", "Risk Assessment"],
      featured: false,
      status: "In Development"
    },
    {
      title: "Secure Web Application",
      description: "An upcoming project that will demonstrate secure coding practices and implementation of cybersecurity frameworks in web development.",
      technologies: ["Secure Coding", "Web Security", "OWASP"],
      featured: false,
      status: "Planned"
    }
  ];

  return (
    <section id="projects" className="section-container bg-surface/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing my work in web development and cybersecurity implementations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`cyber-card ${project.featured ? 'lg:col-span-2 xl:col-span-2' : ''}`}
            >
              {project.featured && (
                <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                  <Code className="w-4 h-4 mr-1" />
                  Featured Project
                </div>
              )}
              
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Status or Links */}
              <div className="flex gap-3">
                {project.status ? (
                  <span className="px-4 py-2 bg-warning/10 text-warning text-sm font-medium rounded-lg">
                    {project.status}
                  </span>
                ) : (
                  <>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.links?.demo} target="_blank" rel="noopener noreferrer">
                        <Globe className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.links?.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Interested in collaborating or learning more about my work?
          </p>
          <Button 
            className="cyber-button text-primary-foreground"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;