import { Database, Cloud, Code2, Server, Workflow, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

function Skills() {
  const skills = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Warehousing",
      items: ["Snowflake", "BigQuery", "Redshift", "Databricks"]
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Data Pipeline",
      items: ["Apache Airflow", "dbt", "Apache Spark", "Kafka"]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Platforms",
      items: ["AWS", "GCP", "Azure", "Terraform"]
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Programming",
      items: ["Python", "SQL", "Scala", "Java"]
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Big Data",
      items: ["Hadoop", "Spark", "Flink", "Presto"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data Quality",
      items: ["Great Expectations", "Monte Carlo", "dbt tests"]
    }
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#793EAB] to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
  delay: number;
}

function SkillCard({ icon, title, items, delay }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-white/5 backdrop-blur-sm border border-[#793EAB]/20 rounded-2xl p-8 hover:bg-white/10 hover:border-[#793EAB]/40 hover:shadow-2xl hover:shadow-[#793EAB]/20 transition-all"
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
        className="w-16 h-16 bg-gradient-to-br from-[#793EAB] to-purple-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-[#793EAB]/50"
      >
        <div className="text-white">{icon}</div>
      </motion.div>

      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>

      <ul className="space-y-2">
        {items.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: delay + 0.1 + index * 0.05 }}
            className="text-gray-300 flex items-center gap-2"
          >
            <div className="w-1.5 h-1.5 bg-[#793EAB] rounded-full"></div>
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export default Skills;
