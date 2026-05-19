import { ArrowRight, Shield, Clock, Scale, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const trustBadges = [
    { icon: Shield, label: 'Secure & Compliant' },
    { icon: Clock, label: 'On-Time Delivery' },
    { icon: Scale, label: 'Scalable Solutions' },
    { icon: Globe, label: 'Global Standards' },
  ];

  return (
    <>
      {/* Hero Section with Video Background */}
      <section id="home" className="relative pt-20 min-h-screen flex items-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
          >
            <source src="/videos/hero-section/hero-section.mp4" type="video/mp4" />
          </video>
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full px-8 lg:px-16 xl:px-24 py-16 lg:py-24">
          <div className="max-w-4xl">
            {/* Label */}
            <motion.div 
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="w-8 h-0.5 bg-white"></div>
              <span className="text-xs font-semibold tracking-widest text-gray-300 uppercase">
                Enterprise IT Solutions
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1 
              className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Engineering Digital Excellence.
              <br />
              <span className="">Delivering Next Gen</span>
              <br />
              Solutions.
            </motion.h1>

            {/* Description */}
            <motion.p 
              className="text-gray-200 text-base lg:text-lg max-w-2xl leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              The NexGen Tech delivers secure, scalable and innovative IT solutions for government and enterprise clients worldwide.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-wrap gap-4 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <motion.button 
                className="bg-white hover:bg-gray-100 text-primary px-8 py-3.5 rounded font-semibold flex items-center gap-2 transition-all duration-300 text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                EXPLORE SERVICES
                <ArrowRight size={16} />
              </motion.button>
              <motion.button 
                className="border-2 border-white/50 hover:border-white text-white hover:bg-white/10 px-8 py-3.5 rounded font-semibold transition-all duration-300 text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                ABOUT US
              </motion.button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div 
              className="flex flex-wrap gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              {trustBadges.map((badge, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 + (index * 0.1), ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <badge.icon size={16} className="text-white" />
                  </div>
                  <span className="text-xs font-medium text-gray-300">{badge.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By Section - White Background */}
      <motion.section 
        className="bg-white py-2 border-b border-gray-200 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-2 lg:gap-12">
            <motion.span 
              className="text-xs lg:text-sm font-bold text-gray-400 tracking-widest uppercase whitespace-nowrap text-center lg:text-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Trusted by organizations<br className="hidden lg:block" /> worldwide
            </motion.span>
            <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-5 sm:gap-6 lg:gap-8 xl:gap-10">
              {/* MDEC */}
              <img 
                src="/images/Hero/logo-mdec.png" 
                alt="MDEC" 
                className="h-5 sm:h-6 lg:h-6 xl:h-8 w-auto object-contain"
              />
              
              {/* Ministry of Education Malaysia */}
              <img 
                src="/images/Hero/logo-moe-malaysia.png" 
                alt="Ministry of Education Malaysia" 
                className="h-10 sm:h-12 lg:h-13 xl:h-16 w-auto object-contain"
              />
              
              {/* MyGovUC */}
              <img 
                src="/images/Hero/logo-mygovuc.png" 
                alt="MyGovUC" 
                className="h-9 sm:h-14 lg:h-16 xl:h-20 w-auto object-contain"
              />
              
              {/* MiAMPU */}
              <img 
                src="/images/Hero/logo-miampu.png" 
                alt="MiAMPU" 
                className="h-7 sm:h-8 lg:h-9 xl:h-11 w-auto object-contain"
              />
              
              {/* Cradle */}
              <motion.img 
                src="/images/Hero/logo-cradle.jpeg" 
                alt="Cradle" 
                className="h-16 sm:h-24 lg:h-13 xl:h-28 w-auto object-contain mix-blend-multiply"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              />
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Hero;
