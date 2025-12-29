import { Code, Database, Server, Layout, GitBranch, Cloud, Terminal, Cpu, Zap, Sparkles, Box, Wrench, Globe, Shield, GitMerge } from 'lucide-react';
import { useState } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="text-blue-500" />,
      skills: [
        { 
          name: 'Java', 
          icon: <Code className="text-red-500" />,
          description: 'Spring Boot, Enterprise Apps, DSA',
          color: 'hover:border-red-200 hover:bg-red-50'
        },
        { 
          name: 'Python', 
          icon: <Terminal className="text-yellow-500" />,
          description: 'Data Visualization',
          color: 'hover:border-yellow-200 hover:bg-yellow-50'
        },
        { 
          name: 'JavaScript', 
          icon: <Zap className="text-yellow-400" />,
          description: ' React, Full Stack',
          color: 'hover:border-yellow-200 hover:bg-yellow-50'
        },
        { 
          name: 'C/C++', 
          icon: <Cpu className="text-blue-600" />,
          description: 'System Programming',
          color: 'hover:border-blue-200 hover:bg-blue-50'
        },
        { 
          name: 'PHP', 
          icon: <Cloud className="text-purple-500" />,
          description: 'Web Applications',
          color: 'hover:border-purple-200 hover:bg-purple-50'
        },
      ],
      cardColor: 'border-blue-100 hover:border-blue-400',
      bgColor: 'bg-gradient-to-br from-blue-50/50 to-white',
      accent: 'text-blue-600'
    },
    {
      title: 'Backend & Databases',
      icon: <Database className="text-green-500" />,
      skills: [
        { 
          name: 'Spring Boot', 
          icon: <Server className="text-green-600" />,
          description: 'Microservices, REST APIs, JWT',
          color: 'hover:border-green-200 hover:bg-green-50'
        },
        { 
          name: 'Node.js', 
          icon: <Terminal className="text-green-500" />,
          description: 'Express.js, Real-time',
          color: 'hover:border-green-200 hover:bg-green-50'
        },
        { 
          name: 'MySQL', 
          icon: <Database className="text-orange-500" />,
          description: 'Relational Databases',
          color: 'hover:border-orange-200 hover:bg-orange-50'
        },
        { 
          name: 'MongoDB', 
          icon: <Box className="text-green-400" />,
          description: 'NoSQL, Document DB',
          color: 'hover:border-green-200 hover:bg-green-50'
        },
        { 
          name: 'REST API', 
          icon: <Globe className="text-blue-400" />,
          description: 'Design, Integration',
          color: 'hover:border-blue-200 hover:bg-blue-50'
        },
      ],
      cardColor: 'border-green-100 hover:border-green-400',
      bgColor: 'bg-gradient-to-br from-green-50/50 to-white',
      accent: 'text-green-600'
    },
    {
      title: 'Frontend & Tools',
      icon: <Layout className="text-purple-500" />,
      skills: [
        { 
          name: 'React', 
          icon: <Sparkles className="text-cyan-500" />,
          description: 'Components, Hooks',
          color: 'hover:border-cyan-200 hover:bg-cyan-50'
        },
        { 
          name: 'Tailwind CSS', 
          icon: <Layout className="text-blue-400" />,
          description: 'Utility-first CSS',
          color: 'hover:border-blue-200 hover:bg-blue-50'
        },
        { 
          name: 'Git/GitHub', 
          icon: <GitBranch className="text-gray-700" />,
          description: 'Version Control',
          color: 'hover:border-gray-200 hover:bg-gray-50'
        },
        // { 
        //   name: 'Docker', 
        //   icon: <Box className="text-blue-500" />,
        //   description: 'Containerization',
        //   color: 'hover:border-blue-200 hover:bg-blue-50'
        // },
        // { 
        //   name: 'AWS', 
        //   icon: <Cloud className="text-orange-500" />,
        //   description: 'Cloud Services',
        //   color: 'hover:border-orange-200 hover:bg-orange-50'
        // },
      ],
      cardColor: 'border-purple-100 hover:border-purple-400',
      bgColor: 'bg-gradient-to-br from-purple-50/50 to-white',
      accent: 'text-purple-600'
    }
  ];

  const csFundamentals = [
    { name: 'Data Structures & Algorithms', icon: '🧮' },
    { name: 'Object-Oriented Programming', icon: '🏗️' },
    { name: 'Database Management Systems', icon: '🗄️' },
    { name: 'Computer Networks', icon: '🌐' },
    { name: 'Operating Systems', icon: '💻' },
    { name: 'Software Engineering', icon: '⚙️' },
    { name: 'System Design', icon: '🏛️' },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Core technologies and fundamentals I work with
          </p>
        </div>

        {/* Interactive Skills Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, catIndex) => (
            <div 
              key={catIndex}
              className={`group relative rounded-2xl p-6 border-2 ${category.cardColor} ${category.bgColor} transition-all duration-500 card-hover hover:shadow-2xl`}
              onMouseEnter={() => setActiveCategory(category.title)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              {/* Animated Background Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Category Header */}
              <div className="relative z-10 flex items-center mb-8">
                <div className={`p-3 rounded-xl bg-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 mr-4 border ${category.cardColor}`}>
                  {category.icon}
                </div>
                <h3 className={`text-2xl font-bold ${category.accent} group-hover:scale-105 transition-transform duration-300`}>
                  {category.title}
                </h3>
              </div>

              {/* Skills List - Pure Icons & Text */}
              <div className="relative z-10 space-y-3">
                {category.skills.map((skill, index) => (
                  <div 
                    key={index}
                    className={`flex items-center p-4 rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm ${skill.color} transition-all duration-300 cursor-pointer transform hover:scale-102 hover:shadow-lg ${
                      hoveredSkill === skill.name ? 'scale-102 shadow-lg' : ''
                    }`}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {/* Skill Icon with Glow Effect */}
                    <div className={`p-2 rounded-lg bg-gradient-to-br from-white to-gray-50 shadow-sm mr-4 transition-all duration-300 ${
                      hoveredSkill === skill.name ? 'shadow-md scale-110' : ''
                    }`}>
                      <div className="relative">
                        {skill.icon}
                        {hoveredSkill === skill.name && (
                          <div className="absolute inset-0 animate-ping opacity-20">
                            {skill.icon}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Skill Info */}
                    <div className="flex-grow">
                      <h4 className="font-bold text-gray-800 mb-1">{skill.name}</h4>
                      <p className="text-sm text-gray-600">{skill.description}</p>
                    </div>

                    {/* Interactive Arrow */}
                    <div className={`ml-2 transform transition-transform duration-300 ${
                      hoveredSkill === skill.name ? 'translate-x-1' : ''
                    }`}>
                      <div className="w-2 h-2 border-t-2 border-r-2 border-gray-400 rotate-45"></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Category Indicator */}
              <div className="relative z-10 mt-6 pt-4 border-t border-gray-100">
                <div className={`h-1 w-8 rounded-full ${category.accent.replace('text-', 'bg-')} transition-all duration-300 ${
                  activeCategory === category.title ? 'w-full' : ''
                }`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* CS Fundamentals - Interactive Card */}
        <div 
          className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-xl text-white overflow-hidden group cursor-pointer"
          onMouseEnter={() => setActiveCategory('CS Fundamentals')}
          onMouseLeave={() => setActiveCategory(null)}
        >
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <div className="flex items-center mb-8">
              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm mr-6 group-hover:bg-white/20 transition-all duration-300">
                <Terminal className="text-cyan-400" size={32} />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                  Computer Science Fundamentals
                </h3>
                <p className="text-gray-300">Strong theoretical foundation applied in practice</p>
              </div>
            </div>
            
            {/* Interactive Fundamentals Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
              {csFundamentals.map((topic, index) => (
                <div 
                  key={index}
                  className={`flex items-center p-3 rounded-xl border transition-all duration-300 ${
                    activeCategory === 'CS Fundamentals' 
                      ? 'bg-white/10 border-cyan-500/50 transform hover:scale-105' 
                      : 'bg-white/5 border-white/10'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-2xl mr-3 opacity-80 group-hover:opacity-100">{topic.icon}</span>
                  <span className="text-gray-200 font-medium text-sm">{topic.name}</span>
                </div>
              ))}
            </div>

            {/* Hover Indicator */}
            <div className={`mt-6 flex justify-center transition-all duration-300 ${
              activeCategory === 'CS Fundamentals' ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="flex items-center text-cyan-300">
                <div className="w-4 h-4 border-t-2 border-r-2 rotate-45 mr-2"></div>
                <span className="text-sm">Applied across all projects</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skill Legend (Visual Only) */}
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          <div className="flex items-center group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
              <Code className="text-blue-600" />
            </div>
            <div>
              <p className="font-medium text-gray-700">Languages</p>
              <p className="text-sm text-gray-500">Programming foundations</p>
            </div>
          </div>
          
          <div className="flex items-center group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
              <Server className="text-green-600" />
            </div>
            <div>
              <p className="font-medium text-gray-700">Backend</p>
              <p className="text-sm text-gray-500">Server-side systems</p>
            </div>
          </div>
          
          <div className="flex items-center group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
              <Layout className="text-purple-600" />
            </div>
            <div>
              <p className="font-medium text-gray-700">Frontend & Tools</p>
              <p className="text-sm text-gray-500">UI & Development tools</p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        .scale-102 {
          transform: scale(1.02);
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;