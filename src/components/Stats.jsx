import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Stats = () => {
  const { ref, inView } = useScrollReveal();

  const stats = [
    { value: 5, suffix: '+', label: 'Projects Built' },
    { value: 15, suffix: '+', label: 'Technologies' },
    { value: 5, suffix: '+', label: 'Project Domains' },
    { value: 1, suffix: '+', label: 'Year Experience' },
  ];

  return (
    <section className="py-12 border-y border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-black/20">
      <div className="container mx-auto px-6 md:px-12">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-slate-200 dark:divide-white/10">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-center px-4">
              <h3 className="text-4xl md:text-5xl font-heading font-black text-slate-900 dark:text-white mb-2">
                {inView ? (
                  <CountUp end={stat.value} duration={2.5} separator="," />
                ) : (
                  "0"
                )}
                <span className="text-primary">{stat.suffix}</span>
              </h3>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400 uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
