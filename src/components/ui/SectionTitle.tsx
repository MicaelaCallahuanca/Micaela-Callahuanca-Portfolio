import { motion } from 'framer-motion';

interface SectionTitleProps {
  children: React.ReactNode;
}

function SectionTitle({ children }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        {children}
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-[#793EAB] to-purple-600 mx-auto"></div>
    </motion.div>
  );
}

export default SectionTitle;
