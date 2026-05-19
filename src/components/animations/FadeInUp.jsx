import { motion } from 'framer-motion';

const FadeInUp = ({ children, delay = 0, duration = 0.6, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1] // Custom cubic-bezier for smooth enterprise feel
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInUp;
