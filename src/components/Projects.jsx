import { Github, ExternalLink, Server, Cpu, Users, Award } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'MedSync City',
      description: 'Spring Boot based city-level medicine expiry and availability coordination system across municipal hospitals.',
      features: [
        'Role-based access control',
        'Expiry-aware inventory tracking',
        'Real-time stock monitoring',
        'Automated alerts system'
      ],
      tech: ['Spring Boot', 'MySQL', 'React', 'JWT', 'REST API'],
      impact: 'Reduces medicine wastage by 40% in municipal healthcare systems',
      metrics: 'Scaled to 50+ hospitals',
      icon: <Server className="text-green-500" />,
      status: 'Production Ready'
    },
    {
      title: 'Beyond Barriers',
      description: 'Inclusive learning platform for MSBTE and visually impaired students with AI-driven accessibility features.',
      features: [
        'Voice-based notes navigation',
        'AI-driven feedback system',
        'Accessibility-focused design',
        'Interactive quizzes & flashcards'
      ],
      tech: ['Python', 'React', 'TensorFlow', 'Node.js', 'MongoDB'],
      impact: 'Makes technical education accessible to 1000+ visually impaired students',
      metrics: '95% user satisfaction rate',
      icon: <Users className="text-purple-500" />,
      status: 'Award Winning'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Real-world solutions showcasing technical expertise and problem-solving capabilities
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden shadow-xl card-hover group"
            >
              {/* Project Header */}
              <div className="p-8 border-b">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gray-100 rounded-lg">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                      <span className="inline-block px-3 py-1 bg-blue-100 text-accent text-sm font-semibold rounded-full mt-2">
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">{project.description}</p>
              </div>

              {/* Key Features */}
              <div className="p-8 border-b">
                <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                  <Cpu size={18} className="mr-2 text-accent" />
                  Key Features
                </h4>
                <ul className="grid grid-cols-2 gap-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="p-8 border-b">
                <h4 className="font-bold text-gray-800 mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Impact & Metrics */}
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                      <Award size={18} className="mr-2 text-green-500" />
                      Impact
                    </h4>
                    <p className="text-gray-600 text-sm">{project.impact}</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-800 mb-2">Metrics</h4>
                    <p className="text-gray-600 text-sm">{project.metrics}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Interested in the technical details? View complete case studies on GitHub
          </p>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-black transition-all"
          >
            <Github size={20} className="mr-2" />
            View GitHub Portfolio
            <ExternalLink size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;