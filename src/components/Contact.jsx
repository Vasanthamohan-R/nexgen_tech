import { useState } from 'react';
import { Mail, ChevronDown, CheckCircle2, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [charCount, setCharCount] = useState(0);


  const features = [
    { title: 'Quick Response', desc: 'Within 24 hours' },
    { title: 'Tailored Solutions', desc: 'Built for your needs' },
    { title: 'Secure & Confidential', desc: 'Your data is safe with us' },
  ];

  return (
    <section id="contact" className="relative overflow-hidden py-20 lg:py-28 px-6 sm:px-12 lg:px-16 xl:px-24">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/get-in-touch/get-in-touch.png"
          alt="Modern Office Building Background"
          className="w-full h-full object-cover object-center"
        />
        {/* Soft elegant gradient overlay using the theme light blue-gray color to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(235,242,252,0.99)] via-[rgba(235,242,252,0.96)] to-[rgba(235,242,252,0.88)]"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

        {/* Left Column */}
        <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-12 lg:space-y-16">
          <div className="space-y-8">

            {/* Header Category Tag */}
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="w-8 h-[2px] bg-primary"></div>
              <span className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">
                GET IN TOUCH
              </span>
            </motion.div>

            {/* Let's Discuss Your Project Header */}
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-[1.1]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Let's Discuss<br />
              <span className="text-primary">Your Project</span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              className="text-gray-600 text-base sm:text-lg max-w-xl leading-relaxed font-normal"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Ready to transform your digital presence? Our team is here to understand your goals and build something amazing together.
            </motion.p>

            {/* Features Row */}
            <motion.div
              className="flex flex-wrap gap-x-8 gap-y-4 pt-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 bg-[#ebf2fc] border border-primary/20 rounded-full flex items-center justify-center flex-shrink-0 shadow-[0_2px_4px_rgba(2,29,110,0.04)]">
                    <CheckCircle2 className="text-primary" size={13} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h5 className="text-[13px] font-bold text-gray-900 leading-none mb-0.5">{feature.title}</h5>
                    <p className="text-[11px] text-gray-500 font-medium leading-none">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Contact Details Column */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-gray-300/30 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="flex flex-col gap-1.5">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest leading-none">Email Us</span>
                <a href="mailto:info@nexgentech.com" className="text-gray-900 hover:text-[#1d6ef2] font-bold text-base transition-colors duration-200 leading-tight">
                  info@nexgentech.com
                </a>
                <a href="mailto:support@nexgentech.com" className="text-gray-500 hover:text-[#1d6ef2] font-semibold text-sm transition-colors duration-200 leading-tight">
                  support@nexgentech.com
                </a>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest leading-none">Call Us</span>
                <a href="tel:+919876543210" className="text-gray-900 hover:text-[#1d6ef2] font-bold text-base transition-colors duration-200 leading-tight">
                  +91 98765 43210
                </a>
                <a href="tel:+60312345678" className="text-gray-500 hover:text-[#1d6ef2] font-semibold text-sm transition-colors duration-200 leading-tight">
                  +60 3-1234 5678
                </a>
              </div>
            </motion.div>
          </div>

          {/* 3 Columns Section */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-gray-300/40"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="space-y-3">
              <h4 className="font-bold text-gray-900 text-sm tracking-wide">Customer Support</h4>
              <p className="text-[13px] text-gray-500 leading-relaxed font-normal">
                Our support team is available around the clock to address any concerns or queries you may have.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-gray-900 text-sm tracking-wide">Feedback and Suggestions</h4>
              <p className="text-[13px] text-gray-500 leading-relaxed font-normal">
                We value your feedback and are continuously working to improve NexGen Tech. Your input is crucial in shaping our future.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-gray-900 text-sm tracking-wide">Media Inquiries</h4>
              <p className="text-[13px] text-gray-500 leading-relaxed font-normal">
                For media-related questions or press inquiries, please contact us at{' '}
                <a href="mailto:media@nexgentech.com" className="text-gray-800 hover:text-[#1d6ef2] font-semibold transition-colors duration-200">
                  media@nexgentech.com
                </a>.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Column (Floating Form) */}
        <motion.div
          className="lg:col-span-6 w-full lg:sticky lg:top-24"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="w-full">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-[#ebf2fc] rounded-full flex items-center justify-center flex-shrink-0 shadow-[0_2px_8px_rgba(2,29,110,0.04)]">
                <Send className="text-[#021d6e]" size={20} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-[22px] font-bold text-[#021d6e] tracking-tight leading-tight">Send Us a Message</h3>
                <p className="text-gray-500 text-xs sm:text-sm mt-1 font-normal leading-relaxed">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>
            </div>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              {/* Full Name */}
              <div>
                <input
                  type="text"
                  placeholder="Full name"
                  required
                  className="w-full bg-white border border-gray-200/60 rounded-lg py-3.5 px-4 text-[14px] text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1d6ef2]/20 focus:border-[#1d6ef2] transition-all shadow-[0_2px_4px_rgba(0,0,0,0.01)]"
                />
              </div>

              {/* Your Email */}
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={17} />
                <input
                  type="email"
                  placeholder="Your email"
                  required
                  className="w-full bg-white border border-gray-200/60 rounded-lg py-3.5 pl-12 pr-4 text-[14px] text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1d6ef2]/20 focus:border-[#1d6ef2] transition-all shadow-[0_2px_4px_rgba(0,0,0,0.01)]"
                />
              </div>



              {/* Company Field */}
              <div>
                <input
                  type="text"
                  placeholder="Company"
                  className="w-full bg-white border border-gray-200/60 rounded-lg py-3.5 px-4 text-[14px] text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1d6ef2]/20 focus:border-[#1d6ef2] transition-all shadow-[0_2px_4px_rgba(0,0,0,0.01)]"
                />
              </div>

              {/* Service Interest Field */}
              <div className="relative">
                <select
                  required
                  defaultValue=""
                  className="w-full bg-white border border-gray-200/60 rounded-lg py-3.5 pl-4 pr-10 text-[14px] text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1d6ef2]/20 focus:border-[#1d6ef2] transition-all shadow-[0_2px_4px_rgba(0,0,0,0.01)] appearance-none cursor-pointer"
                >
                  <option value="" disabled hidden>Select a service</option>
                  <option value="web">Web Development</option>
                  <option value="mobile">Mobile Development</option>
                  <option value="cloud">Cloud Solutions</option>
                  <option value="government">Government Solutions</option>
                  <option value="erp">ERP & CRM</option>
                  <option value="other">Other Services</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={15} />
              </div>

              {/* How can we help? */}
              <div className="relative">
                <textarea
                  placeholder="How can we help?"
                  rows={4}
                  maxLength={100}
                  required
                  onChange={(e) => setCharCount(e.target.value.length)}
                  className="w-full bg-white border border-gray-200/60 rounded-lg py-3.5 px-4 text-[14px] text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1d6ef2]/20 focus:border-[#1d6ef2] transition-all shadow-[0_2px_4px_rgba(0,0,0,0.01)] resize-none pr-16"
                />
                <span className="absolute bottom-3.5 right-4 text-[10px] text-gray-400 font-bold tracking-wide">
                  {charCount}/100
                </span>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-[#001a66] active:scale-[0.985] text-white py-4 rounded-lg font-semibold transition-all duration-200 shadow-[0_8px_20px_rgba(2,29,110,0.15)] flex items-center justify-center text-sm tracking-wide uppercase"
                >
                  Send Message
                </button>
              </div>

              {/* Terms of Service & Privacy Policy */}
              <p className="text-center text-[11px] text-gray-400 font-medium leading-normal max-w-[280px] mx-auto">
                By contacting us, you agree to our{' '}
                <a href="#terms" className="text-gray-800 hover:text-[#1d6ef2] font-semibold hover:underline transition-colors duration-150">
                  Terms of service
                </a>{' '}
                and{' '}
                <a href="#privacy" className="text-gray-800 hover:text-[#1d6ef2] font-semibold hover:underline transition-colors duration-150">
                  Privacy Policy
                </a>.
              </p>
            </form>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
