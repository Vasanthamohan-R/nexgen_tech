import { ArrowRight, Mail, Phone, MapPin, Clock, Send, CheckCircle2, Headphones, Rocket, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const features = [
    { icon: Clock, title: 'Quick Response', desc: 'Within 24 hours' },
    { icon: Rocket, title: 'Tailored Solutions', desc: 'Built for your needs' },
    { icon: Shield, title: 'Secure & Confidential', desc: 'Your data is safe with us' },
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@nexgentech.com', 'support@nexgentech.com'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 98765 43210', '+60 3-1234 5678'],
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Kuala Lumpur, Malaysia', 'Chennai, India'],
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon - Fri: 9AM - 6PM', 'Sat: 9AM - 1PM'],
    },
  ];

  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/images/get-in-touch/get-in-touch.png" 
          alt="Modern Office Building" 
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay for left side text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-16 xl:px-24 py-12 sm:py-16 lg:py-20">
        {/* Hero Section with Title and Floating Call Card */}
        <div className="relative mb-12">
          <div className="max-w-3xl">
            <motion.div 
              className="flex items-center gap-2 mb-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="w-6 h-0.5 bg-primary"></div>
              <span className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
                GET IN TOUCH
              </span>
            </motion.div>
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Let's Discuss<br />
              <span className="text-primary">Your Project</span>
            </motion.h2>
            <motion.p 
              className="text-gray-600 leading-relaxed max-w-xl mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Ready to transform your digital presence? Our team is here to understand your goals and build something amazing together.
            </motion.p>

            {/* Features */}
            <div className="flex flex-wrap gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="text-primary" size={18} />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{feature.title}</p>
                    <p className="text-xs text-gray-500">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Prefer to Call Card - Positioned Absolutely on Right */}
          <motion.div 
            className="hidden lg:block absolute top-0 right-0"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.div 
              className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 w-64"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <motion.div 
                  className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Phone className="text-white" size={18} />
                </motion.div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Prefer to talk?</p>
                  <p className="text-xs text-gray-500">Let's connect directly.</p>
                </div>
              </div>
              <p className="text-lg font-bold text-primary">+60 12-345 6789</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Contact Cards and Form Grid - Separate from the call card */}
        <div className="grid lg:grid-cols-12 gap-6 mb-8 items-start">
          {/* Left - Contact Info Cards */}
          <div className="lg:col-span-5 space-y-3">
            {contactInfo.map((info, index) => (
              <motion.div 
                key={index} 
                className="bg-white/80 backdrop-blur-sm rounded-xl p-4 flex items-center justify-between border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all cursor-pointer group"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ x: 4 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <info.icon className="text-primary" size={20} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-gray-900">{info.title}</h3>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-xs text-gray-500">{detail}</p>
                    ))}
                  </div>
                </div>
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight className="text-gray-400 group-hover:text-primary transition-colors" size={18} />
                </motion.div>
              </motion.div>
            ))}

            {/* Urgent Inquiry Card */}
            <motion.div 
              className="bg-primary rounded-xl p-5 text-white mt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -2 }}
            >
              <div className="flex items-start gap-3">
                <motion.div 
                  className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Headphones className="text-white" size={20} />
                </motion.div>
                <div>
                  <h3 className="text-sm font-semibold mb-1">Have an urgent inquiry?</h3>
                  <p className="text-xs text-white/80 mb-3">Our team is ready to help you right away.</p>
                  <motion.button 
                    className="bg-white text-primary px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 hover:bg-gray-100 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    LET'S TALK
                    <ArrowRight size={14} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right - Contact Form */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <motion.div 
                  className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Send className="text-primary" size={22} />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-primary">Send Us a Message</h3>
                  <p className="text-sm text-gray-500">Fill out the form below and we'll get back to you as soon as possible.</p>
                </div>
              </div>

              <form className="space-y-4 mt-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+60 12-345 6789"
                      className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Company</label>
                    <input
                      type="text"
                      placeholder="Your Company"
                      className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Service Interest <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors bg-white">
                    <option value="">Select a service</option>
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile Development</option>
                    <option value="cloud">Cloud Solutions</option>
                    <option value="government">Government Solutions</option>
                    <option value="erp">ERP & CRM</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Tell us about your project..."
                    className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Checkboxes */}
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-primary flex-shrink-0" />
                    <span className="text-xs text-gray-600">We understand your needs</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-primary flex-shrink-0" />
                    <span className="text-xs text-gray-600">We provide the best solution</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-primary flex-shrink-0" />
                    <span className="text-xs text-gray-600">Let's build something great</span>
                  </div>
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2 mt-2"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  SEND MESSAGE
                  <ArrowRight size={16} />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Mobile: Prefer to Call Card - shown below form on mobile */}
        <motion.div 
          className="lg:hidden mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="text-white" size={18} />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">Prefer to talk?</p>
                <p className="text-xs text-gray-500">Let's connect directly.</p>
              </div>
            </div>
            <p className="text-lg font-bold text-primary">+60 12-345 6789</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
