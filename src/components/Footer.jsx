import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter, Instagram, ArrowRight } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'Our Work', href: '#work' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const services = [
    { name: 'Web Development', href: '#web' },
    { name: 'Government Solutions', href: '#gov' },
    { name: 'API Integration', href: '#api' },
    { name: 'ERP & CRM', href: '#erp' },
    { name: 'Cloud Solutions', href: '#cloud' },
    { name: 'Maintenance & Support', href: '#support' },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0" 
        style={{ 
          backgroundImage: 'url(/images/footer/footer-bg.png)', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          filter: 'saturate(1.3) contrast(1.15)'
        }}
      ></div>
      
      {/* Subtle gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-blue-900/5 to-slate-900/15"></div>
      
      {/* Content */}
      <div className="relative w-full px-8 lg:px-16 xl:px-24 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="space-y-6 lg:col-span-1">
            <img 
              src="/images/The-NexGen-Tech.png" 
              alt="The NexGen Tech" 
              className="h-12 w-auto"
            />
            <p className="text-gray-700 text-sm leading-relaxed">
              We deliver innovative and reliable IT solutions for government and enterprise clients worldwide.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {[Linkedin, Facebook, Twitter, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#social"
                  className="w-10 h-10 bg-white/70 border border-gray-200/70 rounded-full flex items-center justify-center text-gray-600 hover:text-primary hover:border-primary hover:bg-white transition-all shadow-sm"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-bold text-primary mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-sm text-gray-700 hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base font-bold text-primary mb-6 tracking-wide">Services</h4>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href} 
                    className="text-sm text-gray-700 hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base font-bold text-primary mb-6 tracking-wide">Contact Info</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/15 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-primary" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 block mb-1">E-mail Us</span>
                  <a href="mailto:info@nexgentech.com" className="text-sm text-gray-700 hover:text-primary transition-colors font-medium">info@nexgentech.com</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/15 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-primary" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 block mb-1">Call Us</span>
                  <a href="tel:+919876543210" className="text-sm text-gray-700 hover:text-primary transition-colors font-medium">+91 98765 43210</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/15 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-primary" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 block mb-1">Our Location</span>
                  <span className="text-sm text-gray-700 font-medium">India</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Let's Work Together */}
          <div>
            <h4 className="text-base font-bold text-primary mb-6 tracking-wide">Let's Work Together</h4>
            <p className="text-sm text-gray-700 mb-6 leading-relaxed">
              Have a project in mind? Let's discuss how we can help you achieve your goals.
            </p>
            <button className="bg-gradient-to-r from-primary to-primary/80 text-white px-7 py-3.5 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center gap-2 text-sm">
              GET IN TOUCH
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-gray-200/70 bg-white/80 backdrop-blur-sm py-5">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} The NexGen Tech. All Rights Reserved.
            </p>
            <div className="flex gap-8">
              <a href="#privacy" className="text-xs text-gray-500 hover:text-primary transition-colors font-medium">
                Privacy Policy
              </a>
              <a href="#terms" className="text-xs text-gray-500 hover:text-primary transition-colors font-medium">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
