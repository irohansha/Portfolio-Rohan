import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { staggerContainer, fadeIn } from '../animations/variants';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import { profile } from '../data/profile';

const Contact = () => {
  const { ref, inView } = useScrollReveal();
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_id',
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_id',
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key'
    )
    .then(() => {
      toast.success('Message sent successfully! I will get back to you soon.');
      formRef.current.reset();
      setLoading(false);
    }, (error) => {
      toast.error('Failed to send message. Please try again later.');
      console.error(error);
      setLoading(false);
    });
  };

  const contactInfo = [
    { icon: FaEnvelope, text: profile.email, href: `mailto:${profile.email}` },
    { icon: FaPhoneAlt, text: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { icon: FaLinkedin, text: 'LinkedIn', href: profile.linkedin },
    { icon: FaGithub, text: 'GitHub', href: profile.github }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <Toaster position="bottom-right" />
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid lg:grid-cols-2 gap-16"
        >
          <motion.div variants={fadeIn('right', 'tween', 0.2, 0.8)} className="flex flex-col justify-center">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">Get In Touch</h2>
            <h3 className="text-4xl md:text-6xl font-heading font-black text-slate-900 dark:text-white mb-6">
              Let's Work <span className="text-gradient">Together.</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 max-w-md">
              I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="flex flex-col gap-6">
              {contactInfo.map((info, index) => (
                <a 
                  key={index} 
                  href={info.href} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl glass-card hover:border-primary/50 transition-colors group w-full max-w-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <info.icon size={20} />
                  </div>
                  <span className="text-slate-700 dark:text-slate-300 font-medium group-hover:text-primary transition-colors">{info.text}</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeIn('left', 'tween', 0.4, 0.8)}>
            <form ref={formRef} onSubmit={handleSubmit} className="glass-card p-8 md:p-10 rounded-3xl border border-white/10 flex flex-col gap-6">
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Send me a message</h4>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
                <input 
                  type="text" 
                  name="user_name" 
                  id="name"
                  required
                  placeholder="John Doe"
                  className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                <input 
                  type="email" 
                  name="user_email" 
                  id="email"
                  required
                  placeholder="john@example.com"
                  className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-medium text-slate-700 dark:text-slate-300">Subject</label>
                <input 
                  type="text" 
                  name="subject" 
                  id="subject"
                  required
                  placeholder="Job Opportunity"
                  className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                <textarea 
                  name="message" 
                  id="message"
                  required
                  rows="4"
                  placeholder="Your message here..."
                  className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="btn-primary w-full flex items-center justify-center gap-2 mt-2 disabled:opacity-70"
              >
                {loading ? 'Sending...' : 'Send Message'}
                {!loading && <FaPaperPlane />}
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
