import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { fadeIn, staggerContainer } from '../animations/variants';
import { BiCodeAlt, BiNetworkChart, BiBookReader } from 'react-icons/bi';
import { profile } from '../data/profile';

const About = () => {
  const { ref, inView } = useScrollReveal();

  const cards = [
    {
      title: "Full Stack Development",
      description: "Building scalable web apps from frontend interfaces to backend logic.",
      icon: <BiCodeAlt size={32} />,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "hover:border-blue-500/50"
    },
    {
      title: "Problem Solving",
      description: "Approaching complex challenges with logical, efficient solutions.",
      icon: <BiNetworkChart size={32} />,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      border: "hover:border-purple-500/50"
    },
    {
      title: "Continuous Learning",
      description: "Adapting to modern technologies and industry best practices.",
      icon: <BiBookReader size={32} />,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      border: "hover:border-emerald-500/50"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left: Image/Visual */}
          <motion.div variants={fadeIn('right', 'tween', 0.2, 0.8)} className="relative h-[500px] w-full max-w-md mx-auto lg:mx-0 ">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-3xl transform -rotate-6 opacity-50 blur-lg"></div>
            <div className="absolute inset-0 bg-background-dark/5 border border-white/10 rounded-3xl transform rotate-3 glass-card overflow-hidden">
              <img 
                src="/rohan.jpg" 
                alt={profile.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-2xl flex flex-col items-center justify-center border-t-4 border-t-primary">
              <span className="text-3xl font-black text-gradient mb-1">1+ Year</span>
              <span className="text-sm font-medium text-slate-900 dark:text-white uppercase tracking-wider">Exp.</span>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div variants={fadeIn('left', 'tween', 0.4, 0.8)} className="flex flex-col gap-8">
            <div>
              <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">About Me</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Passionate about code & <span className="text-gradient">creative solutions.</span>
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-4">
                I am a motivated aspiring Software Engineer with strong programming, problem-solving, and teamwork skills. I build full-stack web applications using React.js, Node.js, Express.js, Firebase, Java, SQL, and modern frontend tools.
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                I have worked on projects across NGO management, EdTech, HRM, online examination, quick commerce, and responsive website clones. My goal is to contribute to impactful software projects while growing as a developer.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              {cards.map((card, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5 }}
                  className={`p-6 rounded-2xl glass-card border border-white/5 transition-all duration-300 ${card.border} group`}
                >
                  <div className={`w-14 h-14 rounded-xl ${card.bg} ${card.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    {card.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{card.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{card.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
