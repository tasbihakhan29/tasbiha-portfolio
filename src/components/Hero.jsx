import { useEffect, useState } from 'react';
import { Code2, Cpu, Database, Sparkles } from 'lucide-react';

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const roles = ['Full Stack Developer', 'Problem Solver', 'Backend Engineer', 'CS Student'];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { icon: <Code2 />, label: '10K+ Lines', desc: 'Code Written' },
    { icon: <Cpu />, label: '200+', desc: 'LeetCode Problems' },
    { icon: <Database />, label: '5+', desc: 'Projects Built' },
    { icon: <Sparkles />, label: '4', desc: 'Awards Won' },
  ];

  return (
    <section id="hero" className="min-h-screen pt-24 pb-16 px-6 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Animated Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block text-gray-800">Hi, I'm</span>
            <span className="gradient-text">Tasbiha Khan</span>
          </h1>
          
          {/* Animated Role Text */}
          <div className="h-12 mb-8">
            <p className="text-2xl md:text-3xl text-gray-600 font-medium">
              I am a{' '}
              <span className="inline-block min-w-[250px] text-accent font-bold animate-float">
                {roles[textIndex]}
              </span>
            </p>
          </div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Building scalable, accessible, and impactful software systems with 
            focus on backend engineering and full-stack development.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <a href="#projects" 
               className="px-8 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-blue-600 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
              View Projects
            </a>
            <a href="#contact" 
               className="px-8 py-3 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-white transition-all">
              Contact Me
            </a>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg card-hover animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-accent mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-800">{stat.label}</div>
              <div className="text-gray-600">{stat.desc}</div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;