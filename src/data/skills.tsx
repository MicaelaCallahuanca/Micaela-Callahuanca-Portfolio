import { Database, Cloud, Code2, Server, Workflow, BarChart3 } from 'lucide-react';
import { Skill } from '../types';

export const skills: Skill[] = [
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
