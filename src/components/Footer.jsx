import { Heart, Coffee, Code2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand */}
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-blue-600 rounded-lg flex items-center justify-center">
                <Code2 className="text-white" />
              </div>
              <span className="text-2xl font-bold">Tasbiha Khan</span>
            </div>
            <p className="text-gray-400">Building the future, one line of code at a time</p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            {['Home', 'Projects', 'Skills', 'Achievements', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Availability Status */}
          <div className="text-center md:text-right">
            <div className="inline-flex items-center px-4 py-2 bg-green-900/30 border border-green-700 rounded-full mb-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-green-400 font-medium">Available for Opportunities</span>
            </div>
            <p className="text-gray-400">Open to full-time & internship roles</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <div className="flex items-center mb-4 md:mb-0">
            <span>Made with</span>
            <Heart size={14} className="mx-2 text-red-500 fill-red-500" />
            <span>and lots of</span>
            <Coffee size={14} className="mx-2 text-amber-500" />
          </div>
          
          <div className="text-center">
            <p>© {currentYear} Tasbiha Khan. All rights reserved.</p>
            <p className="mt-1">Portfolio v2.0 • Built with React & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;