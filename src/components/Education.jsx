import { GraduationCap, BookOpen, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const educationTimeline = [
    {
      degree: 'B.Tech in Computer Science & Engineering',
      institution: 'Government College of Engineering, Nagpur',
      duration: '2025 – 2028 (Expected)',
      status: 'Current',
      //score: 'CGPA: 8.5+ (Anticipated)',
      highlights: [
        'Advanced Algorithms & Data Structures',
        'Database Systems & Design',
        'Computer Networks & Security',
        'Software Engineering Principles'
      ],
      icon: <GraduationCap className="text-blue-500" />,
      location: 'Nagpur, Maharashtra'
    },
    {
      degree: 'Diploma in Computer Engineering',
      institution: 'Government Polytechnic, Yavatmal',
      duration: '2022 – 2025',
      status: 'Completed',
      score: '94.86% (First Class with Distinction)',
      highlights: [
        '1st in Project Competition',
        'State-Level Paper Presentation',
        'Code Jam Winner',
        'Institute Topper'
      ],
      icon: <BookOpen className="text-green-500" />,
      location: 'Yavatmal, Maharashtra'
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Free Methodist English High School',
      duration: '2012 – 2022',
      status: 'Completed',
      score: '89.80% ',
      highlights: [
'Consistently ranked in the top 10 students throughout school'],
      icon: <Award className="text-purple-500" />,
      location: 'Yavatmal, Maharashtra'
    }
  ];

  return (
    <section id="education" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Academic <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Consistent academic excellence with focus on practical implementation of theoretical knowledge
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-accent to-purple-500"></div>
          
          {/* Timeline Items */}
          <div className="space-y-12">
            {educationTimeline.map((edu, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-white border-4 border-accent rounded-full z-10"></div>
                
                {/* Content Card */}
                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-12 md:ml-0`}>
                  <div className="bg-white rounded-2xl p-6 shadow-xl card-hover border border-gray-100">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-gray-100 rounded-lg">
                        {edu.icon}
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        edu.status === 'Current' 
                          ? 'bg-blue-100 text-blue-600' 
                          : 'bg-green-100 text-green-600'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                    
                    {/* Degree & Institution */}
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-700 font-medium mb-3">{edu.institution}</p>
                    
                    {/* Details */}
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-gray-600">
                        <Calendar size={16} className="mr-2" />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin size={16} className="mr-2" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    
                    {/* Score */}
                    <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                      <p className="font-bold text-gray-800">{edu.score}</p>
                    </div>
                    
                    {/* Highlights */}
                    <div>
                      <p className="font-medium text-gray-700 mb-2">Key Highlights:</p>
                      <ul className="space-y-2">
                        {edu.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-center text-gray-600 text-sm">
                            <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Spacing for even items */}
                <div className="md:w-2/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Academic Info */}
        <div className="mt-16 bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-800 mb-2">94.86%</div>
              <p className="text-gray-600">Diploma Aggregate</p>
              <p className="text-sm text-gray-500 mt-1">(State Merit Rank)</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-800 mb-2">10+</div>
              <p className="text-gray-600">Technical Workshops</p>
              <p className="text-sm text-gray-500 mt-1">Attended & Conducted</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-800 mb-2">100%</div>
              <p className="text-gray-600">Attendance Record</p>
              <p className="text-sm text-gray-500 mt-1">In Core CS Subjects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;