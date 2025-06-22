import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Code, 
  Brain, 
  Smartphone, 
  Globe, 
  Database,
  Cpu,
  Palette,
  Users
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const skillBarsRef = useRef<HTMLDivElement[]>([]);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 90, color: "from-yellow-400 to-yellow-600" },
        { name: "Java", level: 85, color: "from-red-500 to-orange-500" },
        { name: "C", level: 80, color: "from-blue-500 to-blue-700" },
        { name: "SQL", level: 88, color: "from-green-500 to-green-700" }
      ]
    },
    {
      title: "AI/ML & Data Science",
      icon: Brain,
      skills: [
        { name: "TensorFlow", level: 87, color: "from-orange-400 to-orange-600" },
        { name: "Keras", level: 85, color: "from-red-400 to-red-600" },
        { name: "Scikit-learn", level: 90, color: "from-blue-400 to-blue-600" },
        { name: "CNN", level: 88, color: "from-purple-400 to-purple-600" }
      ]
    },
    {
      title: "Mobile & VR Development",
      icon: Smartphone,
      skills: [
        { name: "Flutter", level: 85, color: "from-cyan-400 to-cyan-600" },
        { name: "Dart", level: 82, color: "from-blue-400 to-blue-600" },
        { name: "Unity", level: 80, color: "from-gray-400 to-gray-600" },
        { name: "C#", level: 78, color: "from-green-400 to-green-600" }
      ]
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: [
        { name: "HTML/CSS", level: 90, color: "from-orange-400 to-red-500" },
        { name: "JavaScript", level: 85, color: "from-yellow-400 to-yellow-600" },
        { name: "MongoDB", level: 80, color: "from-green-400 to-green-600" },
        { name: "SQLite", level: 85, color: "from-blue-400 to-blue-600" }
      ]
    }
  ];

  const softSkills = [
    { name: "Teamwork", icon: Users },
    { name: "Communication", icon: Globe },
    { name: "Creativity", icon: Palette },
    { name: "Collaboration", icon: Users }
  ];

  useEffect(() => {
    skillBarsRef.current.forEach((bar, index) => {
      if (bar) {
        const progressBar = bar.querySelector('.progress-bar');
        const percentage = bar.dataset.percentage;
        
        gsap.fromTo(progressBar,
          { width: 0 },
          {
            width: `${percentage}%`,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: bar,
              start: "top 80%",
              toggleActions: "play none none reverse"
            },
            delay: index * 0.1
          }
        );
      }
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
            Technical Skills
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Comprehensive expertise across multiple domains of computer science and software development
          </p>
        </motion.div>

        {/* Technical Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={categoryIndex}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => {
                    const barIndex = categoryIndex * 4 + skillIndex;
                    return (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-300 font-medium">{skill.name}</span>
                          <span className="text-gray-400 text-sm">{skill.level}%</span>
                        </div>
                        <div 
                          ref={(el) => {
                            if (el) skillBarsRef.current[barIndex] = el;
                          }}
                          data-percentage={skill.level}
                          className="relative h-3 bg-gray-700 rounded-full overflow-hidden"
                        >
                          <div 
                            className={`progress-bar h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                          >
                            <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-8 text-white">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {softSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4 flex items-center gap-3 hover:bg-white/20 transition-all duration-300"
                >
                  <IconComponent className="w-5 h-5 text-blue-400" />
                  <span className="text-white font-medium">{skill.name}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;