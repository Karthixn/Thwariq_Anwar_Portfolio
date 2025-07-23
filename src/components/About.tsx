import { Shield, Code, Lock, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Advanced knowledge in threat detection, vulnerability assessment, and security frameworks"
    },
    {
      icon: Code,
      title: "Development",
      description: "Proficient in secure coding practices with Java, CSS, and modern web technologies"
    },
    {
      icon: Lock,
      title: "Cyber Defence",
      description: "Specialized in defensive security strategies and incident response protocols"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Staying current with emerging threats and cutting-edge security solutions"
    }
  ];

  return (
    <section id="about" className="section-container">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A dedicated cybersecurity professional committed to building safer digital environments
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Passionate about cybersecurity, I am dedicated to staying ahead in this dynamic field by 
                continuously learning the latest technologies, trends, and best practices. My approach focuses 
                on understanding emerging threats and implementing robust security frameworks to protect 
                digital assets.
              </p>
              <p>
                With a strong foundation in cyber defence and hands-on experience in web development, 
                I bring a unique perspective that combines technical expertise with practical security implementation. 
                I believe in the power of proactive security measures and continuous learning to stay ahead of 
                evolving cyber threats.
              </p>
              <p>
                My goal is to contribute to building a more secure digital world by applying cutting-edge 
                cybersecurity practices and sharing knowledge with the community.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="cyber-card text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <skill.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{skill.title}</h4>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="cyber-card">
          <h3 className="text-xl font-semibold mb-6 text-center">Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Java', 'CSS', 'HTML', 'JavaScript', 'Cybersecurity Frameworks', 
              'Vulnerability Assessment', 'Threat Detection', 'Incident Response',
              'Network Security', 'Risk Analysis'
            ].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-muted rounded-full text-sm font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;