import { GitBranch, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

function Projects() {
  const projects = [
    {
      title: "Real-Time Analytics Platform",
      description: "Built a real-time data processing system using Kafka, Flink, and ClickHouse handling 5M events/sec with sub-second latency for business intelligence dashboards.",
      technologies: ["Apache Kafka", "Flink", "ClickHouse", "Kubernetes"],
      metrics: ["5M events/sec", "99.99% uptime", "300ms p95 latency"],
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "#"
    },
    {
      title: "Enterprise Data Lake Migration",
      description: "Led migration of legacy data warehouse to cloud-native data lake architecture on AWS, reducing infrastructure costs by 60% and improving query performance by 10x.",
      technologies: ["AWS S3", "Glue", "Athena", "Redshift Spectrum"],
      metrics: ["60% cost reduction", "10x faster queries", "50TB migrated"],
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "#"
    },
    {
      title: "ML Feature Store",
      description: "Designed and implemented a centralized feature store enabling data scientists to discover, share, and serve ML features with consistent definitions across 20+ models.",
      technologies: ["Feast", "Snowflake", "Redis", "Python"],
      metrics: ["20+ models", "95% reusability", "2hr to production"],
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "#"
    },
    {
      title: "Data Quality Framework",
      description: "Created automated data quality monitoring system with custom validators, alerting, and self-healing capabilities, reducing data incidents by 85%.",
      technologies: ["Great Expectations", "Airflow", "dbt", "Slack API"],
      metrics: ["85% fewer incidents", "100+ checks", "Auto-remediation"],
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
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
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#793EAB] to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  metrics: string[];
  image: string;
  link: string;
  delay: number;
}

function ProjectCard({ title, description, technologies, metrics, image, link, delay }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-white/5 backdrop-blur-sm border border-[#793EAB]/20 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-[#793EAB]/40 hover:shadow-2xl hover:shadow-[#793EAB]/20 transition-all"
    >
      <motion.div
        className="relative h-48 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: delay + 0.1 }}
      >
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0118] via-[#0a0118]/50 to-transparent"></div>
      </motion.div>

      <div className="p-8">
        <div className="flex items-start gap-3 mb-4">
          <motion.div
            whileHover={{ rotate: 90 }}
            transition={{ duration: 0.3 }}
            className="p-2 bg-gradient-to-br from-[#793EAB] to-purple-600 rounded-lg shadow-lg shadow-[#793EAB]/50 flex-shrink-0"
          >
            <GitBranch className="w-5 h-5 text-white" />
          </motion.div>
          <h3 className="text-2xl font-semibold text-white leading-tight">{title}</h3>
        </div>

        <p className="text-gray-300 leading-relaxed mb-6">{description}</p>

        <div className="h-px bg-gradient-to-r from-transparent via-[#793EAB]/30 to-transparent mb-6"></div>

        <div className="mb-6">
          <h4 className="text-xs font-semibold text-[#793EAB] uppercase tracking-wider mb-3">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: delay + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-3 py-1.5 bg-[#793EAB]/20 text-white border border-[#793EAB]/30 rounded-lg text-sm font-medium"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-[#793EAB]/30 to-transparent mb-6"></div>

        <div className="mb-6">
          <h4 className="text-xs font-semibold text-[#793EAB] uppercase tracking-wider mb-3">Key Metrics</h4>
          <div className="flex flex-col gap-2">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: delay + 0.1 + index * 0.05 }}
                className="flex items-center gap-2 text-sm text-gray-300 font-medium"
              >
                <span className="text-[#793EAB]">✓</span>
                {metric}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.a
          href={link}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-gradient-to-r from-[#793EAB] to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#793EAB]/50 transition-all group"
        >
          <span>View Project</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.a>
      </div>
    </motion.div>
  );
}

export default Projects;
