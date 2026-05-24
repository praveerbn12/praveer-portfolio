"use client";

import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "EveryWear",
    category: "Full-Stack / Product",
    description:
      "Peer-to-peer clothing rental marketplace for students, built with Next.js, Supabase, Tailwind CSS, and Vercel.",
    tech: ["Next.js", "React", "Supabase", "Tailwind", "Vercel"],
    github: "https://github.com/praveerbn12/everywear",
    demo: "https://everywear-psi.vercel.app",
  },
  {
    title: "Hotel Review System Microservices",
    category: "Backend / Microservices",
    description:
      "Java Spring Boot microservices system with UserService, HotelService, RatingService, and Eureka Service Registry.",
    tech: ["Java", "Spring Boot", "Microservices", "Eureka", "REST APIs"],
    github: "https://github.com/praveerbn12/hotel-review-system-microservices",
    demo: "",
  },
  {
    title: "Employment Management System",
    category: "Backend API",
    description:
      "Employee management REST API with Django REST Framework, JWT authentication, Swagger docs, optimized queries, and tests.",
    tech: ["Python", "Django", "DRF", "JWT", "Swagger", "Pytest"],
    github: "https://github.com/praveerbn12/employment-management-system",
    demo: "",
  },
  {
    title: "Weather Alert Notifier",
    category: "Cloud / Serverless",
    description:
      "AWS serverless weather alert system using Lambda, EventBridge, DynamoDB, SNS, API Gateway, and S3.",
    tech: ["AWS", "Lambda", "EventBridge", "DynamoDB", "SNS", "S3"],
    github: "https://github.com/praveerbn12/weather-alert-notifier",
    demo: "http://weather-alert-ist615.s3-website-us-east-1.amazonaws.com/",
  },
  {
    title: "NYC Yellow Taxi Analytics",
    category: "Data Engineering / BI",
    description:
      "End-to-end NYC Yellow Taxi analytics warehouse using Snowflake ELT, star schema modeling, and Tableau dashboards.",
    tech: ["Snowflake", "SQL", "Tableau", "Star Schema", "ELT"],
    github: "https://github.com/praveerbn12/nyc-yellow-taxi-analytics",
    demo: "",
  },
  {
    title: "InfluxDB Smart Home Sensor Network",
    category: "Database / Time-Series",
    description:
      "Smart home time-series sensor network using InfluxDB, Python, Docker, Grafana, and Flux queries.",
    tech: ["InfluxDB", "Python", "Docker", "Grafana", "Flux"],
    github: "https://github.com/praveerbn12/influxdb-smart-home-sensor-network",
    demo: "",
  },
  {
    title: "F1 Pit Stop Prediction",
    category: "Machine Learning",
    description:
      "Machine learning project predicting Formula 1 first pit-stop lap using race, driver, constructor, and circuit features.",
    tech: ["Python", "Scikit-learn", "CatBoost", "Pandas", "ML"],
    github: "https://github.com/praveerbn12/F1-AML-project",
    demo: "",
  },
  {
    title: "F1 Tableau Dashboard",
    category: "Data Visualization",
    description:
      "Interactive Tableau dashboards analyzing Formula 1 driver, constructor, race, and circuit performance.",
    tech: ["Tableau", "Analytics", "Dashboards", "BI"],
    github: "https://github.com/praveerbn12/f1-tableau-dashboard",
    demo: "https://public.tableau.com/app/profile/praveer.byndoor/vizzes",
  },
];

const skills = [
  {
    icon: "</>",
    title: "Backend Engineering",
    items: "Java, Spring Boot, Django REST Framework, REST APIs, Microservices",
  },
  {
    icon: "DB",
    title: "Databases & Data",
    items: "PostgreSQL, MySQL, SQLite, Snowflake, InfluxDB, SQL",
  },
  {
    icon: "☁",
    title: "Cloud & DevOps",
    items: "AWS, GCP, Docker, Git, GitHub, Vercel",
  },
  {
    icon: "BI",
    title: "Analytics & BI",
    items: "Python, Pandas, Tableau, Streamlit, Grafana, Machine Learning",
  },
];

function ButtonLink({ href, children, variant = "primary", target }) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-5 py-4 text-sm font-semibold transition shadow-sm";
  const styles =
    variant === "primary"
      ? "bg-sky-600 text-white hover:bg-sky-700"
      : "border border-sky-200 bg-white text-sky-700 hover:bg-sky-100";

  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noreferrer" : undefined}
      className={`${base} ${styles}`}
    >
      {children}
    </a>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
    >
      <div className="flex h-full flex-col rounded-2xl border border-sky-100 bg-white p-6 shadow-lg shadow-sky-100/70 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-sky-600">
          {project.category}
        </p>
        <h3 className="mt-2 text-xl font-bold text-slate-950">
          {project.title}
        </h3>
        <div className="mt-2 h-1 w-16 rounded-full bg-sky-200" />
        <p className="mt-3 flex-1 leading-7 text-slate-600">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs text-sky-700"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink href={project.github} variant="secondary" target="_blank">
            GitHub
          </ButtonLink>
          {project.demo && (
            <ButtonLink href={project.demo} target="_blank">
              Demo
            </ButtonLink>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-sky-50 text-slate-900">
      <section className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center overflow-hidden px-6 py-20">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.22),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(14,165,233,0.18),_transparent_35%)]" />
        <div className="pointer-events-none absolute right-8 top-16 -z-10 h-40 w-40 rounded-full border border-sky-200 opacity-70" />
        <div className="pointer-events-none absolute bottom-20 left-8 -z-10 h-28 w-28 rotate-45 border border-sky-200 opacity-70" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
            Software Engineer · Backend · Cloud · Data
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-slate-950 md:text-7xl">
            Praveer Nagaraja Byndoor
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-700">
            Software Engineer building backend systems, cloud applications, and
            data analytics platforms.
          </p>

          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            MS Information Systems student at Syracuse University with 2 years
            of software engineering experience and hands-on projects in Java,
            Spring Boot, Python, AWS, Snowflake, Tableau, and full-stack
            development.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="#projects">Projects</ButtonLink>
            <ButtonLink href="#skills">Skills</ButtonLink>
            <ButtonLink href="#experience">Experience</ButtonLink>
            <ButtonLink href="/resume-software.pdf" target="_blank">
            SWE Resume
            </ButtonLink>

            <ButtonLink href="/resume-data.pdf" target="_blank">
            Data Resume
            </ButtonLink>
          </div>

          <div className="mt-8 flex gap-5 text-sky-700">
            <a
              href="https://github.com/praveerbn12"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-950"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/praveerbn"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-950"
            >
              LinkedIn
            </a>
            <a href="mailto:pbyndoor@syr.edu" className="hover:text-slate-950">
              Email
            </a>
          </div>
        </motion.div>
      </section>

      <section id="about" className="border-t border-sky-100 bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-slate-950">About</h2>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">
            I am a Software Engineer and MS Information Systems student at
            Syracuse University. My work focuses on backend APIs, microservices,
            cloud systems, data pipelines, and analytics dashboards. I enjoy
            building practical systems that connect engineering with real
            business problems.
          </p>
        </div>
      </section>

      <section id="skills" className="border-t border-sky-100 bg-sky-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-slate-950">Skills</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="rounded-2xl border border-sky-100 bg-white p-6 shadow-lg shadow-sky-100/70"
              >
                <div className="mb-3 flex items-center gap-3 text-sky-600">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                    {skill.icon}
                  </span>
                  <h3 className="font-semibold text-slate-950">
                    {skill.title}
                  </h3>
                </div>
                <p className="text-slate-600">{skill.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="border-t border-sky-100 bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-slate-950">
            Featured Projects
          </h2>
          <p className="mt-3 text-slate-600">
            Backend, cloud, data engineering, analytics, and full-stack
            projects.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="border-t border-sky-100 bg-sky-50 px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-slate-950">Experience</h2>

          <div className="mt-8 rounded-2xl border border-sky-100 bg-white p-6 shadow-lg shadow-sky-100/70 md:p-8">
            <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-950">
                  Software Engineer
                </h3>
                <p className="text-slate-600">
                  Coditas Solutions LLP · Pune, India
                </p>
              </div>
              <p className="text-sm font-medium text-slate-500">
                Aug 2022 — Dec 2024
              </p>
            </div>

            <p className="mt-5 leading-7 text-slate-600">
              Built backend systems across e-commerce, healthcare reporting, and
              internal L&D platforms using Java, Spring Boot, PostgreSQL, GCP,
              Redis, JWT, and event-driven integrations.
            </p>

            <div className="mt-6 grid gap-5">
              <div className="rounded-2xl border border-sky-100 bg-sky-50 p-5">
                <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                  <h4 className="font-bold text-slate-950">
                    EshopBox — E-commerce Platform
                  </h4>
                  <span className="text-sm text-slate-500">
                    Jan 2024 — Dec 2024
                  </span>
                </div>
                <p className="mt-3 leading-7 text-slate-600">
                  Designed and scaled Spring Boot backend services handling
                  5k–10k orders/day, built event-driven financial reconciliation
                  pipelines processing 50k+ records/day with GCP Pub/Sub and
                  Cloud Scheduler, and improved reliability using idempotency,
                  Resilience4j, and Spring Retry.
                </p>
              </div>

              <div className="rounded-2xl border border-sky-100 bg-sky-50 p-5">
                <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                  <h4 className="font-bold text-slate-950">
                    Ambry — Healthcare Reporting Platform
                  </h4>
                  <span className="text-sm text-slate-500">
                    Jun 2022 — Jun 2023
                  </span>
                </div>
                <p className="mt-3 leading-7 text-slate-600">
                  Deployed REST APIs serving 1k+ users, improved response
                  latency by ~20%, reduced report generation time by 35% using
                  PostgreSQL optimization, Redis caching, indexing, batch
                  fetching, and EXPLAIN-based query analysis.
                </p>
              </div>

              <div className="rounded-2xl border border-sky-100 bg-sky-50 p-5">
                <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                  <h4 className="font-bold text-slate-950">
                    OneView — Internal L&D Platform
                  </h4>
                  <span className="text-sm text-slate-500">
                    Jun 2023 — Dec 2023
                  </span>
                </div>
                <p className="mt-3 leading-7 text-slate-600">
                  Owned a scheduling system integrating Spring Boot with Google
                  Calendar API using OAuth 2.0 and webhooks, implemented
                  stateless JWT authentication, and added fault-tolerant
                  third-party API handling using Spring Retry and Resilience4j.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-sky-100 bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold text-slate-950">Let’s Connect</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            I’m currently looking for Software Engineer, Data Engineer, Data
            Analyst, and related internship/co-op opportunities.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <ButtonLink href="mailto:pbyndoor@syr.edu">Email Me</ButtonLink>
            <ButtonLink
              href="https://www.linkedin.com/in/praveerbn"
              target="_blank"
            >
              LinkedIn
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}