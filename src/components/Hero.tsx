import { Database, Mail, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-[#793EAB]/10 via-transparent to-purple-900/10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-[#793EAB] to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-[#793EAB]/50"
          >
            <Database className="w-16 h-16 text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-6xl md:text-7xl font-bold text-white mb-6"
          >
            Senior Data Engineer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            Building scalable data infrastructure & pipelines that process billions of events daily
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#793EAB] to-purple-600 text-white rounded-xl font-semibold shadow-lg shadow-[#793EAB]/50 hover:shadow-xl hover:shadow-[#793EAB]/60 transition-all"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="flex items-center gap-2 px-8 py-4 bg-white/5 text-white border border-[#793EAB]/30 rounded-xl font-semibold hover:bg-white/10 hover:border-[#793EAB]/50 transition-all"
            >
              View Work
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center gap-6 mt-12"
          >
            <SocialLink href="https://github.com" icon={<Github className="w-6 h-6" />} />
            <SocialLink href="https://linkedin.com" icon={<Linkedin className="w-6 h-6" />} />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#793EAB] to-transparent"></div>
    </section>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <motion.a
      whileHover={{ scale: 1.2, y: -3 }}
      whileTap={{ scale: 0.9 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 bg-white/5 border border-[#793EAB]/30 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 hover:border-[#793EAB]/50 transition-all"
    >
      {icon}
    </motion.a>
  );
}

export default Hero;
