import { Database, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleMenu}
            className="md:hidden p-2 text-white hover:text-[#793EAB] transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-black/95 backdrop-blur-lg border-t border-[#793EAB]/20"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              <MobileNavLink href="#projects" onClick={closeMenu}>Projects</MobileNavLink>
              <MobileNavLink href="#skills" onClick={closeMenu}>Skills</MobileNavLink>
              <MobileNavLink href="#experience" onClick={closeMenu}>Experience</MobileNavLink>
              <MobileNavLink href="#contact" onClick={closeMenu}>Contact</MobileNavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <motion.a
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ x: 10, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href={href}
      onClick={onClick}
      className="text-gray-300 hover:text-white text-lg font-medium py-3 px-4 rounded-lg hover:bg-[#793EAB]/20 transition-all border-l-2 border-transparent hover:border-[#793EAB]"
    >
      {children}
    </motion.a>
  );
}

export default Navbar;
