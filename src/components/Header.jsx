import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'HOME', href: '#home', id: 'home' },
    { name: 'ABOUT US', href: '#about', id: 'about' },
    { name: 'SERVICES', href: '#services', id: 'services' },
    { name: 'TECHNOLOGIES', href: '#technologies', id: 'technologies' },
    { name: 'OUR WORK', href: '#work', id: 'work' },
    { name: 'TESTIMONIALS', href: '#testimonials', id: 'testimonials' },
    // { name: 'CONTACT US', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    navigate(href);
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="w-full px-6 lg:px-8 xl:px-16">
        <div className="flex items-center justify-between h-20 gap-4 xl:gap-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/images/The-NexGen-Tech.png" 
              alt="The NexGen Tech" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-xs lg:text-sm font-bold tracking-wide transition-colors duration-300 cursor-pointer whitespace-nowrap ${
                  activeSection === item.id
                    ? 'text-primary border-b-2 border-primary pb-1'
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block flex-shrink-0">
            <button className="bg-primary hover:bg-primary-light text-white text-xs font-semibold px-5 py-2.5 rounded flex items-center gap-2 transition-all duration-300 whitespace-nowrap">
              GET IN TOUCH
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-primary p-2 relative z-50"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation with Slide-in Drawer from the Right */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Dark Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm lg:hidden"
            />

            {/* Slide-in Drawer Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-[280px] bg-white shadow-2xl p-6 flex flex-col lg:hidden border-l border-slate-100"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-6">
                <img 
                  src="/images/The-NexGen-Tech.png" 
                  alt="The NexGen Tech" 
                  className="h-8 w-auto"
                />
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-600 hover:text-primary p-1.5 rounded-full hover:bg-slate-100 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-5">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`text-sm font-bold tracking-wide transition-all duration-300 py-2 border-b border-slate-50/60 hover:pl-2 cursor-pointer ${
                      activeSection === item.id 
                        ? 'text-primary border-primary pl-2' 
                        : 'text-gray-600 hover:text-primary'
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>

              {/* Drawer Footer CTA */}
              <div className="mt-auto pt-6">
                <button 
                  onClick={() => {
                    setIsMenuOpen(false);
                    const target = document.getElementById('contact');
                    if (target) {
                      const headerOffset = 80;
                      const elementPosition = target.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className="w-full bg-primary hover:bg-primary-light text-white text-xs font-semibold px-5 py-3 rounded flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_4px_12px_rgba(2,29,110,0.15)]"
                >
                  GET IN TOUCH
                  <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
