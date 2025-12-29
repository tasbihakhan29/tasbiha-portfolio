import { Github, ExternalLink, Server, Cpu, Users, Award } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'MedSync City',
      description:
        'A city-level medicine management system designed to help hospitals track medicine expiry dates and availability in a centralized manner.',
      features: [
        'Role-based access for hospital staff',
        'Medicine expiry tracking',
        'Centralized inventory visibility',
        'Notification-based alert system'
      ],
      tech: ['Spring Boot', 'MySQL', 'React', 'REST API'],
      impact:
        'Focused on improving coordination between hospitals and reducing manual tracking errors.',
      metrics:
'Designed with scalability in mind to support real-world adoption by city-level healthcare institutions.',

      icon: <Server className="text-green-500" />,
      status: 'Academic Project'
    },
    {
      title: 'Beyond Barriers',
      description:
        'An accessibility-focused learning platform built for MSBTE 1st-year students to simplify technical education using voice support and AI assistance.',
      features: [
        'Voice-based note creation and playback',
        'Gemini API powered AI explanations',
        'Subject-wise structured learning content',
        'Quizzes and flashcards for self-practice'
      ],
      tech: ['PHP', 'JavaScript', 'HTML', 'CSS', 'MySQL', 'Gemini API'],
      impact:
        'Explores how accessibility and AI can be combined to enhance the learning experience for diverse learners.',
      metrics:
        'Strong focus on usability, accessibility, and practical learning workflows.',
      icon: <Users className="text-purple-500" />,
      status: 'College Project'
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
            Selected projects showcasing problem-solving skills, accessibility focus, and practical development experience
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

              {/* Learning & Highlights */}
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                      <Award size={18} className="mr-2 text-green-500" />
                      Project Focus
                    </h4>
                    <p className="text-gray-600 text-sm">{project.impact}</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-800 mb-2">Highlights</h4>
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
            Interested in implementation details and source code?
          </p>
          <a
            href="https://github.com/tasbihakhan29"
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
