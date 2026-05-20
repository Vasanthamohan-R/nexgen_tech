import { useState, useEffect, useRef } from 'react';
import { ArrowRight, ArrowDown, Calendar, Briefcase, Users, Star, ShieldCheck, Target, Eye, Gem } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const AnimatedCounter = ({ value, duration = 1.5 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const numericPart = parseInt(value.replace(/[^0-9]/g, ''), 10) || 0;
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (isInView) {
      let startTime = null;
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * numericPart));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, numericPart, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const About = () => {
  const stats = [
    { icon: Calendar, number: '10+', label: 'Years Experience' },
    { icon: Briefcase, number: '200+', label: 'Projects Delivered' },
    { icon: Users, number: '50+', label: 'Team Members' },
    { icon: Star, number: '100%', label: 'Client Satisfaction' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To deliver innovative and reliable IT solutions that empower government and enterprise clients to achieve their digital transformation goals.',
      image: '/images/About/globe.png',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the leading technology partner in the region, recognized for excellence, innovation, and customer-centric solutions.',
      image: '/images/About/mountain.png',
    },
    {
      icon: Gem,
      title: 'Our Values',
      description: 'Integrity, innovation, collaboration, and commitment to excellence drive everything we do for our clients.',
      image: '/images/About/cube.png',
    },
    {
      icon: Users,
      title: 'Our Team',
      description: 'A dedicated team of experts passionate about technology and committed to delivering exceptional results.',
      image: '/images/About/people.png',
    },
  ];

  return (
    <section 
      id="about" 
      className="py-12 lg:py-18 relative overflow-hidden"
      style={{
        background: '#F0F4FD'
      }}
    >
      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(2, 29, 110, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(2, 29, 110, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
      
      <div className="w-full px-8 lg:px-16 xl:px-24 relative z-10">
        {/* Hero Section with Two Columns */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <motion.div 
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="w-8 h-0.5 bg-primary"></div>
              <span className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
                About Us
              </span>
            </motion.div>
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Building Digital Excellence<br />
              Since <span className="text-primary">2014</span>
            </motion.h2>
            <motion.div 
              className="w-16 h-1 bg-primary mb-6"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ originX: 0 }}
            ></motion.div>
            <motion.p 
              className="text-gray-600 leading-relaxed mb-8 max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              The NexGen Tech is a leading IT solutions provider specializing in government 
              and enterprise digital transformation. With over a decade of experience, we 
              have successfully delivered innovative solutions that drive efficiency, 
              security, and growth for our clients across Malaysia and beyond.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <motion.button 
                className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded font-semibold flex items-center gap-2 transition-all text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                GET IN TOUCH
                <ArrowRight size={16} />
              </motion.button>
              <motion.button 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded font-semibold flex items-center gap-2 transition-all text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                DOWNLOAD PROFILE
                <ArrowDown size={16} />
              </motion.button>
            </motion.div>
          </div>

          {/* Right Image with Badge - No rounded corners */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <img
              src="/images/About/glass-building.png"
              alt="Modern Office Building"
              className="w-full h-auto relative z-10 rounded-3xl"
            />
            {/* Left gradient overlay to blend with background */}
            <div 
              className="absolute inset-y-0 left-0 w-32 z-20 pointer-events-none rounded-l-3xl"
              style={{
                background: 'linear-gradient(to right, #F0F4FD 0%, #F0F4FD 30%, transparent 100%)'
              }}
            />
            {/* Right gradient overlay to blend with background - more subtle */}
            <div 
              className="absolute inset-y-0 right-0 w-16 z-20 pointer-events-none rounded-r-3xl"
              style={{
                background: 'linear-gradient(to left, #F0F4FD 0%, transparent 100%)'
              }}
            />
            {/* Top gradient overlay to blend with background - more subtle */}
            <div 
              className="absolute inset-x-0 top-0 h-16 z-20 pointer-events-none rounded-t-3xl"
              style={{
                background: 'linear-gradient(to bottom, #F0F4FD 0%, transparent 100%)'
              }}
            />
            {/* Bottom gradient overlay to blend with background */}
            <div 
              className="absolute inset-x-0 bottom-0 h-24 z-20 pointer-events-none rounded-b-3xl"
              style={{
                background: 'linear-gradient(to top, #F0F4FD 0%, #F0F4FD 20%, transparent 100%)'
              }}
            />
            {/* Trusted Badge */}
            <motion.div 
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-20 w-[90%] max-w-[280px]"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="bg-white shadow-xl rounded-xl px-6 py-5 flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900 leading-tight">Trusted by Government Agencies & Enterprise Clients</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div 
          className="mt-10 rounded-lg shadow-[0_4px_25px_rgba(2,29,110,0.015)] border border-gray-100 p-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className={`flex items-center gap-4 ${index > 0 ? 'lg:border-l lg:border-gray-150 lg:pl-8' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.1), ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-primary shadow-[0_2px_8px_rgba(2,29,110,0.02)]">
                  <stat.icon size={22} className="stroke-[2]" />
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                    <AnimatedCounter value={stat.number} />
                  </div>
                  <div className="text-xs md:text-sm font-semibold text-gray-400">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Cards */}
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-lg p-8 border border-slate-100 shadow-[0_4px_25px_rgba(2,29,110,0.015)] hover:shadow-[0_15px_35px_rgba(2,29,110,0.06)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between min-h-[300px]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div>
                {/* Circular Icon badge container */}
                <div className="w-12 h-12 rounded-full bg-blue-50/60 border border-blue-100/50 flex items-center justify-center text-primary mb-6 shadow-[0_2px_10px_rgba(2,29,110,0.02)] transition-all duration-300 group-hover:scale-110">
                  <value.icon className="stroke-[2.5]" size={20} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-extrabold text-slate-900 mb-2 tracking-tight group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h3>

                {/* Short Blue Underline */}
                <div className="w-6 h-0.5 bg-primary mb-4 group-hover:w-10 transition-all duration-300"></div>

                {/* Paragraph Description */}
                <p className="text-gray-500 font-medium text-xs md:text-sm leading-relaxed mb-6 pr-4 relative z-10">
                  {value.description}
                </p>
              </div>

              {/* Bottom Row content */}
              <div className="flex items-center justify-between mt-auto">
                {/* Circular Arrow CTA */}
                <div className="w-12 h-12 rounded-full border border-slate-200/80 flex items-center justify-center text-slate-500 group-hover:bg-primary group-hover:text-white group-hover:border-primary group-hover:shadow-[0_4px_12px_rgba(2,29,110,0.2)] transition-all duration-300 cursor-pointer z-20">
                  <ArrowRight size={20} className="stroke-[3] transition-transform duration-300 group-hover:-rotate-45" />
                </div>

                {/* Corner Illustration image - floating translucent layer */}
                <img
                  src={value.image}
                  alt={value.title}
                  className="absolute -bottom-14 right-0 w-64 h-64  object-contain opacity-[0.9] group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 pointer-events-none select-none -z-5"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
