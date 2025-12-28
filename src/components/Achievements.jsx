import { Trophy, Award, Star, TrendingUp } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy className="text-yellow-500" />,
      title: 'Institute-Level Project Competition',
      description: '1st Winner - Beyond Barriers (Inclusive Learning Platform)',
      year: '2024',
      metrics: 'Judged on innovation, implementation & impact',
      category: 'Technical Excellence'
    },
    {
      icon: <Award className="text-blue-500" />,
      title: 'State-Level Technical Paper Presentation',
      description: '2nd Position - MSBTE Maharashtra State Competition',
      year: '2023',
      metrics: 'Presented research on "AI in Accessible Education"',
      category: 'Research'
    },
    {
      icon: <Star className="text-green-500" />,
      title: 'Code Jam Champion',
      description: '1st Position - COSA Coding Competition',
      year: '2023',
      metrics: 'Solved 15/15 algorithmic challenges in 3 hours',
      category: 'Competitive Programming'
    },
    {
      icon: <TrendingUp className="text-purple-500" />,
      title: 'LeetCode Problem Solver',
      description: '200+ Problems Solved with Consistent Progress',
      year: 'Ongoing',
      metrics: 'Top 15% in weekly contests, 85%+ acceptance rate',
      category: 'Skill Development'
    }
  ];

  return (
    <section id="achievements" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Recognized <span className="gradient-text">Excellence</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Validation of technical skills and problem-solving capabilities through competitions and platforms
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover group"
            >
              {/* Achievement Header */}
              <div className="p-6 border-b">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    {achievement.icon}
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-accent text-sm font-semibold rounded-full">
                    {achievement.year}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 mb-4">{achievement.description}</p>
                
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                  {achievement.category}
                </span>
              </div>

              {/* Metrics */}
              <div className="p-6 bg-gray-50">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="font-medium mr-2">Metrics:</span>
                  {achievement.metrics}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Recognition */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Additional Recognition</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-blue-50 rounded-xl">
              <div className="text-3xl font-bold text-gray-800 mb-2">Top 10%</div>
              <p className="text-gray-600">Academic performance throughout education</p>
            </div>
            <div className="p-6 bg-green-50 rounded-xl">
              <div className="text-3xl font-bold text-gray-800 mb-2">4.0/4.0</div>
              <p className="text-gray-600">GPA in core Computer Science subjects</p>
            </div>
            <div className="p-6 bg-purple-50 rounded-xl">
              <div className="text-3xl font-bold text-gray-800 mb-2">100%</div>
              <p className="text-gray-600">Project completion rate with documentation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;