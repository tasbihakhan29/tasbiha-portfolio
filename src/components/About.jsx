import { Target, Zap, Users, Globe } from 'lucide-react';

const About = () => {
  const focusAreas = [
    {
      icon: <Target className="text-blue-500" />,
      title: 'Backend Architecture',
      description: 'Designing scalable server-side solutions with microservices & REST APIs'
    },
    {
      icon: <Zap className="text-green-500" />,
      title: 'Performance Optimization',
      description: 'Reducing latency & improving efficiency in critical systems'
    },
    {
      icon: <Users className="text-purple-500" />,
      title: 'Accessible Tech',
      description: 'Building inclusive software that serves diverse user needs'
    },
    {
      icon: <Globe className="text-orange-500" />,
      title: 'Real-World Impact',
      description: 'Solving practical problems through innovative technology'
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Beyond <span className="gradient-text">Code</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
            Engineering solutions that bridge technical excellence with human impact
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div>
            <div className="prose prose-lg text-gray-600">
              <p className="text-xl mb-6">
                I'm a <span className="font-bold text-gray-800">Computer Science student</span> with a 
                passion for building systems that matter. My journey combines 
                <span className="font-bold text-gray-800"> technical depth</span> with 
                <span className="font-bold text-gray-800"> real-world problem-solving</span>.
              </p>
              
              <div className="space-y-4">
                <p>
                  <span className="font-semibold text-gray-800">Current Focus:</span> 
                  {" "}Developing backend systems at scale, with particular interest in healthcare 
                  tech and accessible education platforms.
                </p>
                
                <p>
                  <span className="font-semibold text-gray-800">Approach:</span> 
                  {" "}I believe in <span className="text-accent">clean architecture</span>, 
                  {" "}<span className="text-accent">thorough testing</span>, and 
                  {" "}<span className="text-accent">documentation</span> as essential pillars 
                  of maintainable software.
                </p>
                
                <p>
                  <span className="font-semibold text-gray-800">Beyond Technical:</span> 
                  {" "}Active in tech communities, mentor peers, and contribute to 
                  open-source projects that promote accessibility in tech education.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <div className="text-3xl font-bold text-gray-800">2+</div>
                <div className="text-gray-600 text-sm">Years Coding</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <div className="text-3xl font-bold text-gray-800">10+</div>
                <div className="text-gray-600 text-sm">Technologies</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <div className="text-3xl font-bold text-gray-800">100%</div>
                <div className="text-gray-600 text-sm">Project Completion</div>
              </div>
            </div>
          </div>

          {/* Right: Focus Areas */}
          <div>
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Areas of Focus</h3>
              <div className="space-y-6">
                {focusAreas.map((area, index) => (
                  <div 
                    key={index}
                    className="flex items-start p-4 hover:bg-white rounded-xl transition-all duration-300 card-hover"
                  >
                    <div className="p-3 bg-gray-100 rounded-lg mr-4">
                      {area.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">{area.title}</h4>
                      <p className="text-gray-600 text-sm">{area.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;