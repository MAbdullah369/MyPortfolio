import React, { useState } from 'react';
import { Mail, Github, Linkedin, Phone, Code, Briefcase, User, MessageSquare, Award, BookOpen, Terminal, Zap } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const portfolioData = {
    name: "Abdullah Zahid",
    title: "Computer Science Student",
    tagline: "Code. Build. Deploy.",
    profileImage: "https://ui-avatars.com/api/?name=Abdullah+Zahid&size=400&background=0ea5e9&color=fff&bold=true&font-size=0.4",
    contactInfo: {
      email: "Bscs22111@itu.edu.pk",
      linkedin: "https://www.linkedin.com/in/muhammad-abdullah-zahid-a1b7802b8/",
      github: "https://github.com/MAbdullah369",
      phone: "+92 3034232979"
    },
    aboutMe: "I am a dedicated and motivated Computer Science student at ITU University, Lahore, with a strong foundation in programming, software development, and problem-solving. I am seeking opportunities to apply my skills, contribute to innovative projects, and grow professionally.",
    education: [
      {
        degree: "Bachelor in Computer Science",
        institution: "Information Technology University",
        year: "2022-present"
      },
      {
        degree: "Pre Engineering",
        institution: "Punjab Group of Colleges",
        year: "2020-2022"
      }
    ],
    skills: [
      { name: "Problem Solving", level: 90 },
      { name: "Teamwork", level: 85 },
      { name: "C++", level: 88 },
      { name: "Python", level: 75 },
      { name: "HTML & CSS", level: 80 }
    ],
    projects: [
      { title: "Scientific Calculator in C#", description: "A calculator supporting advanced operations using C# and DSA concepts.", date: "Feb 2023", tech: "C#, DSA" },
      { title: "Search Engine in C++", description: "A search engine prototype implementing Data Structures and Algorithms.", date: "Dec 2023", tech: "C++, DSA" },
      { title: "Paint Brush in Python", description: "A simple paint application using OOP.", date: "May 2023", tech: "Python, OOP" },
      { title: "Chess Game in C++", description: "A classic chess game using C++ and OOP concepts.", date: "Mar 2023", tech: "C++, OOP" },
      { title: "Ludo in C++", description: "A multiplayer Ludo game using OOP in C++.", date: "May 2023", tech: "C++, OOP" },
      { title: "Snake Game in C++", description: "A console-based snake game using OOP in C++.", date: "Jan 2023", tech: "C++" }
    ],
    videos: [
      "https://www.youtube.com/embed/mxQOOMX4NQM",
      "https://www.youtube.com/embed/VfV4eV-HDWc",
      "https://www.youtube.com/embed/_kcmfvOTvZ0",
      "https://www.youtube.com/embed/yvK5YZT0gUM"
    ]
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (This is a demo - integrate with a backend service)');
    setFormData({ name: '', email: '', message: '' });
  };

  const navItems = [
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: MessageSquare }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 text-gray-900">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #e0f2fe 1px, transparent 1px),
                           linear-gradient(to bottom, #e0f2fe 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10">
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-sky-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition duration-500"></div>
              <img
                src={portfolioData.profileImage}
                alt="Abdullah Zahid"
                className="relative w-64 h-64 rounded-full border-8 border-white shadow-2xl"
              />
            </div>
            
            <div className="flex-1 text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-white rounded-full border-2 border-cyan-200 shadow-lg">
                <Terminal className="text-cyan-600" size={18} />
                <span className="text-sm font-bold text-gray-700">{portfolioData.tagline}</span>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-black mb-3 text-gray-900">
                {portfolioData.name}
              </h1>
              
              <p className="text-3xl font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                {portfolioData.title}
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-6">
                <a href={`mailto:${portfolioData.contactInfo.email}`} 
                   className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg">
                  <Mail size={20} />
                  <span>Email</span>
                </a>
                <a href={portfolioData.contactInfo.github} target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 text-gray-900 rounded-xl font-semibold border-2 border-gray-200 transition-all transform hover:scale-105 shadow-lg">
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
                <a href={portfolioData.contactInfo.linkedin} target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 text-gray-900 rounded-xl font-semibold border-2 border-gray-200 transition-all transform hover:scale-105 shadow-lg">
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
                <a href={`https://wa.me/${portfolioData.contactInfo.phone.replace(/\s/g, '')}`}
                   className="flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 text-gray-900 rounded-xl font-semibold border-2 border-gray-200 transition-all transform hover:scale-105 shadow-lg">
                  <Phone size={20} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b-2 border-gray-200 shadow-xl">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {navItems.map(item => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`flex items-center gap-2 px-6 py-5 font-bold transition-all relative ${
                      activeSection === item.id
                        ? 'text-cyan-600'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                    {activeSection === item.id && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* About Section */}
        {activeSection === 'about' && (
          <div className="space-y-8 animate-fade-in">
            <section className="bg-white rounded-3xl p-10 shadow-2xl border-2 border-gray-100 hover:shadow-cyan-200/50 transition-shadow duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl">
                  <User className="text-white" size={32} />
                </div>
                <h2 className="text-4xl font-black text-gray-900">About Me</h2>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed">{portfolioData.aboutMe}</p>
            </section>

            <section className="bg-white rounded-3xl p-10 shadow-2xl border-2 border-gray-100 hover:shadow-blue-200/50 transition-shadow duration-500">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-sky-600 rounded-xl">
                  <BookOpen className="text-white" size={32} />
                </div>
                <h2 className="text-4xl font-black text-gray-900">Education</h2>
              </div>
              <div className="space-y-6">
                {portfolioData.education.map((edu, idx) => (
                  <div key={idx} className="relative pl-8 pb-6 border-l-4 border-cyan-500 last:pb-0">
                    <div className="absolute left-0 top-0 w-5 h-5 -translate-x-[11px] rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg ring-4 ring-white"></div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{edu.degree}</h3>
                    <p className="text-lg text-cyan-600 font-semibold">{edu.institution}</p>
                    <p className="text-sm text-gray-500 mt-1">{edu.year}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-3xl p-10 shadow-2xl border-2 border-gray-100 hover:shadow-emerald-200/50 transition-shadow duration-500">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl">
                  <Award className="text-white" size={32} />
                </div>
                <h2 className="text-4xl font-black text-gray-900">Skills</h2>
              </div>
              <div className="space-y-6">
                {portfolioData.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-3">
                      <span className="text-lg font-bold text-gray-900">{skill.name}</span>
                      <span className="text-lg font-black text-cyan-600">{skill.level}%</span>
                    </div>
                    <div className="relative w-full h-4 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-1000 shadow-lg"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-3xl p-10 shadow-2xl border-2 border-gray-100 hover:shadow-sky-200/50 transition-shadow duration-500">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-br from-sky-500 to-indigo-600 rounded-xl">
                  <Zap className="text-white" size={32} />
                </div>
                <h2 className="text-4xl font-black text-gray-900">Featured Videos</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {portfolioData.videos.map((video, idx) => (
                  <div key={idx} className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-500"></div>
                    <iframe
                      src={video}
                      className="relative w-full h-64 rounded-xl border-4 border-gray-100 shadow-lg"
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <div className="animate-fade-in">
            <div className="flex items-center gap-4 mb-12">
              <div className="p-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-xl">
                <Code className="text-white" size={40} />
              </div>
              <h2 className="text-5xl font-black text-gray-900">My Projects</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioData.projects.map((project, idx) => (
                <div key={idx} className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-sky-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                  <div className="relative h-full bg-white rounded-2xl p-8 border-2 border-gray-100 shadow-xl transform transition-all duration-300 group-hover:-translate-y-2">
                    <div className="flex items-start justify-between mb-6">
                      <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl shadow-lg">
                        <Code className="text-white" size={28} />
                      </div>
                      <span className="text-xs font-bold bg-gray-100 px-3 py-2 rounded-full text-gray-700 border border-gray-200">{project.date}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">{project.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.split(', ').map((tech, i) => (
                        <span key={i} className="text-xs font-bold bg-cyan-50 text-cyan-700 px-3 py-2 rounded-lg border border-cyan-200">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Experience Section */}
        {activeSection === 'experience' && (
          <div className="animate-fade-in">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl p-12 shadow-2xl border-2 border-gray-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-xl">
                  <Briefcase className="text-white" size={40} />
                </div>
                <h2 className="text-5xl font-black text-gray-900">Experience & Achievements</h2>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed">
                Currently focused on building strong foundations in Computer Science through academic projects and self-learning.
                Developed 10+ projects showcasing proficiency in C++, Python, and software development principles. Passionate about
                data structures, algorithms, and creating efficient solutions to complex problems.
              </p>
            </div>
          </div>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <div className="animate-fade-in max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl p-12 shadow-2xl border-2 border-gray-100">
              <div className="flex items-center gap-4 mb-10">
                <div className="p-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-xl">
                  <MessageSquare className="text-white" size={40} />
                </div>
                <h2 className="text-5xl font-black text-gray-900">Get In Touch</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-3 font-bold text-lg">Your Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all font-medium"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-3 font-bold text-lg">Your Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all font-medium"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-3 font-bold text-lg">Your Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows="6"
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none font-medium"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold text-lg py-5 rounded-xl transition-all transform hover:scale-105 shadow-xl"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t-2 border-gray-200 bg-white py-10 mt-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-gray-600 text-lg font-semibold">© 2026 Abdullah Zahid. Built with React & Tailwind CSS.</p>
            <div className="flex gap-6">
              <a href={portfolioData.contactInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-cyan-600 transition transform hover:scale-110">
                <Github size={28} />
              </a>
              <a href={portfolioData.contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-cyan-600 transition transform hover:scale-110">
                <Linkedin size={28} />
              </a>
              <a href={`mailto:${portfolioData.contactInfo.email}`} className="text-gray-600 hover:text-cyan-600 transition transform hover:scale-110">
                <Mail size={28} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;