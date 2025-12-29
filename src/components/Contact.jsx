import { useState } from 'react';
import { Mail, Github, Linkedin, Send, MapPin, Phone, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, connect to backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="text-blue-500" />,
      label: 'Email',
      value: 'tasbihatahreemkhan@gmail.com',
      link: 'mailto:tasbihatahreemkhan@gmail.com'
    },
    // {
    //   icon: <MapPin className="text-green-500" />,
    //   label: 'Location',
    //   value: 'Maharashtra, India',
    //   link: null
    // },
    // {
    //   icon: <Phone className="text-purple-500" />,
    //   label: 'Availability',
    //   value: 'Open to Opportunities',
    //   link: null
    // }
  ];

  const socialLinks = [
    {
      platform: 'GitHub',
      icon: <Github size={20} />,
      url: 'https://github.com/tasbihakhan29',
      username: '@tasbihakhan29'
    },
    {
      platform: 'LinkedIn',
      icon: <Linkedin size={20} />,
      url: 'https://www.linkedin.com/in/tasbiha-khan/',
      username: 'Tasbiha Khan'
    },
    {
      platform: 'LeetCode',
      icon: <Send size={20} />,
      url: 'https://leetcode.com/tasbihakhan',
      username: 'tasbihakhan'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Open to discussing opportunities, collaborations, or just interesting tech conversations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Info & Social */}
          <div>
            {/* Contact Info */}
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center">
                    <div className="p-3 bg-gray-100 rounded-lg mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{info.label}</p>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-gray-800 font-medium hover:text-accent transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-800 font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Current Status */}
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Currently:</span> Available for internships and full-time opportunities starting 2025
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Find Me Online</h3>
              
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all group"
                  >
                    <div className="flex items-center">
                      <div className="p-2 bg-white rounded-lg mr-4 group-hover:bg-gray-50">
                        {social.icon}
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">{social.platform}</p>
                        <p className="text-sm text-gray-600">{social.username}</p>
                      </div>
                    </div>
                    <span className="text-gray-400 group-hover:text-accent">→</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h3>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <CheckCircle className="text-green-500" size={32} />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">Message Sent!</h4>
                <p className="text-gray-600">Thank you for reaching out. I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    placeholder="What is this regarding?"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-blue-600 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </button>

                <p className="text-sm text-gray-500 text-center mt-4">
                  I typically respond within 24 hours for professional inquiries
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-accent to-blue-600 text-white px-8 py-4 rounded-xl shadow-lg">
            <p className="text-lg font-semibold">
              Have an exciting opportunity or project? Let's build something great together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;