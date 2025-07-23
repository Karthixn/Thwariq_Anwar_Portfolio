import { Award, BookOpen, Shield, Target } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Award,
      title: "Advanced Diploma in Cyber Defence (ADCD)",
      description: "Comprehensive program covering advanced cybersecurity concepts, threat analysis, and defensive strategies",
      year: "2024",
      category: "Certification"
    },
    {
      icon: Shield,
      title: "Cybersecurity Specialization",
      description: "Focused expertise in threat detection, vulnerability assessment, and security framework implementation",
      year: "Ongoing",
      category: "Specialization"
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "Actively pursuing knowledge in emerging cybersecurity technologies and industry best practices",
      year: "Ongoing",
      category: "Professional Development"
    },
    {
      icon: Target,
      title: "Security-First Development",
      description: "Implementing secure coding practices and security-by-design principles in web development projects",
      year: "2024",
      category: "Technical Expertise"
    }
  ];

  const stats = [
    { number: "1+", label: "Years of Study", description: "Dedicated cybersecurity education" },
    { number: "10+", label: "Technologies", description: "Security tools and frameworks" },
    { number: "5+", label: "Projects", description: "Security-focused implementations" },
    { number: "100%", label: "Commitment", description: "To cybersecurity excellence" }
  ];

  return (
    <section id="achievements" className="section-container">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Achievements & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Milestones in my cybersecurity journey and professional development
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="font-semibold text-foreground mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="cyber-card">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                    <achievement.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-secondary bg-secondary/10 px-2 py-1 rounded-full">
                      {achievement.category}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {achievement.year}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="cyber-card max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Future Goals</h3>
            <p className="text-muted-foreground mb-6">
              Continuing to advance my expertise in cybersecurity through additional certifications, 
              hands-on projects, and contributing to the security community.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['CISSP', 'CEH', 'Security+', 'CISM'].map((cert) => (
                <span 
                  key={cert}
                  className="px-4 py-2 bg-accent/10 text-accent text-sm font-medium rounded-full"
                >
                  {cert} - Planned
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;