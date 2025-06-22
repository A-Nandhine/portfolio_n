import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Database, 
  Smartphone, 
  Brain, 
  FileText, 
  ShoppingCart, 
  Shield,
  ExternalLink,
  Github
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLDivElement[]>([]);

  const projects = [
    {
      title: "InternTrack – Internship Management System",
      description: "Created a web application for colleges to manage and track student internships with Drive + MongoDB integration.",
      technologies: ["HTML", "CSS", "JavaScript", "MongoDB", "Google Drive API"],
      icon: Database,
      gradient: "from-blue-500 to-cyan-500",
      category: "Web Development"
    },
    {
      title: "Virtual Reality in Interior Designing integrated with AI",
      description: "Built a VR project that offers immersive design with AI-driven furniture suggestions.",
      technologies: ["Unity", "C#", "AI Integration"],
      icon: Brain,
      gradient: "from-purple-500 to-pink-500",
      category: "VR/AI Development"
    },
    {
      title: "Journal and Conference Publication Management System",
      description: "Secure role-based system for academic paper submission, feedback, and tracking.",
      technologies: ["SQL", "NetBeans", "Oracle"],
      icon: FileText,
      gradient: "from-green-500 to-teal-500",
      category: "Enterprise System"
    },
    {
      title: "Optimizing Customer Retention – ML for E-Commerce",
      description: "Performed EDA, preprocessing, applied models (LogReg, RF, SVM), handled imbalance with SMOTE. Achieved 98% accuracy.",
      technologies: ["Python", "Pandas", "Scikit-learn", "SMOTE"],
      icon: ShoppingCart,
      gradient: "from-orange-500 to-red-500",
      category: "Machine Learning",
      accuracy: "98%"
    },
    {
      title: "Password Manager Application",
      description: "Secure password manager with master password, PIN lock, password generation, and clean UI.",
      technologies: ["Flutter", "Dart", "SQLite"],
      icon: Shield,
      gradient: "from-indigo-500 to-blue-500",
      category: "Mobile Development"
    }
  ];

  useEffect(() => {
    const projectElements = projectsRef.current;
    
    projectElements.forEach((el, index) => {
      gsap.fromTo(el, 
        { 
          y: 100, 
          opacity: 0,
          scale: 0.8
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          },
          delay: index * 0.1
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            A showcase of innovative solutions spanning AI/ML, VR development, and full-stack applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={index}
                ref={(el) => {
                  if (el) projectsRef.current[index] = el;
                }}
                className="group relative"
              >
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 h-full hover:bg-white/10 transition-all duration-500 hover:scale-105">
                  {/* Project Category */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                    {project.accuracy && (
                      <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-bold">
                        {project.accuracy} Accuracy
                      </span>
                    )}
                  </div>

                  {/* Icon */}
                  <div className={`inline-block p-3 rounded-xl bg-gradient-to-r ${project.gradient} mb-4`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex-1 justify-center">
                      <ExternalLink className="w-4 h-4" />
                      <span>View Details</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;