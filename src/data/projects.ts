import { Project } from '../types';

export const projects: Project[] = [
  {
    title: "Real-Time Analytics Platform",
    description: "Built a real-time data processing system using Kafka, Flink, and ClickHouse handling 5M events/sec with sub-second latency for business intelligence dashboards.",
    technologies: ["Apache Kafka", "Flink", "ClickHouse", "Kubernetes"],
    metrics: ["5M events/sec", "99.99% uptime", "300ms p95 latency"]
  },
  {
    title: "Enterprise Data Lake Migration",
    description: "Led migration of legacy data warehouse to cloud-native data lake architecture on AWS, reducing infrastructure costs by 60% and improving query performance by 10x.",
    technologies: ["AWS S3", "Glue", "Athena", "Redshift Spectrum"],
    metrics: ["60% cost reduction", "10x faster queries", "50TB migrated"]
  },
  {
    title: "ML Feature Store",
    description: "Designed and implemented a centralized feature store enabling data scientists to discover, share, and serve ML features with consistent definitions across 20+ models.",
    technologies: ["Feast", "Snowflake", "Redis", "Python"],
    metrics: ["20+ models", "95% reusability", "2hr to production"]
  },
  {
    title: "Data Quality Framework",
    description: "Created automated data quality monitoring system with custom validators, alerting, and self-healing capabilities, reducing data incidents by 85%.",
    technologies: ["Great Expectations", "Airflow", "dbt", "Slack API"],
    metrics: ["85% fewer incidents", "100+ checks", "Auto-remediation"]
  }
];
