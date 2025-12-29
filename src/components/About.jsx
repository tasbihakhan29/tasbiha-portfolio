import { Target, Zap, Users, Globe } from 'lucide-react';

const About = () => {
  const focusAreas = [
    {
      icon: <Target className="text-blue-500" />,
      title: 'Backend Development',
      description: 'Designing RESTful APIs, database schemas, and secure role-based systems'
    },
    {
      icon: <Zap className="text-green-500" />,
      title: 'Problem Solving',
      description: 'Strong DSA foundation with 200+ problems solved on LeetCode'
    },
    {
      icon: <Users className="text-purple-500" />,
      title: 'Accessible Applications',
      description: 'Creating inclusive platforms for visually impaired and diverse learners'
    },
    {
      icon: <Globe className="text-orange-500" />,
      title: 'Impact-Driven Projects',
      description: 'Building healthcare and education systems with real-world usability'
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
Turning complex problems into practical and scalable software with a focus on accessibility and usability.          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div>
            <div className="prose prose-lg text-gray-600">
              <p className="text-xl mb-6">
                I'm a <span className="font-bold text-gray-800">Computer Science Engineering student</span> 
                who enjoys designing learning how software systems work and solving real-world problems through 
                <span className="font-bold text-gray-800"> strong fundamentals</span> and 
                <span className="font-bold text-gray-800"> hands on development</span>.
              </p>

              <div className="space-y-4">
                <p>
                  <span className="font-semibold text-gray-800">Current Focus:</span>{" "}
                  Learning to build backend-driven applications using Spring Boot and modern web technologies, and experimenting with projects related to healthcare systems and accessible learning platforms.
                </p>

              <p>
  <span className="font-semibold text-gray-800">Approach:</span>{" "}
  I try to follow <span className="text-accent">clean backend structure</span>,{" "}
  write <span className="text-accent">well-organized APIs</span>, and maintain{" "}
  <span className="text-accent">readable, maintainable code</span> so that projects 
  are easier to improve and scale over time.
</p>

                <p>
                  <span className="font-semibold text-gray-800">Beyond Technical:</span>{" "}
Active participant in hackathons, technical competitions, and academic projects, and have taken responsibility as a group leader during my capstone project.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <div className="text-3xl font-bold text-gray-800">3+</div>
                <div className="text-gray-600 text-sm">Years Coding</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <div className="text-3xl font-bold text-gray-800">15+</div>
                <div className="text-gray-600 text-sm">Technologies Used</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <div className="text-3xl font-bold text-gray-800">100%</div>
                <div className="text-gray-600 text-sm">Projects Delivered</div>
              </div>
            </div>
          </div>

          {/* Right: Focus Areas */}
          <div>
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-8">
                Areas of Focus
              </h3>
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
                      <h4 className="font-bold text-gray-800 mb-1">
                        {area.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {area.description}
                      </p>
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
