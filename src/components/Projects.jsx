import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'FinEdge Analytics Platform',
      category: 'FINANCIAL TECHNOLOGY',
      description: 'A completely re-engineered financial analytics dashboard delivering real-time institutional trading insights. We transitioned a legacy monolithic application into a high-performance serverless architecture.',
      metrics: [
        'High-frequency data ingestion',
        '94% reduction in query latency',
        'Serverless AWS architecture'
      ],
      image: '/images/Projects/project_finedge.png',
    },
    {
      id: 2,
      title: 'HealthPlus Telemedicine',
      category: 'DIGITAL HEALTHCARE',
      description: 'An enterprise-grade, fully HIPAA-compliant mobile healthcare ecosystem. The platform connects thousands of patients with certified practitioners in real-time through encrypted peer-to-peer video streaming.',
      metrics: [
        'HIPAA & SOC2 Compliant',
        'Encrypted peer-to-peer WebRTC',
        'Sub-50ms video latency'
      ],
      image: '/images/Projects/project_healthplus.png',
    },
    {
      id: 3,
      title: 'Global Cloud Orchestration',
      category: 'ENTERPRISE INFRASTRUCTURE',
      description: 'A massive cross-region cloud infrastructure migration for a Fortune 500 logistics provider. We mapped and migrated their entire operational database to a multi-cloud Kubernetes environment.',
      metrics: [
        'Zero-downtime migration',
        'Multi-region Kubernetes deployment',
        '99.999% SLA availability'
      ],
      image: '/images/Projects/project_cloud.png',
    },
    {
      id: 4,
      title: 'Retail AI Insights Hub',
      category: 'ARTIFICIAL INTELLIGENCE',
      description: 'A cutting-edge data visualization and machine learning platform designed for global retail chains. The platform ingests real-time point-of-sale data and leverages predictive AI models to automatically optimize supply chains.',
      metrics: [
        'Real-time POS data synchronization',
        'Predictive inventory modeling',
        'Automated supply chain routing'
      ],
      image: '/images/Projects/project_retail.png',
    }
  ];

  return (
    <section id="work" className="py-12 lg:py-18 bg-white font-sans">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Premium Section Header */}
        <div className="text-center mb-16 lg:mb-20 max-w-3xl mx-auto">
          <motion.div
            className="flex items-center justify-center gap-2 mb-3"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-6 h-0.5 bg-primary"></div>
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">
              PORTFOLIO
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
            Featured <span className="text-primary">Case Studies</span>
          </motion.h2>

          <motion.p
            className="text-slate-500 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover how we help enterprise clients transform their operations, scale their infrastructure, and dominate their markets through advanced software engineering.
          </motion.p>
        </div>

        {/* Alternating Project Rows */}
        <div className="space-y-16 lg:space-y-20">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={project.id} 
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-14 ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Image Side */}
                <motion.div 
                  className="w-full lg:w-1/2"
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-50 aspect-video group">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Subtle overlay */}
                    <div className="absolute inset-0 ring-1 ring-inset ring-black/5 pointer-events-none rounded-2xl" />
                  </div>
                </motion.div>

                {/* Content Side */}
                <motion.div 
                  className="w-full lg:w-1/2 flex flex-col justify-center"
                  initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <span className="text-xs font-bold tracking-widest text-[#0033cc] uppercase mb-3 block">
                    {project.category}
                  </span>
                  
                  <h3 className="text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm lg:text-[15px] text-slate-600 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <ul className="space-y-2.5 mb-8">
                    {project.metrics.map((metric, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-[#0033cc] mt-0.5 flex-shrink-0" />
                        <span className="text-sm lg:text-[15px] font-medium text-slate-700">
                          {metric}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <div>
                    <a 
                      href="#contact" 
                      className="inline-flex items-center gap-2 text-sm lg:text-base font-bold text-slate-900 hover:text-[#0033cc] transition-colors group"
                    >
                      Read Full Case Study 
                      <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;
