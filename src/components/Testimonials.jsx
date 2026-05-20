import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const stats = [
    { value: '1548+', label: 'Projects Delivered' },
    { value: '25+', label: 'Award Gained' },
    { value: '9+', label: 'Years Experience' }
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
        
        {/* HIGH-FIDELITY DOTTED WORLD MAP BACKGROUND */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none flex items-center justify-center opacity-[0.22] overflow-hidden">
          <svg className="w-full max-w-[850px] h-[320px] text-slate-200" viewBox="0 0 850 320" fill="none">
            {/* Dotted stylized world network continents */}
            
            {/* North America */}
            <circle cx="100" cy="70" r="2" fill="currentColor" />
            <circle cx="120" cy="60" r="2" fill="currentColor" />
            <circle cx="140" cy="50" r="2" fill="currentColor" />
            <circle cx="160" cy="55" r="2.5" fill="currentColor" />
            <circle cx="180" cy="60" r="2" fill="currentColor" />
            <circle cx="200" cy="70" r="2" fill="currentColor" />
            <circle cx="220" cy="80" r="2" fill="currentColor" />
            <circle cx="110" cy="85" r="2.5" fill="currentColor" />
            <circle cx="130" cy="80" r="2" fill="currentColor" />
            <circle cx="150" cy="75" r="2" fill="currentColor" />
            <circle cx="170" cy="70" r="2" fill="currentColor" />
            <circle cx="190" cy="80" r="2.5" fill="currentColor" />
            <circle cx="210" cy="90" r="2" fill="currentColor" />
            <circle cx="230" cy="95" r="2" fill="currentColor" />
            <circle cx="120" cy="100" r="2" fill="currentColor" />
            <circle cx="140" cy="95" r="2" fill="currentColor" />
            <circle cx="160" cy="90" r="2.5" fill="currentColor" />
            <circle cx="180" cy="95" r="2" fill="currentColor" />
            <circle cx="200" cy="105" r="2" fill="currentColor" />
            <circle cx="220" cy="115" r="2.5" fill="currentColor" />
            <circle cx="240" cy="120" r="2" fill="currentColor" />
            <circle cx="130" cy="115" r="2" fill="currentColor" />
            <circle cx="150" cy="110" r="2" fill="currentColor" />
            <circle cx="170" cy="105" r="2" fill="currentColor" />
            <circle cx="190" cy="110" r="2.5" fill="currentColor" />
            <circle cx="210" cy="120" r="2" fill="currentColor" />
            <circle cx="140" cy="130" r="2" fill="currentColor" />
            <circle cx="160" cy="125" r="2" fill="currentColor" />
            <circle cx="180" cy="120" r="2" fill="currentColor" />
            <circle cx="190" cy="135" r="2" fill="currentColor" />
            <circle cx="150" cy="145" r="2" fill="currentColor" />
            <circle cx="160" cy="160" r="2" fill="currentColor" />

            {/* Greenland */}
            <circle cx="280" cy="30" r="2.5" fill="currentColor" />
            <circle cx="290" cy="25" r="2" fill="currentColor" />
            <circle cx="300" cy="35" r="2" fill="currentColor" />
            <circle cx="310" cy="45" r="2" fill="currentColor" />
            <circle cx="295" cy="45" r="2" fill="currentColor" />

            {/* South America */}
            <circle cx="220" cy="175" r="2" fill="currentColor" />
            <circle cx="230" cy="170" r="2" fill="currentColor" />
            <circle cx="240" cy="175" r="2" fill="currentColor" />
            <circle cx="250" cy="185" r="2.5" fill="currentColor" />
            <circle cx="260" cy="190" r="2" fill="currentColor" />
            <circle cx="210" cy="190" r="2" fill="currentColor" />
            <circle cx="225" cy="200" r="2.5" fill="currentColor" />
            <circle cx="240" cy="205" r="2" fill="currentColor" />
            <circle cx="255" cy="210" r="2" fill="currentColor" />
            <circle cx="265" cy="215" r="2" fill="currentColor" />
            <circle cx="220" cy="215" r="2" fill="currentColor" />
            <circle cx="230" cy="225" r="2" fill="currentColor" />
            <circle cx="240" cy="235" r="2.5" fill="currentColor" />
            <circle cx="250" cy="240" r="2" fill="currentColor" />
            <circle cx="225" cy="245" r="2" fill="currentColor" />
            <circle cx="235" cy="255" r="2" fill="currentColor" />
            <circle cx="240" cy="270" r="2" fill="currentColor" />
            <circle cx="230" cy="285" r="2" fill="currentColor" />
            <circle cx="235" cy="300" r="2.5" fill="currentColor" />

            {/* Europe & Asia */}
            <circle cx="380" cy="85" r="2" fill="currentColor" />
            <circle cx="395" cy="80" r="2" fill="currentColor" />
            <circle cx="410" cy="75" r="2" fill="currentColor" />
            <circle cx="425" cy="70" r="2.5" fill="currentColor" />
            <circle cx="440" cy="65" r="2" fill="currentColor" />
            <circle cx="455" cy="60" r="2" fill="currentColor" />
            <circle cx="470" cy="55" r="2" fill="currentColor" />
            <circle cx="485" cy="50" r="2" fill="currentColor" />
            <circle cx="500" cy="45" r="2.5" fill="currentColor" />
            <circle cx="515" cy="40" r="2" fill="currentColor" />
            <circle cx="530" cy="45" r="2" fill="currentColor" />
            <circle cx="545" cy="50" r="2" fill="currentColor" />
            <circle cx="560" cy="55" r="2.5" fill="currentColor" />
            <circle cx="575" cy="60" r="2" fill="currentColor" />
            <circle cx="590" cy="65" r="2" fill="currentColor" />
            <circle cx="605" cy="70" r="2" fill="currentColor" />
            <circle cx="620" cy="75" r="2" fill="currentColor" />
            <circle cx="635" cy="80" r="2.5" fill="currentColor" />
            <circle cx="385" cy="100" r="2" fill="currentColor" />
            <circle cx="400" cy="95" r="2" fill="currentColor" />
            <circle cx="415" cy="90" r="2" fill="currentColor" />
            <circle cx="430" cy="85" r="2.5" fill="currentColor" />
            <circle cx="445" cy="80" r="2" fill="currentColor" />
            <circle cx="460" cy="75" r="2" fill="currentColor" />
            <circle cx="475" cy="70" r="2" fill="currentColor" />
            <circle cx="490" cy="65" r="2" fill="currentColor" />
            <circle cx="505" cy="60" r="2" fill="currentColor" />
            <circle cx="520" cy="55" r="2.5" fill="currentColor" />
            <circle cx="535" cy="60" r="2" fill="currentColor" />
            <circle cx="550" cy="65" r="2" fill="currentColor" />
            <circle cx="565" cy="70" r="2" fill="currentColor" />
            <circle cx="580" cy="75" r="2" fill="currentColor" />
            <circle cx="595" cy="80" r="2.5" fill="currentColor" />
            <circle cx="610" cy="85" r="2" fill="currentColor" />
            <circle cx="625" cy="90" r="2" fill="currentColor" />
            <circle cx="640" cy="95" r="2" fill="currentColor" />
            <circle cx="390" cy="115" r="2" fill="currentColor" />
            <circle cx="405" cy="110" r="2.5" fill="currentColor" />
            <circle cx="420" cy="105" r="2" fill="currentColor" />
            <circle cx="435" cy="100" r="2" fill="currentColor" />
            <circle cx="450" cy="95" r="2" fill="currentColor" />
            <circle cx="465" cy="90" r="2" fill="currentColor" />
            <circle cx="480" cy="85" r="2" fill="currentColor" />
            <circle cx="495" cy="80" r="2" fill="currentColor" />
            <circle cx="510" cy="75" r="2.5" fill="currentColor" />
            <circle cx="525" cy="70" r="2" fill="currentColor" />
            <circle cx="540" cy="75" r="2" fill="currentColor" />
            <circle cx="555" cy="80" r="2" fill="currentColor" />
            <circle cx="570" cy="85" r="2.5" fill="currentColor" />
            <circle cx="585" cy="90" r="2" fill="currentColor" />
            <circle cx="600" cy="95" r="2" fill="currentColor" />
            <circle cx="615" cy="100" r="2" fill="currentColor" />
            <circle cx="630" cy="105" r="2.5" fill="currentColor" />
            <circle cx="645" cy="110" r="2" fill="currentColor" />
            <circle cx="455" cy="130" r="2" fill="currentColor" />
            <circle cx="470" cy="125" r="2" fill="currentColor" />
            <circle cx="485" cy="120" r="2.5" fill="currentColor" />
            <circle cx="500" cy="115" r="2" fill="currentColor" />
            <circle cx="515" cy="110" r="2" fill="currentColor" />
            <circle cx="530" cy="105" r="2.5" fill="currentColor" />
            <circle cx="545" cy="110" r="2" fill="currentColor" />
            <circle cx="560" cy="115" r="2" fill="currentColor" />
            <circle cx="575" cy="120" r="2" fill="currentColor" />
            <circle cx="590" cy="125" r="2" fill="currentColor" />
            <circle cx="605" cy="130" r="2.5" fill="currentColor" />
            <circle cx="620" cy="135" r="2" fill="currentColor" />
            <circle cx="635" cy="140" r="2" fill="currentColor" />
            <circle cx="490" cy="145" r="2.5" fill="currentColor" />
            <circle cx="505" cy="140" r="2" fill="currentColor" />
            <circle cx="520" cy="135" r="2" fill="currentColor" />
            <circle cx="535" cy="130" r="2" fill="currentColor" />
            <circle cx="550" cy="135" r="2" fill="currentColor" />
            <circle cx="565" cy="140" r="2.5" fill="currentColor" />
            <circle cx="580" cy="145" r="2" fill="currentColor" />
            <circle cx="595" cy="150" r="2" fill="currentColor" />
            <circle cx="610" cy="155" r="2" fill="currentColor" />
            <circle cx="625" cy="160" r="2" fill="currentColor" />
            <circle cx="515" cy="160" r="2" fill="currentColor" />
            <circle cx="530" cy="155" r="2" fill="currentColor" />
            <circle cx="545" cy="150" r="2.5" fill="currentColor" />
            <circle cx="560" cy="155" r="2" fill="currentColor" />
            <circle cx="575" cy="160" r="2" fill="currentColor" />
            <circle cx="590" cy="165" r="2" fill="currentColor" />
            <circle cx="535" cy="175" r="2" fill="currentColor" />
            <circle cx="550" cy="170" r="2.5" fill="currentColor" />
            <circle cx="565" cy="175" r="2" fill="currentColor" />
            <circle cx="580" cy="180" r="2" fill="currentColor" />
            <circle cx="545" cy="190" r="2" fill="currentColor" />
            <circle cx="555" cy="205" r="2" fill="currentColor" />
            <circle cx="590" cy="195" r="2" fill="currentColor" />
            <circle cx="600" cy="205" r="2" fill="currentColor" />
            <circle cx="610" cy="215" r="2" fill="currentColor" />

            {/* Africa */}
            <circle cx="410" cy="155" r="2" fill="currentColor" />
            <circle cx="420" cy="150" r="2" fill="currentColor" />
            <circle cx="430" cy="145" r="2.5" fill="currentColor" />
            <circle cx="445" cy="140" r="2" fill="currentColor" />
            <circle cx="460" cy="145" r="2" fill="currentColor" />
            <circle cx="475" cy="155" r="2" fill="currentColor" />
            <circle cx="490" cy="160" r="2.5" fill="currentColor" />
            <circle cx="415" cy="170" r="2" fill="currentColor" />
            <circle cx="430" cy="165" r="2" fill="currentColor" />
            <circle cx="445" cy="160" r="2" fill="currentColor" />
            <circle cx="460" cy="165" r="2" fill="currentColor" />
            <circle cx="475" cy="170" r="2.5" fill="currentColor" />
            <circle cx="485" cy="175" r="2" fill="currentColor" />
            <circle cx="420" cy="185" r="2" fill="currentColor" />
            <circle cx="435" cy="180" r="2" fill="currentColor" />
            <circle cx="450" cy="175" r="2" fill="currentColor" />
            <circle cx="465" cy="180" r="2" fill="currentColor" />
            <circle cx="475" cy="190" r="2.5" fill="currentColor" />
            <circle cx="430" cy="200" r="2" fill="currentColor" />
            <circle cx="440" cy="210" r="2" fill="currentColor" />
            <circle cx="455" cy="215" r="2.5" fill="currentColor" />
            <circle cx="465" cy="220" r="2" fill="currentColor" />
            <circle cx="440" cy="230" r="2" fill="currentColor" />
            <circle cx="445" cy="245" r="2" fill="currentColor" />
            <circle cx="450" cy="260" r="2" fill="currentColor" />
            <circle cx="445" cy="275" r="2" fill="currentColor" />

            {/* Australia */}
            <circle cx="650" cy="235" r="2" fill="currentColor" />
            <circle cx="660" cy="230" r="2" fill="currentColor" />
            <circle cx="670" cy="235" r="2" fill="currentColor" />
            <circle cx="680" cy="240" r="2.5" fill="currentColor" />
            <circle cx="690" cy="245" r="2" fill="currentColor" />
            <circle cx="645" cy="250" r="2" fill="currentColor" />
            <circle cx="655" cy="245" r="2" fill="currentColor" />
            <circle cx="665" cy="250" r="2" fill="currentColor" />
            <circle cx="675" cy="255" r="2.5" fill="currentColor" />
            <circle cx="685" cy="260" r="2" fill="currentColor" />
            <circle cx="650" cy="265" r="2" fill="currentColor" />
            <circle cx="660" cy="260" r="2" fill="currentColor" />
            <circle cx="670" cy="265" r="2" fill="currentColor" />
            <circle cx="680" cy="270" r="2" fill="currentColor" />
            <circle cx="665" cy="280" r="2" fill="currentColor" />
            <circle cx="675" cy="275" r="2" fill="currentColor" />

          </svg>
        </div>

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
                {s.value}
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