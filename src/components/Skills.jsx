import { TrendingUp, Code, Database, Cloud, Layout, Terminal } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code />,
      skills: [
        { name: 'Java', level: 95, projects: 8 },
        { name: 'Python', level: 90, projects: 6 },
        { name: 'JavaScript', level: 88, projects: 10 },
        { name: 'C/C++', level: 85, projects: 5 },
        { name: 'PHP', level: 80, projects: 4 },
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Backend & Databases',
      icon: <Database />,
      skills: [
        { name: 'Spring Boot', level: 92, projects: 7 },
        { name: 'Node.js', level: 85, projects: 5 },
        { name: 'MySQL', level: 90, projects: 8 },
        { name: 'MongoDB', level: 82, projects: 4 },
        { name: 'REST API', level: 94, projects: 9 },
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Frontend & Tools',
      icon: <Layout />,
      skills: [
        { name: 'React', level: 87, projects: 6 },
        { name: 'Tailwind CSS', level: 90, projects: 7 },
        { name: 'Git/GitHub', level: 92, projects: 12 },
        { name: 'Docker', level: 78, projects: 3 },
        { name: 'AWS', level: 75, projects: 2 },
      ],
      color: 'from-purple-500 to-pink-500'
    }
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
            Measured by project implementation and practical application
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div 
              key={catIndex}
              className="bg-white rounded-2xl p-6 shadow-lg card-hover"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} text-white mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">
                        {skill.projects} projects
                      </span>
                    </div>
                    {/* Progress Bar */}
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <div className="text-right text-sm text-gray-500 mt-1">
                      {skill.level}% proficiency
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CS Fundamentals */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-center mb-6">
            <div className="p-3 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 text-white mr-4">
              <TrendingUp />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">CS Fundamentals</h3>
              <p className="text-gray-600">Strong theoretical foundation</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {['Data Structures & Algorithms', 'Object-Oriented Programming', 
              'Database Management Systems', 'Computer Networks', 
              'Operating Systems', 'Software Engineering', 
              'System Design', 'Agile Methodologies'].map((topic, index) => (
              <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                <Terminal size={16} className="text-accent mr-2" />
                <span className="text-gray-700">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;