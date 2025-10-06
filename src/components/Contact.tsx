import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#793EAB] to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#793EAB]/20 via-purple-900/20 to-[#793EAB]/20 border border-[#793EAB]/30 rounded-3xl p-12 text-center backdrop-blur-sm shadow-2xl shadow-[#793EAB]/20"
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Let's Build Something Together
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              I'm always interested in discussing data engineering challenges and opportunities.
              Feel free to reach out if you'd like to collaborate or just chat about data.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <ContactInfo
                icon={<Mail className="w-5 h-5" />}
                label="Email"
                value="micaelacallahuanca77@gmail.com"
                href="mailto:micaelacallahuanca77@gmail.com"
              />
              <ContactInfo
                icon={<Phone className="w-5 h-5" />}
                label="Phone"
                value="+54 9 1111111111"
                href="tel:+54 9"
              />
              <ContactInfo
                icon={<MapPin className="w-5 h-5" />}
                label="Location"
                value="Buenos Aires, AR"
              />
              <ContactInfo
                icon={<Github className="w-5 h-5" />}
                label="GitHub"
                value="github.com/MicaelaCallahuanca"
                href="https://github.com/MicaelaCallahuanca"
              />
            </div>

            <div className="flex justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:micaelacallahuanca77@gmail.com"
                className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#793EAB] to-purple-600 text-white rounded-xl font-semibold shadow-lg shadow-[#793EAB]/50 hover:shadow-xl hover:shadow-[#793EAB]/60 transition-all"
              >
                <Mail className="w-5 h-5" />
                Send Email
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/micaelacallahuanca/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 bg-white/10 text-white border border-[#793EAB]/30 rounded-xl font-semibold hover:bg-white/20 hover:border-[#793EAB]/50 transition-all"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      <footer className="container mx-auto px-6 mt-20 pb-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-t border-[#793EAB]/20 pt-8"
        >
          <p className="text-gray-400">
            © 2025 Micaela Callahuanca Portfolio.
          </p>
        </motion.div>
      </footer>
    </section>
  );
}

interface ContactInfoProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

function ContactInfo({ icon, label, value, href }: ContactInfoProps) {
  const content = (
    <>
      <div className="flex items-center justify-center gap-2 mb-1">
        <div className="text-[#793EAB]">{icon}</div>
        <span className="text-sm font-semibold text-[#793EAB] uppercase">{label}</span>
      </div>
      <p className="text-white font-medium">{value}</p>
    </>
  );

  if (href) {
    return (
      <motion.a
        whileHover={{ scale: 1.05, y: -2 }}
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className="bg-white/5 border border-[#793EAB]/20 rounded-xl p-4 hover:bg-white/10 hover:border-[#793EAB]/40 transition-all"
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      className="bg-white/5 border border-[#793EAB]/20 rounded-xl p-4"
    >
      {content}
    </motion.div>
  );
}

export default Contact;
