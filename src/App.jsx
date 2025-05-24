import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Globe, Menu, X, ExternalLink, Code, Briefcase, User, ChevronDown } from 'lucide-react';

const Portfolio = () => {
  const [language, setLanguage] = useState('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Translations
  const translations = {
    en: {
      nav: {
        home: 'Home',
        about: 'About',
        skills: 'Skills',
        projects: 'Projects',
        contact: 'Contact'
      },
      hero: {
        greeting: "Hi, I'm",
        name: 'Gobijan Nathakrishnan',
        title: 'Epitech Student',
        subtitle: 'Passionate Developer & Problem Solver',
        cta: 'View My Work'
      },
      about: {
        title: 'About Me',
        description: "I'm a second-year student at Epitech Toulouse, passionate about software development and innovative technologies. I enjoy tackling complex challenges and creating efficient solutions.",
        year: 'Year 2',
        school: 'Epitech Toulouse',
        focus: 'Software Development'
      },
      skills: {
        title: 'Technical Skills',
        languages: 'Programming Languages',
        tools: 'Tools & Technologies',
        frameworks: 'Frameworks'
      },
      projects: {
        title: 'Projects',
        viewCode: 'View Code',
        demo: 'Live Demo',
        featured: 'Featured Projects'
      },
      contact: {
        title: 'Get In Touch',
        subtitle: "I'm always open to discussing new opportunities and interesting projects.",
        email: 'Email Me',
        github: 'GitHub Profile',
        linkedin: 'LinkedIn'
      }
    },
    fr: {
      nav: {
        home: 'Accueil',
        about: 'À Propos',
        skills: 'Compétences',
        projects: 'Projets',
        contact: 'Contact'
      },
      hero: {
        greeting: 'Bonjour, je suis',
        name: 'Gobijan Nathakrishnan',
        title: 'Étudiant Epitech',
        subtitle: 'Développeur Passionné & Problem Solver',
        cta: 'Voir Mon Travail'
      },
      about: {
        title: 'À Propos de Moi',
        description: "Je suis étudiant en deuxième année à Epitech Toulouse, passionné par le développement logiciel et les technologies innovantes. J'aime relever des défis complexes et créer des solutions efficaces.",
        year: 'Année 2',
        school: 'Epitech Toulouse',
        focus: 'Développement Logiciel'
      },
      skills: {
        title: 'Compétences Techniques',
        languages: 'Langages de Programmation',
        tools: 'Outils & Technologies',
        frameworks: 'Frameworks'
      },
      projects: {
        title: 'Projets',
        viewCode: 'Voir le Code',
        demo: 'Démo Live',
        featured: 'Projets Principaux'
      },
      contact: {
        title: 'Me Contacter',
        subtitle: "Je suis toujours ouvert à discuter de nouvelles opportunités et de projets intéressants.",
        email: 'Email',
        github: 'Profil GitHub',
        linkedin: 'LinkedIn'
      }
    },
    it: {
      nav: {
        home: 'Home',
        about: 'Chi Sono',
        skills: 'Competenze',
        projects: 'Progetti',
        contact: 'Contatto'
      },
      hero: {
        greeting: 'Ciao, sono',
        name: 'Gobijan Nathakrishnan',
        title: 'Studente Epitech',
        subtitle: 'Sviluppatore Appassionato & Problem Solver',
        cta: 'Vedi il Mio Lavoro'
      },
      about: {
        title: 'Chi Sono',
        description: "Sono uno studente del secondo anno presso Epitech Tolosa, appassionato di sviluppo software e tecnologie innovative. Mi piace affrontare sfide complesse e creare soluzioni efficienti.",
        year: 'Anno 2',
        school: 'Epitech Tolosa',
        focus: 'Sviluppo Software'
      },
      skills: {
        title: 'Competenze Tecniche',
        languages: 'Linguaggi di Programmazione',
        tools: 'Strumenti & Tecnologie',
        frameworks: 'Framework'
      },
      projects: {
        title: 'Progetti',
        viewCode: 'Vedi Codice',
        demo: 'Demo Live',
        featured: 'Progetti Principali'
      },
      contact: {
        title: 'Contattami',
        subtitle: "Sono sempre aperto a discutere nuove opportunità e progetti interessanti.",
        email: 'Email',
        github: 'Profilo GitHub',
        linkedin: 'LinkedIn'
      }
    }
  };

  const t = translations[language];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Sample skills data - replace with your actual skills
  const skills = {
    languages: ['C', 'C++', 'Python', 'JavaScript', 'TypeScript', 'Java'],
    tools: ['Git', 'Docker', 'Linux', 'VS Code', 'IntelliJ IDEA'],
    frameworks: ['React', 'Node.js', 'Express', 'Django', 'Spring Boot']
  };

  // Sample projects data - replace with your actual projects
  const projects = [
    {
      title: 'Project 1',
      description: 'A brief description of your project and the technologies used.',
      tech: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/yourusername/project1',
      demo: 'https://project1-demo.com'
    },
    {
      title: 'Project 2',
      description: 'Another project showcasing different skills and technologies.',
      tech: ['Python', 'Django', 'PostgreSQL'],
      github: 'https://github.com/yourusername/project2',
      demo: null
    },
    {
      title: 'Project 3',
      description: 'A third project demonstrating your versatility as a developer.',
      tech: ['C++', 'Qt', 'OpenGL'],
      github: 'https://github.com/yourusername/project3',
      demo: null
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {Object.entries(t.nav).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(key)}
                  className={`transition-colors duration-300 hover:text-cyan-400 ${
                    activeSection === key ? 'text-cyan-400' : 'text-gray-300'
                  }`}
                >
                  {value}
                </button>
              ))}
              
              {/* Language Selector */}
              <div className="relative group">
                <button className="flex items-center space-x-1 px-3 py-1 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                  <Globe className="w-4 h-4" />
                  <span className="uppercase">{language}</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
                <div className="absolute right-0 mt-2 w-32 rounded-lg bg-gray-800 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <button
                    onClick={() => setLanguage('en')}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-700 rounded-t-lg"
                  >
                    English
                  </button>
                  <button
                    onClick={() => setLanguage('fr')}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-700"
                  >
                    Français
                  </button>
                  <button
                    onClick={() => setLanguage('it')}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-700 rounded-b-lg"
                  >
                    Italiano
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {Object.entries(t.nav).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(key)}
                  className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
                >
                  {value}
                </button>
              ))}
              <div className="flex space-x-2 px-3 py-2">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded ${language === 'en' ? 'bg-cyan-600' : 'bg-gray-700'}`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('fr')}
                  className={`px-3 py-1 rounded ${language === 'fr' ? 'bg-cyan-600' : 'bg-gray-700'}`}
                >
                  FR
                </button>
                <button
                  onClick={() => setLanguage('it')}
                  className={`px-3 py-1 rounded ${language === 'it' ? 'bg-cyan-600' : 'bg-gray-700'}`}
                >
                  IT
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <div className="animate-fade-in">
            <p className="text-cyan-400 mb-4">{t.hero.greeting}</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
              {t.hero.name}
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 text-gray-300">{t.hero.title}</h2>
            <p className="text-lg md:text-xl mb-8 text-gray-400">{t.hero.subtitle}</p>
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300"
            >
              {t.hero.cta}
            </button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-12">
            <a
              href="https://github.com/GobyNathan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transform hover:scale-110 transition-all duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/gobijan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transform hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:gobijan.nathakrishnan@epitech.eu"
              className="text-gray-400 hover:text-cyan-400 transform hover:scale-110 transition-all duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <User className="inline-block mr-2 mb-1" />
            {t.about.title}
          </h2>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
            <p className="text-lg text-gray-300 mb-6">{t.about.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-700/50 rounded-lg p-4 text-center">
                <p className="text-cyan-400 font-semibold">{t.about.year}</p>
                <p className="text-gray-400">2023-2024</p>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-4 text-center">
                <p className="text-cyan-400 font-semibold">{t.about.school}</p>
                <p className="text-gray-400">France</p>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-4 text-center">
                <p className="text-cyan-400 font-semibold">{t.about.focus}</p>
                <p className="text-gray-400">Full Stack</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <Code className="inline-block mr-2 mb-1" />
            {t.skills.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">{t.skills.languages}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-700/50 rounded-full text-sm hover:bg-cyan-600/20 hover:text-cyan-400 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">{t.skills.tools}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-700/50 rounded-full text-sm hover:bg-cyan-600/20 hover:text-cyan-400 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">{t.skills.frameworks}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-700/50 rounded-full text-sm hover:bg-cyan-600/20 hover:text-cyan-400 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <Briefcase className="inline-block mr-2 mb-1" />
            {t.projects.title}
          </h2>
          <p className="text-center text-gray-400 mb-12">{t.projects.featured}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 transform hover:-translate-y-2 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-cyan-600/20 text-cyan-400 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    {t.projects.viewCode}
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      {t.projects.demo}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <Mail className="inline-block mr-2 mb-1" />
            {t.contact.title}
          </h2>
          <p className="text-lg text-gray-400 mb-8">{t.contact.subtitle}</p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="mailto:your.email@example.com"
              className="flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              {t.contact.email}
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-gray-700 rounded-full font-semibold hover:bg-gray-600 transform hover:scale-105 transition-all duration-300"
            >
              <Github className="w-5 h-5 mr-2" />
              {t.contact.github}
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-gray-700 rounded-full font-semibold hover:bg-gray-600 transform hover:scale-105 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              {t.contact.linkedin}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 border-t border-gray-800">
        <p>&copy; 2024 {t.hero.name}. Epitech Toulouse</p>
      </footer>
    </div>
  );
};

export default Portfolio;