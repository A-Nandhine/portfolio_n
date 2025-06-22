import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building, Award } from 'lucide-react';

const Experience = () => {
  return (
    <section className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Academic excellence and professional experience in AI/ML development
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Experience Section */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Building className="w-8 h-8 text-blue-400" />
              Professional Experience
            </h3>
            
            {/* Quizaro Experience */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 mb-8">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-xl shrink-0">
                  <Award className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h4 className="text-2xl font-bold text-white mb-2 md:mb-0">AI Intern</h4>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>Jan 2024 – Mar 2024</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-6">
                    <Building className="w-5 h-5 text-blue-400" />
                    <span className="text-blue-400 font-semibold">Quizaro ExtendedEdge</span>
                  </div>
                  
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                      <span>Developed and fine-tuned CNNs for image recognition using Python, TensorFlow, Keras</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 shrink-0"></div>
                      <span>Collaborated with senior data scientists to deploy and evaluate ML models</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                      <span>Gained hands-on experience in production-level AI/ML development workflows</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CopterCode Experience */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-xl shrink-0">
                  <Award className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h4 className="text-2xl font-bold text-white mb-2 md:mb-0">Full Stack Developer Intern</h4>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>June 9 2024 – July 9 2024</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-6">
                    <Building className="w-5 h-5 text-blue-400" />
                    <span className="text-blue-400 font-semibold">CopterCode</span>
                    <MapPin className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-400">IITM Research Park</span>
                  </div>
                  
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                      <span>Built and enhanced MERN stack applications with live coding sessions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 shrink-0"></div>
                      <span>Collaborated on designing and developing full-stack features</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                      <span>Improved code quality and debugging through mentor feedback</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Award className="w-8 h-8 text-blue-400" />
              Education
            </h3>
            
            <div className="space-y-6">
              {/* Current Education */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="bg-gradient-to-r from-green-500 to-teal-600 p-4 rounded-xl shrink-0">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h4 className="text-2xl font-bold text-white mb-2 md:mb-0">BE Computer Science</h4>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>2022 - 2026</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <MapPin className="w-5 h-5 text-green-400" />
                      <span className="text-green-400 font-semibold">Sri Sivasubramaniya Nadar College of Engineering</span>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      {/* <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full font-bold">
                        CGPA: 8.0/10
                      </span> */}
                      <span className="text-gray-400">Kalavakkam, Chennai</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Previous Education */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="bg-gradient-to-r from-orange-500 to-red-600 p-4 rounded-xl shrink-0">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-white mb-4">Higher Secondary Education</h4>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <MapPin className="w-5 h-5 text-orange-400" />
                      <span className="text-orange-400 font-semibold">Sairam Matriculation Higher Secondary School</span>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <span className="bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full font-bold">
                        96% Score
                      </span>
                      <span className="text-gray-400">West Tambaram, Chennai</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
