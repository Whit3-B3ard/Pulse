import { motion } from 'framer-motion';

const SmoothHoverEffect = ({ children }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)' }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default SmoothHoverEffect;
