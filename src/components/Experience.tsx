import { motion } from 'framer-motion';

function Experience() {
  const experiences = [
    {
      title: "Lorem Ipsum is simply ",
      company: "Lorem Ipsum",
      period: "Lorem Ipsum",
      achievements: [
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum"
      ]
    },
    {
      title: "Lorem Ipsum",
      company: "Lorem Ipsum",
      period: "Lorem Ipsum",
      achievements: [
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum"
      ]
    },
    {
      title: "Lorem Ipsum",
      company: "Lorem Ipsum",
      period: "Lorem Ipsum",
      achievements: [
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#793EAB]/5 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#793EAB] to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  achievements: string[];
  delay: number;
}

function ExperienceCard({ title, company, period, achievements, delay }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ x: 10 }}
      className="bg-white/5 backdrop-blur-sm border border-[#793EAB]/20 rounded-2xl p-8 hover:bg-white/10 hover:border-[#793EAB]/40 hover:shadow-2xl hover:shadow-[#793EAB]/20 transition-all"
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-xl text-[#793EAB] font-semibold">{company}</p>
        </div>
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: delay + 0.2 }}
          className="px-4 py-2 bg-[#793EAB]/20 border border-[#793EAB]/30 text-white rounded-lg font-medium inline-block"
        >
          {period}
        </motion.span>
      </div>

      <ul className="space-y-3">
        {achievements.map((achievement, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: delay + 0.1 + index * 0.1 }}
            className="text-gray-300 flex items-start gap-3"
          >
            <div className="w-2 h-2 bg-[#793EAB] rounded-full mt-2 flex-shrink-0"></div>
            <span className="flex-1">{achievement}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export default Experience;
