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
          <motion.div variants={fadeIn('right', 'tween', 0.2, 0.8)} className="relative h-[500px] w-full max-w-md mx-auto lg:mx-0">
            {/* Intensive Background Aura Glow */}
            <div className="absolute -inset-3 bg-gradient-to-tr from-primary via-accent to-secondary rounded-3xl transform -rotate-6 opacity-60 blur-xl animate-pulse"></div>
            
            <div className="absolute inset-0 bg-background-dark/5 border border-white/10 rounded-3xl transform rotate-3 glass-card overflow-hidden">
              <img 
                src="/rohan.jpg" 
                alt={profile.name} 
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Intensive Highlighted RS Logo Emblem Badge */}
            <motion.div 
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-5 -left-5 z-20 group cursor-pointer"
            >
              <div className="relative">
                {/* Intensive Radial Neon Halo */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-400 via-primary to-accent rounded-2xl blur-md opacity-85 group-hover:opacity-100 group-hover:blur-lg transition-all duration-300 animate-pulse"></div>
                
                {/* Shield Body */}
                <div className="relative px-3.5 py-2.5 bg-slate-950/90 backdrop-blur-xl border border-cyan-400/50 rounded-2xl shadow-[0_0_30px_rgba(14,165,233,0.55)] flex items-center gap-3">
                  {/* Glowing RS Monogram Box */}
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 via-primary to-accent p-[2px] flex items-center justify-center shadow-lg shadow-primary/40 group-hover:scale-105 transition-transform">
                    <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                      <span className="font-heading font-black text-base tracking-widest bg-gradient-to-r from-cyan-300 via-white to-accent text-transparent bg-clip-text drop-shadow-[0_0_8px_rgba(0,245,212,0.8)]">
                        RS
                      </span>
                    </div>
                  </div>
                  
                  {/* Badge Text Details */}
                  <div className="flex flex-col pr-1">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                      <span className="text-xs font-black tracking-wider text-white uppercase drop-shadow">Rohan Sha</span>
                    </div>
                    <span className="text-[10px] font-bold text-cyan-300 tracking-widest uppercase">
                      Software Engineer
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-2xl flex flex-col items-center justify-center border-t-4 border-t-primary shadow-[0_10px_30px_rgba(14,165,233,0.3)]">
              <span className="text-3xl font-black text-gradient mb-1">1+ Year</span>
              <span className="text-sm font-medium text-slate-900 dark:text-white uppercase tracking-wider">Exp.</span>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div variants={fadeIn('left', 'tween', 0.4, 0.8)} className="flex flex-col gap-8">
            <div>
              <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-md shadow-[0_0_20px_rgba(14,165,233,0.25)] mb-3">
                <span className="px-2 py-0.5 rounded-md bg-gradient-to-r from-primary to-accent text-slate-950 font-black text-xs tracking-wider shadow-sm">
                  RS
                </span>
                <span className="text-xs font-bold text-primary tracking-widest uppercase">
                  About Me
                </span>
              </div>
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
