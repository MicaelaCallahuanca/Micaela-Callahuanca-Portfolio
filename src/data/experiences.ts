import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    title: "Senior Data Engineer",
    company: "Tech Corp",
    period: "2020 - Present",
    achievements: [
      "Led team of 6 engineers building data platform serving 500+ data consumers",
      "Architected multi-cloud data mesh architecture across AWS and GCP",
      "Reduced data pipeline failures by 75% through improved monitoring and testing"
    ]
  },
  {
    title: "Data Engineer",
    company: "DataTech Solutions",
    period: "2018 - 2020",
    achievements: [
      "Built ETL pipelines processing 2TB+ daily from diverse sources",
      "Optimized Spark jobs reducing processing time from 6hrs to 45min",
      "Implemented CI/CD for data pipelines using GitLab and Airflow"
    ]
  },
  {
    title: "Junior Data Engineer",
    company: "Analytics Inc",
    period: "2016 - 2018",
    achievements: [
      "Developed automated reporting system serving 200+ stakeholders",
      "Created data models in Redshift supporting business analytics",
      "Maintained Python-based data ingestion framework"
    ]
  }
];
