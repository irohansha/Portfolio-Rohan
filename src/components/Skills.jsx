import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { skillsData, marqueeSkills } from '../data/skills';
import { staggerContainer, fadeIn } from '../animations/variants';

const Skills = () => {
  const { ref, inView } = useScrollReveal();

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 mb-16">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">My Arsenal</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-4">
            Technologies & Tools
          </h3>
          <p className="text-slate-600 dark:text-slate-400">
            A comprehensive list of the tools and technologies I use to build scalable, high-performance applications.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillsData.map((category, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn('up', 'tween', idx * 0.1, 0.5)}
              className="glass-card p-8 rounded-3xl"
            >
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-white/10 pb-4">
                {category.category}
              </h4>
              <div className="flex flex-col gap-4">
                {category.items.map((skill, sIdx) => (
                  <div key={sIdx} className="group cursor-pointer">
                    <div className="flex items-center gap-3 mb-2">
                      <skill.icon size={24} style={{ color: skill.color }} className="group-hover:scale-125 transition-transform" />
                      <span className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">{skill.name}</span>
                    </div>
                    {/* Animated bar simulation */}
                    <div className="h-1.5 w-full bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '80%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (sIdx * 0.1) }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: skill.color || '#0ea5e9' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Infinite Marquee */}
      <div className="w-full bg-slate-100 dark:bg-black/30 py-8 border-y border-slate-200 dark:border-white/5 overflow-hidden flex">
        <div className="marquee-container flex w-[200%]">
          {[1, 2].map((_, i) => (
            <div key={i} className="marquee-content animate-[scrollX_30s_linear_infinite]">
              {marqueeSkills.map((skill, idx) => (
                <div key={idx} className="flex items-center gap-3 mx-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  <skill.icon size={40} className="text-slate-800 dark:text-white" />
                  <span className="text-xl font-heading font-bold text-slate-800 dark:text-white">{skill.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
