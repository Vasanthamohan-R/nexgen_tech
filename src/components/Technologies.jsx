import React, { useState } from "react";
import {
  ArrowRight,
  Code,
  Database,
  Cloud,
  Shield,
  Cpu,
  Smartphone,
  Rocket,
  CheckCircle,
  Users,
  Check,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Technologies = () => {
  const [activeTab, setActiveTab] = useState(0);

  const techCategories = [
    {
      icon: Code,
      title: "Web Development",
      subtitle: "Modern web applications",
      technologies: [
        { name: "React", level: "95%", detail: "SPA & SSR Architecture" },
        { name: "Vue.js", level: "90%", detail: "Reactive UI Components" },
        {
          name: "Angular",
          level: "88%",
          detail: "Modular Enterprise Framework",
        },
        { name: "Node.js", level: "92%", detail: "High-Throughput Rest APIs" },
        { name: "Python", level: "85%", detail: "Backend Engines & Scripting" },
      ],
      description:
        "Modern frameworks and technologies for building scalable, high-performance web applications.",
      image: "/images/Technologies/undraw_focused-dev_gqoa.png",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      subtitle: "Cross-platform & native apps",
      technologies: [
        {
          name: "React Native",
          level: "94%",
          detail: "Hybrid iOS & Android Apps",
        },
        { name: "Flutter", level: "90%", detail: "High-Performance UI Engine" },
        {
          name: "iOS (Swift)",
          level: "88%",
          detail: "Native Apple Ecosystem Apps",
        },
        { name: "Android", level: "87%", detail: "Native Kotlin Engineering" },
        { name: "Kotlin", level: "89%", detail: "Modern Mobile Development" },
      ],
      description:
        "Responsive, user-friendly, and native mobile solutions tailored for iOS and Android devices.",
      image: "/images/Technologies/undraw_my-app_jscv.png",
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      subtitle: "DevOps & server infrastructure",
      technologies: [
        { name: "AWS", level: "95%", detail: "Serverless & EC2 Clusters" },
        { name: "Azure", level: "88%", detail: "Enterprise Cloud Systems" },
        {
          name: "Google Cloud",
          level: "86%",
          detail: "Big Data & Hosting Core",
        },
        {
          name: "Docker",
          level: "92%",
          detail: "Microservice Containerization",
        },
        {
          name: "Kubernetes",
          level: "90%",
          detail: "Orchestration & Auto-scaling",
        },
      ],
      description:
        "Enterprise cloud infrastructure management, automation, deployment, and resilient devops pipelines.",
      image: "/images/Technologies/undraw_cloudflare-dev_nf79.png",
    },
    {
      icon: Database,
      title: "Database Solutions",
      subtitle: "Robust data architecture",
      technologies: [
        {
          name: "PostgreSQL",
          level: "94%",
          detail: "Advanced Relational Store",
        },
        { name: "MySQL", level: "90%", detail: "High-Performance Relational" },
        { name: "MongoDB", level: "88%", detail: "Scalable Document Database" },
        { name: "Redis", level: "93%", detail: "In-Memory Cache & Queues" },
        { name: "Oracle", level: "82%", detail: "Heavy Enterprise Data Hubs" },
      ],
      description:
        "High-performance database administration, schema designs, caching solutions, and data analytics.",
      image: "/images/Technologies/undraw_device-sync_d9ei.png",
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Enterprise Grade",
      description: "Built for security, reliability and performance.",
    },
    {
      icon: Rocket,
      title: "Future Ready",
      description: "Scalable solutions using latest technologies.",
    },
    {
      icon: CheckCircle,
      title: "Best Practices",
      description: "Industry-standard approach for every project.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled professionals with deep domain expertise.",
    },
  ];

  const activeCategory = techCategories[activeTab];

  return (
    <section
      id="technologies"
      className="relative py-8 md:py-12 lg:py-16 overflow-hidden bg-white"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Left Glow */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl opacity-40"></div>
        {/* Bottom Right Glow */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl opacity-30"></div>
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #021d6e 1px, transparent 1px), linear-gradient(to bottom, #021d6e 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Lock Overall Container Max Width to match visual grid */}
      <div className="relative z-10 max-w-[1500px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24">
        {/* Centered Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            className="flex items-center justify-center gap-2 mb-3"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-6 h-0.5 bg-primary"></div>
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">
              OUR TECH STACK
            </span>
            <div className="w-6 h-0.5 bg-primary"></div>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Technologies <span className="text-primary">We Master</span>
          </motion.h2>

          <motion.p
            className="text-gray-500 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We leverage cutting-edge technologies and industry best practices to
            deliver robust, scalable, and future-proof solutions for our
            clients.
          </motion.p>
        </div>

        {/* Tab Container */}
        <div className="grid lg:grid-cols-[1fr_2.2fr] gap-8 lg:gap-10 xl:gap-12 items-start mb-10 lg:mb-14 xl:mb-20">
          {/* Vertical/Horizontal Tabs List */}
          <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 gap-4 lg:gap-5 scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] select-none snap-x snap-mandatory">
            {techCategories.map((category, index) => {
              const TabIcon = category.icon;
              const isActive = activeTab === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`group relative overflow-hidden flex items-center text-left p-3.5 sm:p-4 lg:p-5 transition-all duration-300 flex-shrink-0 lg:flex-shrink w-[220px] sm:w-[250px] md:w-[275px] lg:w-full snap-start border ${
                    isActive
                      ? "bg-primary border-transparent lg:border-r-0 rounded-2xl lg:rounded-l-[50px] lg:rounded-r-none text-white shadow-lg shadow-primary/15 lg:translate-x-2"
                      : "bg-white border-slate-100 lg:border-r-0 rounded-2xl lg:rounded-l-[50px] lg:rounded-r-none text-slate-800 hover:text-white hover:border-transparent hover:shadow-lg hover:shadow-primary/15 lg:hover:translate-x-2"
                  }`}
                >
                  {/* Sliding Hover-Fill Background Overlay */}
                  {!isActive && (
                    <div className="absolute inset-0 bg-primary z-0 transition-transform duration-500 ease-out origin-left scale-x-0 group-hover:scale-x-100 rounded-2xl lg:rounded-l-[50px] lg:rounded-r-none" />
                  )}

                  {/* Circular Icon Wrapper - layered on top using relative z-10 */}
                  <div
                    className={`relative z-10 w-11 h-11 lg:w-12 lg:h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isActive
                        ? "bg-white/20 text-white border border-white/30"
                        : "bg-primary/10 text-primary border border-transparent group-hover:bg-white/20 group-hover:text-white group-hover:border-white/30"
                    }`}
                  >
                    <TabIcon
                      size={20}
                      className={
                        isActive
                          ? "stroke-[2.5px]"
                          : "stroke-[2px] group-hover:stroke-[2.5px] transition-all duration-300"
                      }
                    />
                  </div>

                  {/* Tab Text - layered on top using relative z-10 */}
                  <div className="relative z-10 ml-4 overflow-hidden">
                    <h3
                      className={`font-bold text-xs lg:text-sm leading-tight transition-colors duration-300 ${
                        isActive
                          ? "text-white"
                          : "text-slate-850 group-hover:text-white"
                      }`}
                    >
                      {category.title}
                    </h3>
                    <p
                      className={`text-[10px] lg:text-xs mt-0.5 transition-colors duration-300 truncate ${
                        isActive
                          ? "text-blue-50/90 font-medium"
                          : "text-gray-400 font-medium group-hover:text-blue-50/90"
                      }`}
                    >
                      {category.subtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Dynamic Content Panel - Centered content with padding-left */}
          <div className="relative z-10 w-full min-h-0 lg:min-h-[420px] flex items-center lg:pl-4 xl:pl-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="w-full relative z-10"
              >
                {/* Dynamic grid column layouts based on tab indices (odd tabs put image in center, even tabs put image on right) */}
                <div
                  className={`grid gap-6 lg:gap-8 items-center ${
                    activeTab % 2 === 0
                      ? "lg:grid-cols-[1fr_1.35fr]"
                      : "lg:grid-cols-[1.35fr_1fr]"
                  }`}
                >
                  {/* Illustration Section */}
                  <div
                    className={`order-2 ${
                      activeTab % 2 === 0 ? "lg:order-1" : "lg:order-2"
                    } flex justify-center`}
                  >
                    <div className="relative w-full max-w-[180px] sm:max-w-[220px] md:max-w-[240px] lg:max-w-[320px] xl:max-w-[380px] lg:aspect-square flex items-center justify-center mt-6 lg:mt-0">
                      {/* Background decorative pulsing circles */}
                      <div className="absolute inset-0 bg-blue-50/50 rounded-full blur-2xl animate-pulse" />

                      <motion.img
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                        src={activeCategory.image}
                        alt={activeCategory.title}
                        className="relative z-10 w-full h-auto max-h-[140px] sm:max-h-[180px] lg:max-h-[260px] object-contain select-none"
                      />
                    </div>
                  </div>

                  {/* Text Section */}
                  <div
                    className={`order-1 ${activeTab % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}
                  >
                    {/* Header category badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full mb-5 border border-primary/20">
                      <activeCategory.icon size={14} className="stroke-[2.5]" />
                      <span className="text-[10px] font-bold tracking-widest uppercase">
                        CATEGORY {String(activeTab + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight leading-snug">
                      {activeCategory.title}
                    </h3>

                    {/* Limit line length to max-w-460px for elegant look */}
                    <p className="text-gray-500 font-medium text-xs md:text-sm leading-relaxed mb-6 max-w-[460px]">
                      {activeCategory.description}
                    </p>

                    {/* Technologies 2-column checklist grid - locked to max-w-440px */}
                    <div className="grid grid-cols-2 gap-2 xl:gap-3 max-w-[440px] mb-6">
                      {activeCategory.technologies.map((tech, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.05, duration: 0.3 }}
                          className="relative overflow-hidden flex flex-col p-2.5 xl:p-3 bg-white border border-slate-100 shadow-[0_4px_20px_rgba(2,29,110,0.02)] rounded-2xl hover:border-primary/30 hover:shadow-[0_10px_30px_rgba(2,29,110,0.05)] transition-all duration-300 group"
                        >
                          {/* Header row: Tech Name, Check Circle and Level Badge */}
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-1.5 md:gap-2">
                              {/* Check icon */}
                              <div className="w-4.5 h-4.5 xl:w-5 xl:h-5 rounded-full bg-primary/5 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                                <Check size={9} className="stroke-[3.5]" />
                              </div>
                              <span className="text-[10.5px] xl:text-[11px] 2xl:text-xs font-extrabold text-slate-800 tracking-tight group-hover:text-primary transition-colors duration-300">
                                {tech.name}
                              </span>
                            </div>

                            {/* Expertise Percentage Badge */}
                            <span className="text-[8px] xl:text-[9px] font-bold px-1.5 py-0.5 bg-slate-50 text-slate-500 rounded-full group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300">
                              {tech.level}
                            </span>
                          </div>

                          {/* Description details of the specific tech focus */}
                          <p className="text-[9px] xl:text-[10px] text-gray-400 font-medium leading-tight mb-2 truncate">
                            {tech.detail}
                          </p>

                          {/* Visual Progress Bar showing mastery depth */}
                          <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden relative">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: tech.level }}
                              transition={{
                                delay: 0.15 + idx * 0.05,
                                duration: 0.8,
                                ease: "easeOut",
                              }}
                              className="h-full bg-primary rounded-full"
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Call to action */}
                    <motion.a
                      href="#services"
                      className="inline-flex items-center gap-2 text-primary text-xs md:text-sm font-bold hover:gap-3 transition-all duration-300"
                      whileHover={{ x: 2 }}
                    >
                      Explore related services
                      <ArrowRight size={14} className="stroke-[2.5]" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Features Row */}
        <motion.div
          className="bg-white rounded-3xl border border-slate-100 p-5 md:p-6 lg:p-8 xl:p-10 shadow-[0_8px_30px_rgba(2,29,110,0.02)]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-y-10 lg:gap-8 lg:divide-x lg:divide-slate-100">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 ${
                  index > 0
                    ? index % 2 !== 0
                      ? "md:pl-6 lg:pl-8"
                      : "lg:pl-8"
                    : ""
                }`}
              >
                <div className="w-11 h-11 bg-primary/5 rounded-2xl flex items-center justify-center text-primary flex-shrink-0">
                  <feature.icon size={20} className="stroke-[2px]" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-xs md:text-sm mb-0.5 uppercase tracking-wide">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 font-medium text-[11px] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
