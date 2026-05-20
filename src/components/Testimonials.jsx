import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

const CountUpNumber = ({ value, suffix = '' }) => {
  const nodeRef = useRef(null);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    let frameId;
    let startTime;

    const runCounter = () => {
      const duration = 1600;

      const update = (timestamp) => {
        if (!startTime) startTime = timestamp;

        const progress = Math.min((timestamp - startTime) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);

        setDisplayValue(Math.round(value * easedProgress));

        if (progress < 1) {
          frameId = requestAnimationFrame(update);
        }
      };

      frameId = requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runCounter();
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameId);
    };
  }, [value]);

  return (
    <span ref={nodeRef}>
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
};

const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const stats = [
    { value: 1548, suffix: '+', label: 'Projects Delivered' },
    { value: 25, suffix: '+', label: 'Awards Gained' },
    { value: 9, suffix: '+', label: 'Years Experience' }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Christa Smith',
      role: 'Manager',
      company: 'FinTech Solutions',
      avatar: '/images/Testimonials/christa_smith.png',
      quote: 'Great experience all around! Easy to use and efficient.',
    },
    {
      id: 2,
      name: 'Sarah Jenkins',
      role: 'VP of Engineering',
      company: 'RetailCloud',
      avatar: '/images/Testimonials/sarah_jenkins.png',
      quote: 'NexGen reconstructed our core transaction ledger into a resilient serverless architecture. We successfully weathered a Black Friday traffic surge of 15x normal load with absolute zero friction.',
    },
    {
      id: 3,
      name: 'Marcus Chen',
      role: 'Chief Technology Officer',
      company: 'HealthLink Global',
      avatar: '/images/Testimonials/marcus_chen.png',
      quote: 'Security and compliance were major bottlenecks for our telehealth launch. NexGen engineered an end-to-end encrypted API network that passed SOC2 Type II and HIPAA audits on the first run.',
    },
    {
      id: 4,
      name: 'Elena Rostova',
      role: 'Director of Product',
      company: 'LogiRoute Logistics',
      avatar: '/images/Testimonials/elena_rostova.png',
      quote: 'We hired NexGen to optimize our multi-region Kubernetes clusters. They didn\'t just write code; they refactored our entire data ingestion stream. The response latency dropped from 4.2s to sub-80ms.',
    }
  ];

  // Optional autoplay for slider
  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-white relative overflow-hidden font-sans">
      
      {/* 1. TOP SUB-SECTION: GLOBAL TRUST & STATS */}
      <div className="relative z-10 w-full px-8 lg:px-16 xl:px-24 mb-16 lg:mb-20">
        
        {/* Stats Title Block */}
        <div className="relative z-10 text-center max-w-3xl mx-auto mb-10">
          <motion.h3 
            className="text-xl lg:text-[26px] font-bold text-slate-800 tracking-tight mb-3 font-sans"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Trusted by more than 10K users
          </motion.h3>
          <motion.p 
            className="text-[11px] lg:text-[13px] text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.
          </motion.p>
        </div>

        {/* 3-Column Large Statistics Grid */}
        <div className="relative z-10 grid grid-cols-3 gap-6 max-w-3xl mx-auto text-center pt-8">
          {stats.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center"
            >
              <span className="block text-[32px] lg:text-[44px] font-semibold text-[#0033cc]/90 tracking-tight leading-none mb-2.5">
                <CountUpNumber value={s.value} suffix={s.suffix} />
              </span>
              <span className="block text-[11px] lg:text-[12px] font-medium text-slate-500 tracking-normal font-sans">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>

      </div>

      {/* 2. BOTTOM SUB-SECTION: TESTIMONIAL SLIDER */}
      <div className="relative z-10 w-full px-8 lg:px-16 xl:px-24">
        
        {/* Section Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.h2 
            className="text-xl lg:text-[26px] font-bold text-slate-800 tracking-tight mb-3 font-sans"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What Our Client Say ?
          </motion.h2>
          <motion.p 
            className="text-[11px] lg:text-[13px] text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.
          </motion.p>
        </div>

        {/* Dynamic Centered Slider Canvas */}
        <div className="max-w-4xl mx-auto relative px-6 md:px-12 flex flex-col justify-between items-center">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full flex flex-col items-center text-center will-change-transform transform-gpu"
              onMouseEnter={() => setAutoplay(false)}
              onMouseLeave={() => setAutoplay(true)}
            >
              
              {/* Flanked Quote Canvas */}
              <div className="relative w-full max-w-3xl mb-6 flex justify-center items-center py-6 min-h-[120px]">
                {/* Left Large Decorative Quote */}
                <span className="absolute left-0 lg:left-8 top-0 text-[80px] lg:text-[110px] font-serif font-black leading-none text-slate-100/80 select-none -translate-x-4 lg:-translate-x-12 -translate-y-4">
                  “
                </span>
                
                {/* Centered Quote text */}
                <p className="text-xs lg:text-[15px] text-slate-400/90 font-sans font-medium leading-relaxed italic z-10 px-12 lg:px-16">
                  " {testimonials[activeIdx].quote} "
                </p>

                {/* Right Large Decorative Quote */}
                <span className="absolute right-0 lg:right-8 bottom-0 text-[80px] lg:text-[110px] font-serif font-black leading-none text-slate-100/80 select-none translate-x-4 lg:translate-x-12 translate-y-8">
                  ”
                </span>
              </div>

              {/* Glowing Stars */}
              <div className="flex items-center gap-1 mb-5 select-none">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Round High-Fidelity Executive Avatar Image */}
              <div className="mb-4">
                <img 
                  src={testimonials[activeIdx].avatar}
                  alt={testimonials[activeIdx].name}
                  className="w-14 h-14 rounded-full shadow-md object-cover border-2 border-white ring-2 ring-slate-100 select-none"
                  draggable="false"
                />
              </div>

              {/* Author Metadata */}
              <div className="text-center">
                <span className="block font-bold text-xs lg:text-[13px] text-slate-700 tracking-tight leading-none mb-1.5 font-sans">
                  {testimonials[activeIdx].name}
                </span>
                <span className="block text-[10px] lg:text-[11px] text-slate-400 font-medium font-sans">
                  {testimonials[activeIdx].role}
                </span>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Slider Dot Indicators */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveIdx(idx);
                  setAutoplay(false); // Stop autoplay on click
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  activeIdx === idx 
                    ? 'bg-[#0033cc]/90 scale-105' 
                    : 'bg-[#0033cc]/20 hover:bg-[#0033cc]/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
