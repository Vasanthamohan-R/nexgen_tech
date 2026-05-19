import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Cloud, Shield, Headset, BarChart3, Box, ArrowRight, Cpu, Zap, ShieldCheck, HardDrive } from 'lucide-react';

const Services = () => {
  const [hoveredNode, setHoveredNode] = useState(null);

  const services = [
    {
      id: 'product',
      title: 'Product Engineering & Development',
      description: 'We build scalable, secure, and high-performance products with best-in-class engineering practices.',
      icon: Box,
      angle: 215, // Top-Left (10 o'clock)
      textAlign: 'text-right',
      textPosition: 'left',
    },
    {
      id: 'strategy',
      title: 'Digital Strategy & Consulting',
      description: 'We define the right strategy and roadmap to turn your vision into measurable results.',
      icon: Rocket,
      angle: 325, // Top-Right (2 o'clock) (represented as 325 deg to go clockwise/counterclockwise beautifully)
      textAlign: 'text-left',
      textPosition: 'right',
    },
    {
      id: 'cloud',
      title: 'Cloud & DevOps Engineering',
      description: 'Build resilient cloud infrastructure and automate deployments for speed, reliability, and efficiency.',
      icon: Cloud,
      angle: 0, // Middle-Right (3 o'clock)
      textAlign: 'text-left',
      textPosition: 'right',
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity & Compliance',
      description: 'Protect your business with robust security frameworks and ensure compliance every step of the way.',
      icon: Shield,
      angle: 35, // Bottom-Right (4 o'clock)
      textAlign: 'text-left',
      textPosition: 'right',
    },
    {
      id: 'managed',
      title: 'Managed Services & Support',
      description: 'From 24/7 monitoring to proactive support, we keep your systems running at peak performance.',
      icon: Headset,
      angle: 90, // Bottom (6 o'clock)
      textAlign: 'text-center',
      textPosition: 'bottom',
    },
    {
      id: 'data',
      title: 'Data & AI Solutions',
      description: 'Unlock the power of your data with AI-driven insights and intelligent automation.',
      icon: BarChart3,
      angle: 145, // Bottom-Left (8 o'clock)
      textAlign: 'text-right',
      textPosition: 'left',
    },
  ];

  // Helper to convert polar to cartesian percentages relative to 50% center
  const getCoordinates = (angle, radius = 38) => {
    const angleRad = (angle * Math.PI) / 180;
    const x = 50 + radius * Math.cos(angleRad);
    const y = 50 + radius * Math.sin(angleRad);
    return { x, y };
  };

  return (
    <section 
      id="services" 
      className="relative w-full py-12 lg:py-18 bg-white overflow-hidden"
    >
      {/* Global CSS for custom animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes rotate-clockwise {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes rotate-counter-clockwise {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }
        @keyframes flow-dots {
          to { stroke-dashoffset: -200; }
        }
        .animate-spin-slow {
          animation: rotate-clockwise 50s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: rotate-counter-clockwise 40s linear infinite;
        }
        .animate-flow-path {
          stroke-dasharray: 8 30;
          animation: flow-dots 12s linear infinite;
        }
      `}} />

      {/* Background Subtle Gradient & Building Image */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        {/* Soft blue glow on top right */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/60 rounded-full blur-3xl opacity-60"></div>
        {/* Soft indigo glow in the center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-50/30 rounded-full blur-3xl opacity-40"></div>

        {/* Faded Building Image on Bottom Left */}
        <div className="absolute bottom-0 left-0 w-full lg:w-[45%] h-[40%] lg:h-[55%] pointer-events-none">
          {/* Gradient overlays to seamlessly fade the top and right edges into the white background */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/20 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-white via-white/10 to-transparent z-10"></div>
          {/* Soft blend at the very bottom edge */}
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent z-10"></div>
          <img 
            src="/images/Service/service-building.png" 
            alt="Service Building Background" 
            className="w-full h-full object-cover object-left-bottom opacity-35 filter contrast-[1.02] saturate-[0.85]"
          />
        </div>
      </div>

      <div className="relative z-10 w-full px-8 lg:px-16 xl:px-24">
        {/* Main Content Layout - Using items-start and pt-16 to align text block near the top of the circular wheel */}
        <div className="grid lg:grid-cols-[38%_62%] xl:grid-cols-[35%_65%] gap-8 lg:gap-6 xl:gap-12 items-start">
          
          {/* Left Column: Heading and Info - Padded at the top on desktop to align beautifully with top service nodes */}
          <div className="flex flex-col items-start max-w-xl pt-0 lg:pt-16">
            {/* Tagline - Standardized with About/Projects spacing & animation */}
            <motion.div 
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="w-8 h-0.5 bg-primary"></div>
              <span className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
                WHAT WE DO
              </span>
            </motion.div>

            {/* Heading - Standardized uppercase format with brand highlight */}
            <motion.h2 
              className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-4 uppercase"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              OUR SERVICES<br />
              <span className="text-primary">ENGINEERED FOR IMPACT</span>
            </motion.h2>

            {/* Underline Decorative Accent Bar - Matching About Us component */}
            <motion.div 
              className="w-16 h-1 bg-primary mb-6"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ originX: 0 }}
            ></motion.div>

            {/* Description - Standardized styling and transition */}
            <motion.p 
              className="text-gray-600 text-base leading-relaxed mb-6 max-w-[460px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              We partner with forward-thinking organizations to design, build, and scale digital solutions that drive measurable business outcomes.
            </motion.p>

            {/* Core Capabilities Grid - Adding rich content */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 w-full max-w-[480px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {[
                { title: 'Government Transformation', desc: 'Compliant & secure e-governance systems.' },
                { title: 'Enterprise Modernization', desc: 'Scalable cloud architectural design.' },
                { title: 'Advanced AI Integration', desc: 'Intelligent automation & data systems.' },
                { title: 'Ironclad Compliance', desc: 'Strict security & regulatory frameworks.' }
              ].map((feat, idx) => (
                <div key={idx} className="flex gap-3 items-start group">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary mt-0.5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <ShieldCheck size={12} className="stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800 tracking-tight leading-normal group-hover:text-primary transition-colors duration-200">{feat.title}</h4>
                    <p className="text-[10px] text-gray-400 font-medium leading-relaxed mt-0.5">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Interactive CTA Link - Mapped to Brand Identity Colors & animations */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <a 
                href="#contact" 
                className="inline-flex items-center gap-4 group cursor-pointer"
              >
                <span className="text-sm font-bold tracking-wider text-primary uppercase transition-colors duration-300 group-hover:text-primary-light">
                  LET'S BUILD SOMETHING GREAT
                </span>
                <div className="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center transition-all duration-300 transform group-hover:translate-x-2 group-hover:bg-primary-light shadow-[0_4px_12px_rgba(2,29,110,0.25)]">
                  <ArrowRight size={18} />
                </div>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Premium Circular Diagram (Desktop Only) */}
          <div className="hidden lg:block relative w-full aspect-square sm:mt-10 max-w-[440px] xl:max-w-[550px] 2xl:max-w-[640px] mx-auto z-10">
            
            {/* SVG Background Layer */}
            <svg 
              viewBox="0 0 100 100" 
              className="absolute inset-0 w-full h-full select-none pointer-events-none z-0"
            >
              <defs>
                <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0033cc" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#021d6e" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#0033cc" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0033cc" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#021d6e" stopOpacity="0.3" />
                </linearGradient>
              </defs>

              {/* Main Circular Track */}
              <circle 
                cx="50" 
                cy="50" 
                r="38" 
                fill="none" 
                stroke="#e2e8f0" 
                strokeWidth="0.5" 
              />

              {/* Animated Floating Data Glow Dot */}
              <circle 
                cx="50" 
                cy="50" 
                r="38" 
                fill="none" 
                stroke="url(#glowGrad)" 
                strokeWidth="1.2" 
                className="animate-flow-path"
              />

              {/* Dotted Radial Connectors from Hub to Nodes */}
              {services.map((node) => {
                const innerPt = getCoordinates(node.angle, 19);
                const outerPt = getCoordinates(node.angle, 38);
                const isActive = hoveredNode === node.id;
                return (
                  <g key={`radial-${node.id}`}>
                    <line 
                      x1={innerPt.x} 
                      y1={innerPt.y} 
                      x2={outerPt.x} 
                      y2={outerPt.y} 
                      stroke={isActive ? '#0033cc' : '#cbd5e1'} 
                      strokeWidth={isActive ? '0.75' : '0.5'} 
                      strokeDasharray="1.5 2.5" 
                      className="transition-all duration-300"
                    />
                    {/* Small inner dot */}
                    <circle 
                      cx={innerPt.x} 
                      cy={innerPt.y} 
                      r={isActive ? '0.75' : '0.5'} 
                      fill={isActive ? '#0033cc' : '#94a3b8'} 
                      className="transition-all duration-300"
                    />
                    {/* Small outer dot */}
                    <circle 
                      cx={outerPt.x} 
                      cy={outerPt.y} 
                      r={isActive ? '0.75' : '0.5'} 
                      fill={isActive ? '#0033cc' : '#94a3b8'} 
                      className="transition-all duration-300"
                    />
                  </g>
                );
              })}

              {/* Decorative inner circular dashed rings */}
              <circle 
                cx="50" 
                cy="50" 
                r="22.5" 
                fill="none" 
                stroke="#eff6ff" 
                strokeWidth="0.5" 
              />
              <circle 
                cx="50" 
                cy="50" 
                r="20.5" 
                fill="none" 
                stroke="#0033cc" 
                strokeWidth="0.5" 
                strokeDasharray="1.5 3" 
                className="origin-center animate-spin-slow-reverse"
              />
              <circle 
                cx="50" 
                cy="50" 
                r="18.5" 
                fill="none" 
                stroke="#eff6ff" 
                strokeWidth="0.5" 
              />
            </svg>

            {/* Central White Circular Hub */}
            <div className="absolute top-[31%] left-[31%] w-[38%] h-[38%] bg-white rounded-full shadow-[0_15px_60px_rgba(2,29,110,0.07)] border border-slate-100 flex flex-col items-center justify-center p-4 text-center z-20 transition-all duration-300">
              {hoveredNode ? (() => {
                const activeService = services.find(s => s.id === hoveredNode);
                if (!activeService) return null;
                const ActiveIcon = activeService.icon;
                return (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center justify-center"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-2">
                      <ActiveIcon size={20} className="stroke-[2.2]" />
                    </div>
                    <span className="text-[9px] uppercase font-bold tracking-widest text-primary mb-0.5">
                      Service Focus
                    </span>
                    <h3 className="text-[11px] lg:text-xs font-extrabold text-slate-800 leading-tight mb-1 max-w-[150px]">
                      {activeService.title}
                    </h3>
                    <p className="text-[8px] text-slate-400 font-semibold leading-snug max-w-[130px] line-clamp-2">
                      {activeService.description}
                    </p>
                  </motion.div>
                );
              })() : (
                <>
                  {/* Specialized 3D Ribbon Logo */}
                  <svg className="w-12 h-12 mb-2 select-none" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="nGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0033cc" />
                        <stop offset="100%" stopColor="#021d6e" />
                      </linearGradient>
                      <linearGradient id="nGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#021d6e" />
                        <stop offset="100%" stopColor="#001a66" />
                      </linearGradient>
                    </defs>
                    {/* Left vertical ribbon */}
                    <path d="M17 12 h8 v40 h-8 Z" fill="url(#nGrad1)" rx="1.5" />
                    {/* Right vertical ribbon */}
                    <path d="M39 12 h8 v40 h-8 Z" fill="url(#nGrad1)" rx="1.5" />
                    {/* Diagonal connecting fold */}
                    <path d="M23.5 12 L43 42.5 h4.5 L28 12 Z" fill="url(#nGrad2)" />
                    <path d="M17.5 12 L39 42.5 h8 L26.5 12 Z" fill="url(#nGrad1)" />
                  </svg>
                  
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-0.5">
                    End-to-end
                  </span>
                  <h3 className="text-xs lg:text-sm font-extrabold text-slate-800 leading-tight mb-1 max-w-[140px]">
                    Digital Engineering
                  </h3>
                  <p className="text-[9px] text-slate-400 font-medium leading-normal max-w-[120px]">
                    Solutions that accelerate your business forward.
                  </p>
                </>
              )}
            </div>

            {/* Active Nodes & Labels mapping */}
            {services.map((node) => {
              const coords = getCoordinates(node.angle, 38);
              const isActive = hoveredNode === node.id;
              const Icon = node.icon;

              return (
                <div key={node.id}>
                  {/* Outer Node Button */}
                  <div
                    style={{ 
                      left: `${coords.x}%`, 
                      top: `${coords.y}%`, 
                      transform: 'translate(-50%, -50%)' 
                    }}
                    className={`absolute w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 z-30 ${
                      isActive 
                        ? 'bg-primary-light border-[3px] border-blue-100 shadow-[0_0_25px_rgba(0,51,204,0.4)] scale-110' 
                        : 'bg-white border border-slate-100 shadow-[0_6px_20px_rgba(2,29,110,0.04)] hover:border-primary-light hover:shadow-[0_0_15px_rgba(0,51,204,0.2)]'
                    }`}
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                  >
                    <Icon 
                      className={`w-5 h-5 lg:w-6 lg:h-6 transition-colors duration-300 ${
                        isActive ? 'text-white' : 'text-primary-light'
                      }`} 
                    />
                  </div>

                  {/* Node Label Text */}
                  <div
                    style={
                      node.textPosition === 'right' 
                        ? { 
                            left: `${coords.x + 8}%`, 
                            top: `${coords.y}%`, 
                            transform: 'translateY(-50%)' 
                          }
                        : node.textPosition === 'left'
                        ? { 
                            right: `${100 - coords.x + 8}%`, 
                            top: `${coords.y}%`, 
                            transform: 'translateY(-50%)' 
                          }
                        : {
                            left: '50%',
                            top: `${coords.y + 8.5}%`,
                            transform: 'translateX(-50%)'
                          }
                    }
                    className={`absolute w-[130px] xl:w-[190px] 2xl:w-[230px] flex flex-col pointer-events-none select-none transition-all duration-300 z-10 ${
                      node.textPosition === 'bottom' ? 'w-[220px] xl:w-[280px] 2xl:w-[320px]' : ''
                    } ${node.textAlign}`}
                  >
                    <h4 
                      className={`text-[10px] xl:text-xs 2xl:text-[13px] font-extrabold tracking-wide transition-colors duration-300 ${
                        isActive ? 'text-primary-light' : 'text-slate-800'
                      }`}
                    >
                      {node.title}
                    </h4>
                    <p 
                      className={`text-[8.5px] xl:text-[10px] 2xl:text-[11px] leading-relaxed transition-colors duration-300 mt-1 max-w-[280px] inline-block ${
                        isActive ? 'text-slate-700 font-semibold' : 'text-slate-400 font-medium'
                      }`}
                    >
                      {node.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Responsive Card Grid (Tablet/Mobile Only - hidden on lg and above) */}
          <div className="block lg:hidden w-full mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={item.id}
                    className="bg-white rounded-2xl border border-slate-100 p-6 shadow-[0_8px_30px_rgba(2,29,110,0.03)] hover:border-primary-light/30 hover:shadow-[0_15px_40px_rgba(2,29,110,0.07)] transition-all duration-300 flex flex-col"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      {/* Icon Circle */}
                      <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary-light flex-shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      
                      {/* Title */}
                      <h3 className="font-extrabold text-slate-800 text-sm leading-snug">
                        {item.title}
                      </h3>
                    </div>
                    
                    {/* Description */}
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Simple Minimalist Divider */}
        <div className="w-full h-[1px] bg-slate-100/90 my-10 lg:my-16 z-10 relative"></div>

        {/* Value Foundations Grid (No large header, simple & elegant) */}
        <div className="relative z-10 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              {
                icon: Cpu,
                title: "Modern Architecture",
                desc: "Clean, modular, and modular-engineered codebases designed with modern tech-stacks for maximum durability."
              },
              {
                icon: Zap,
                title: "Rapid Deployment",
                desc: "Highly-optimized CI/CD pipelines providing agile continuous integration and ultra-fast iterations."
              },
              {
                icon: ShieldCheck,
                title: "Ironclad Security",
                desc: "Built-in end-to-end encryption, strict compliance benchmarks, and defensive security-audited code."
              },
              {
                icon: HardDrive,
                title: "Cloud Native Scale",
                desc: "High-performance distributed systems optimized dynamically to scale to millions of concurrent sessions."
              }
            ].map((pillar, idx) => {
              const PillarIcon = pillar.icon;
              return (
                <motion.div 
                  key={idx}
                  className="flex flex-col items-start"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  {/* Subtle Brand Icon Circle */}
                  <div className="w-10 h-10 rounded-lg bg-primary/5 text-primary-light flex items-center justify-center mb-4 transition-colors duration-300 hover:bg-primary hover:text-white">
                    <PillarIcon size={20} className="stroke-[1.75]" />
                  </div>
                  
                  {/* Minimal Header */}
                  <h3 className="font-bold text-slate-800 text-sm mb-1.5 tracking-tight uppercase">
                    {pillar.title}
                  </h3>
                  
                  {/* Clean text description */}
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    {pillar.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
