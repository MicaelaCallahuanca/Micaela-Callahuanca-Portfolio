import { Database } from 'lucide-react';
import { motion } from 'framer-motion';

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-[#793EAB]/20"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-[#793EAB] to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-[#793EAB]/50">
              <Database className="w-6 h-6 text-white" />
            </div>
            <span className="text-white font-bold text-xl">MC</span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <motion.a
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      href={href}
      className="text-gray-300 hover:text-white transition-colors relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#793EAB] to-purple-600 transition-all group-hover:w-full"></span>
    </motion.a>
  );
}

export default Navbar;
