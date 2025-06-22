import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Github, Linkedin, Mail, Phone, Download, Code, Sparkles, Monitor, Cpu, Smartphone, Database, Rocket, Zap, Star } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const floatingIconsRef = useRef<HTMLDivElement[]>([]);
  const rocketRef = useRef<HTMLDivElement>(null);
  const astronautRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    
    tl.fromTo(titleRef.current, 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
    .fromTo(subtitleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    );

    // Animate floating icons
    floatingIconsRef.current.forEach((icon, index) => {
      if (icon) {
        gsap.to(icon, {
          y: "random(-30, 30)",
          x: "random(-20, 20)",
          rotation: "random(-20, 20)",
          duration: "random(4, 7)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.3
        });
      }
    });

    // Rocket animation - flying across screen
    if (rocketRef.current) {
      gsap.fromTo(rocketRef.current, 
        { x: -200, y: 100, rotation: -45 },
        { 
          x: window.innerWidth + 200, 
          y: -100, 
          rotation: 45,
          duration: 8,
          repeat: -1,
          delay: 3,
          ease: "none"
        }
      );
    }

    // Astronaut floating animation
    if (astronautRef.current) {
      gsap.to(astronautRef.current, {
        y: -20,
        rotation: 5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2
      });
    }
  }, []);

  const techIcons = [
    { icon: Monitor, color: "from-blue-400 to-blue-600", size: "w-8 h-8" },
    { icon: Cpu, color: "from-purple-400 to-purple-600", size: "w-6 h-6" },
    { icon: Smartphone, color: "from-green-400 to-green-600", size: "w-7 h-7" },
    { icon: Database, color: "from-orange-400 to-orange-600", size: "w-6 h-6" },
    { icon: Code, color: "from-cyan-400 to-cyan-600", size: "w-8 h-8" },
    { icon: Sparkles, color: "from-pink-400 to-pink-600", size: "w-5 h-5" },
    { icon: Star, color: "from-yellow-400 to-yellow-600", size: "w-6 h-6" },
    { icon: Zap, color: "from-red-400 to-red-600", size: "w-7 h-7" }
  ];

  return (
    <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-indigo-900/20 backdrop-blur-sm"></div>
      
      {/* Animated Stars Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Flying Rocket */}
      <div 
        ref={rocketRef}
        className="absolute pointer-events-none z-20"
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-red-500 to-orange-500 p-4 rounded-full shadow-2xl">
            <Rocket className="w-8 h-8 text-white" />
          </div>
          {/* Rocket Trail */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
            <div className="w-2 h-8 bg-gradient-to-t from-orange-400 to-transparent rounded-full opacity-80"></div>
          </div>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
            <div className="w-1 h-6 bg-gradient-to-t from-red-400 to-transparent rounded-full opacity-60"></div>
          </div>
        </motion.div>
      </div>

      {/* Floating Astronaut */}
      <div 
        ref={astronautRef}
        className="absolute top-20 right-20 pointer-events-none z-20"
      >
        <motion.div
          animate={{
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-gray-300 to-gray-500 p-6 rounded-full shadow-2xl border-4 border-white/20">
            <div className="text-4xl">🚀</div>
          </div>
          {/* Astronaut Tether */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2">
            <div className="w-0.5 h-20 bg-gradient-to-b from-white/40 to-transparent"></div>
          </div>
        </motion.div>
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {techIcons.map((tech, index) => {
          const IconComponent = tech.icon;
          return (
            <motion.div
              key={index}
              ref={(el) => {
                if (el) floatingIconsRef.current[index] = el;
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.7, scale: 1 }}
              transition={{ duration: 0.8, delay: 2 + index * 0.2 }}
              className="absolute"
              style={{
                left: `${10 + (index * 12) % 80}%`,
                top: `${15 + (index * 15) % 70}%`,
              }}
            >
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4 + index * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2
                }}
                className={`bg-gradient-to-r ${tech.color} p-3 rounded-xl backdrop-blur-md border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <IconComponent className={`${tech.size} text-white`} />
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Animated Code Snippets */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.4 }}
          transition={{ duration: 2, delay: 3 }}
          className="absolute top-1/4 left-10 bg-black/40 backdrop-blur-md border border-green-500/40 rounded-lg p-4 font-mono text-green-400 text-sm shadow-2xl"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          </div>
          <div>def ai_model():</div>
          <div className="ml-4">return "98% accuracy"</div>
          <div className="ml-4 text-cyan-400">// ML Magic ✨</div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.4 }}
          transition={{ duration: 2, delay: 3.5 }}
          className="absolute top-2/3 right-10 bg-black/40 backdrop-blur-md border border-blue-500/40 rounded-lg p-4 font-mono text-blue-400 text-sm shadow-2xl"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          </div>
          <div>&lt;VR_Design /&gt;</div>
          <div className="ml-4">Unity + AI</div>
          <div className="ml-4 text-purple-400">// Future Tech 🚀</div>
        </motion.div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image with Space Theme */}
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "back.out" }}
            className="mb-8"
          >
            <div className="relative mx-auto w-36 h-36 mb-6">
              {/* Outer glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse blur-md"></div>
              <div className="relative bg-gradient-to-r from-blue-600 to-purple-700 rounded-full p-1">
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-full p-6 border-2 border-white/20">
                  <Code className="w-20 h-20 text-blue-400" />
                </div>
              </div>
              
              {/* Orbiting Planets/Icons */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="bg-gradient-to-r from-green-400 to-green-600 p-2 rounded-full shadow-lg"
                  >
                    <Cpu className="w-5 h-5 text-white" />
                  </motion.div>
                </div>
                <div className="absolute top-1/2 -right-3 transform -translate-y-1/2">
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="bg-gradient-to-r from-purple-400 to-purple-600 p-2 rounded-full shadow-lg"
                  >
                    <Monitor className="w-5 h-5 text-white" />
                  </motion.div>
                </div>
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="bg-gradient-to-r from-blue-400 to-blue-600 p-2 rounded-full shadow-lg"
                  >
                    <Smartphone className="w-5 h-5 text-white" />
                  </motion.div>
                </div>
                <div className="absolute top-1/2 -left-3 transform -translate-y-1/2">
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="bg-gradient-to-r from-orange-400 to-orange-600 p-2 rounded-full shadow-lg"
                  >
                    <Database className="w-5 h-5 text-white" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Outer orbit ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 scale-150"
              >
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                  <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Name and Title with Space Effects */}
          <motion.h1 
            ref={titleRef}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent relative"
            animate={{
              textShadow: [
                "0 0 20px rgba(139, 92, 246, 0.5)",
                "0 0 40px rgba(139, 92, 246, 0.8)",
                "0 0 20px rgba(139, 92, 246, 0.5)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Nandhine Ayyappan
            {/* Sparkle effects */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="absolute -top-4 -right-4"
            >
              <Sparkles className="w-8 h-8 text-yellow-400" />
            </motion.div>
          </motion.h1>
          
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
          >
            Computer Science Student & AI Developer 🚀
          </p>

          {/* Summary */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="max-w-3xl mx-auto mb-12"
          >
            <p className="text-gray-400 text-lg leading-relaxed">
              Innovative Computer Science student with expertise in AI/ML, data analysis, and VR development. 
              Successfully built impactful projects like an AI-driven VR interior design tool and deep learning models. 
              Combines strong technical skills with creative problem-solving to reach for the stars! ✨
            </p>
          </motion.div>

          {/* Contact Info with Space Theme */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            <motion.a 
              href="mailto:nandhine2210724@ssn.edu.in"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 text-white hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            >
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </motion.a>
            <motion.a 
              href="tel:7305207306"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 text-white hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-green-500/25"
            >
              <Phone className="w-5 h-5" />
              <span>+91 7305207306</span>
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/nandhine-ayyappan-7814a9253"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 text-white hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;