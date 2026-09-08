"use client";

import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Understudy",
    category: "Applied AI / Agent Systems",
    description:
      "Enterprise AI-agent autonomy control plane where an LLM shadows human operators on shipment exceptions and earns action-specific autonomy through measured performance. A deterministic controller promotes or demotes actions across SHADOW → SUGGEST → AUTO with guardrails, tool permissions, and auditable state transitions.",
    tech: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Kafka / Redpanda",
      "Docker",
      "LLM Tool Calling",
    ],
    highlights: [
      "1,000-case evaluation workflow",
      "Per-action autonomy",
      "Kill switch + audit trail",
    ],
    github: "https://github.com/praveerbn12/understudy",
    demo: "",
    badge: "Flagship Project",
    featured: true,
  },

  {
    title: "Hotel Review System",
    category: "Backend / Distributed Systems",
    description:
      "Production-style Spring Boot microservices platform built around independently deployable User, Hotel, and Rating services. Uses API Gateway, Eureka service discovery, Feign communication, RS256 JWT authentication, role-based authorization, validation, centralized exception handling, and separate persistence layers.",
    tech: [
      "Java 17",
      "Spring Boot",
      "Spring Cloud",
      "API Gateway",
      "Eureka",
      "Feign",
      "JWT",
      "MySQL",
    ],
    highlights: [
      "Microservices architecture",
      "Service discovery + API Gateway",
      "RBAC + RS256 JWT security",
    ],
    github:
      "https://github.com/praveerbn12/hotel-review-system-microservices",
    demo: "",
    badge: "Flagship Project",
    featured: true,
  },

  {
    title: "ProAg Producer Analytics",
    category: "Data Engineering / Decision Intelligence",
    description:
      "End-to-end producer analytics system that reconciles fragmented accounting, operational, packer, and hedging data into production-cycle P&L, anomaly detection, and advisor-facing insights. Deterministic analytics performs financial calculations while AI converts detected issues into privacy-guarded plain-English explanations.",
    tech: [
      "Python",
      "Pandas",
      "SQLite",
      "SQLAlchemy",
      "Streamlit",
      "Anomaly Detection",
    ],
    highlights: [
      "18 production cycles",
      "$5.76M revenue analyzed",
      "Runner-Up · Track 2",
    ],
    github: "https://github.com/praveerbn12/proag_track2",
    demo: "",
    badge: "Competition Runner-Up",
  },

  {
    title: "EveryWear",
    category: "Full-Stack / Product",
    description:
      "Peer-to-peer clothing rental marketplace for students with product discovery, rental workflows, booking states, wallet-related flows, and a deployed full-stack product experience.",
    tech: [
      "Next.js",
      "React",
      "Supabase",
      "JavaScript",
      "Tailwind CSS",
      "Vercel",
    ],
    highlights: [
      "Peer-to-peer marketplace",
      "End-to-end rental workflow",
      "Production deployment",
    ],
    github: "https://github.com/praveerbn12/everywear",
    demo: "https://everywear-psi.vercel.app",
    badge: "Best in Show · Audience Favorite",
  },

  {
    title: "Medelite Facility Snapshot",
    category: "Data Product / API Integration",
    description:
      "Healthcare facility intelligence workflow that converts a CMS Certification Number into a decision-ready facility snapshot by combining CMS API data, operational inputs, hospitalization and emergency-department metrics, and automated report generation.",
    tech: [
      "Python",
      "CMS API",
      "Data Processing",
      "PDF Generation",
      "Render",
    ],
    highlights: [
      "External CMS integration",
      "Automated facility reporting",
      "Decision-ready output",
    ],
    github: "https://github.com/praveerbn12/medelite-facility-snapshot",
    demo: "",
  },

  {
    title: "NYC Yellow Taxi Analytics",
    category: "Data Engineering / BI",
    description:
      "End-to-end analytics warehouse built from NYC Yellow Taxi data using Snowflake ELT, dimensional modeling, SQL transformations, star-schema design, and Tableau dashboards for analytical exploration.",
    tech: [
      "Snowflake",
      "SQL",
      "Tableau",
      "Star Schema",
      "ELT",
      "Data Modeling",
    ],
    highlights: [
      "End-to-end warehouse",
      "Dimensional modeling",
      "Analytics dashboards",
    ],
    github: "https://github.com/praveerbn12/nyc-yellow-taxi-analytics",
    demo: "",
  },

  {
    title: "Employment Management System",
    category: "Backend API / Django",
    description:
      "Employee management backend built with Django REST Framework and MySQL, featuring JWT-based authentication, RESTful employee operations, Swagger/OpenAPI documentation, validation, optimized database access, and automated backend testing.",
    tech: [
      "Python",
      "Django",
      "Django REST Framework",
      "MySQL",
      "JWT",
      "Pytest",
      "Swagger / OpenAPI",
    ],
    highlights: [
      "JWT authentication",
      "Documented REST APIs",
      "Automated backend testing",
    ],
    github:
      "https://github.com/praveerbn12/employment-management-system",
    demo: "",
  },
];

const moreProjects = [
  {
    name: "Weather Alert Notifier",
    href: "https://github.com/praveerbn12/weather-alert-notifier",
  },
  {
    name: "InfluxDB Smart Home Sensor Network",
    href: "https://github.com/praveerbn12/influxdb-smart-home-sensor-network",
  },
  {
    name: "F1 Pit Stop Prediction",
    href: "https://github.com/praveerbn12/F1-AML-project",
  },
  {
    name: "F1 Tableau Dashboard",
    href: "https://github.com/praveerbn12/f1-tableau-dashboard",
  },
];

const skills = [
  {
    icon: "{}",
    title: "Languages",
    items: "Java, Python, C, C++, SQL, JavaScript",
  },
  {
    icon: "BE",
    title: "Backend & Distributed Systems",
    items:
      "Spring Boot, Spring Cloud, FastAPI, Django REST Framework, REST APIs, Microservices, Eureka, Feign",
  },
  {
    icon: "AI",
    title: "AI & Agent Systems",
    items:
      "Agentic AI, LLM Tool Calling, Agent Evaluation, Tool Permissions, Guardrails, Human-in-the-Loop Workflows",
  },
  {
    icon: "EV",
    title: "Data & Messaging",
    items:
      "Kafka / Redpanda, Pandas, Snowflake, ETL / ELT, Dimensional Modeling, Event-Driven Systems",
  },
  {
    icon: "DB",
    title: "Databases & Caching",
    items: "PostgreSQL, MySQL, SQLite, Redis, InfluxDB, SQL",
  },
  {
    icon: "☁",
    title: "Cloud & DevOps",
    items: "AWS, GCP, Docker, Git, GitHub, Vercel",
  },
];

function ButtonLink({ href, children, variant = "primary", target }) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition duration-200";

  const styles =
    variant === "primary"
      ? "bg-sky-600 text-white shadow-sm hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-md"
      : "border border-sky-200 bg-white text-sky-700 hover:-translate-y-0.5 hover:border-sky-300 hover:bg-sky-50";

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

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">
          {eyebrow}
        </p>
      )}

      <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 leading-7 text-slate-600">{description}</p>
      )}
    </div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.4,
        delay: Math.min(index * 0.04, 0.2),
      }}
      className={project.featured ? "md:col-span-2" : ""}
    >
      <div
        className={`flex h-full flex-col rounded-2xl border bg-white p-6 transition duration-200 hover:-translate-y-1 hover:shadow-xl md:p-7 ${
          project.featured
            ? "border-sky-300 shadow-xl shadow-sky-100/80"
            : "border-sky-100 shadow-lg shadow-sky-100/60 hover:border-sky-300"
        }`}
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-sky-600">
            {project.category}
          </p>

          {project.badge && (
            <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
              {project.badge}
            </span>
          )}
        </div>

        <h3
          className={`mt-3 font-bold tracking-tight text-slate-950 ${
            project.featured ? "text-3xl" : "text-2xl"
          }`}
        >
          {project.title}
        </h3>

        <p className="mt-4 flex-1 leading-7 text-slate-600">
          {project.description}
        </p>

        {project.highlights?.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {project.highlights.map((item) => (
              <span
                key={item}
                className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700"
              >
                {item}
              </span>
            ))}
          </div>
        )}

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
          <ButtonLink
            href={project.github}
            variant="secondary"
            target="_blank"
          >
            GitHub ↗
          </ButtonLink>

          {project.demo && (
            <ButtonLink href={project.demo} target="_blank">
              Live Demo ↗
            </ButtonLink>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function ExperienceProject({ title, dates, bullets }) {
  return (
    <div className="rounded-2xl border border-sky-100 bg-sky-50 p-5">
      <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
        <h4 className="font-bold text-slate-950">{title}</h4>

        <span className="text-sm text-slate-500">{dates}</span>
      </div>

      <ul className="mt-3 space-y-2 text-slate-600">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3 leading-7">
            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-sky-50 text-slate-900">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-sky-100/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-bold tracking-tight text-slate-950">
            PNB
          </a>

          <div className="flex items-center gap-4 text-sm font-medium text-slate-600">
            <a
              className="hidden hover:text-sky-700 sm:inline"
              href="#about"
            >
              About
            </a>

            <a
              className="hidden hover:text-sky-700 sm:inline"
              href="#experience"
            >
              Experience
            </a>

            <a className="hover:text-sky-700" href="#projects">
              Projects
            </a>

            <a
              className="hidden hover:text-sky-700 sm:inline"
              href="#skills"
            >
              Skills
            </a>

            <a
              className="text-sky-700 hover:text-sky-800"
              href="/resume-software.pdf"
              target="_blank"
              rel="noreferrer"
            >
              SWE Resume ↗
            </a>

            <a
              className="hidden text-sky-700 hover:text-sky-800 md:inline"
              href="/resume-data.pdf"
              target="_blank"
              rel="noreferrer"
            >
              DE Resume ↗
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="top"
        className="relative mx-auto flex min-h-[calc(100vh-65px)] max-w-6xl flex-col justify-center overflow-hidden px-6 py-20"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.24),_transparent_34%),radial-gradient(circle_at_bottom_left,_rgba(14,165,233,0.16),_transparent_34%)]" />

        <div className="pointer-events-none absolute right-8 top-16 -z-10 h-40 w-40 rounded-full border border-sky-200 opacity-70" />

        <div className="pointer-events-none absolute bottom-20 left-8 -z-10 h-28 w-28 rotate-45 border border-sky-200 opacity-70" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">
            Software Engineer · Backend Systems · Applied AI · Data Engineering
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-slate-950 md:text-7xl">
            Praveer Nagaraja Byndoor
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-700 md:text-2xl md:leading-9">
            I build reliable backend, distributed, data-intensive, and applied AI
            systems that solve real operational problems.
          </p>

          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
            Software Engineer with 2+ years of professional experience. MS in
            Information Systems at Syracuse University · Graduating Dec 2026 ·
            Open to full-time opportunities.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="#projects">View Projects</ButtonLink>

            <ButtonLink
              href="/resume-software.pdf"
              variant="secondary"
              target="_blank"
            >
              Software Engineering Resume ↗
            </ButtonLink>

            <ButtonLink
              href="/resume-data.pdf"
              variant="secondary"
              target="_blank"
            >
              Data Engineering Resume ↗
            </ButtonLink>

            <ButtonLink
              href="https://github.com/praveerbn12"
              variant="secondary"
              target="_blank"
            >
              GitHub ↗
            </ButtonLink>

            <ButtonLink
              href="https://www.linkedin.com/in/praveerbn"
              variant="secondary"
              target="_blank"
            >
              LinkedIn ↗
            </ButtonLink>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
            <span>Syracuse, NY</span>

            <a
              href="mailto:pbyndoor@syr.edu"
              className="hover:text-sky-700"
            >
              pbyndoor@syr.edu
            </a>
          </div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="border-t border-sky-100 bg-white px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="About"
            title="Engineering across software, data, and AI."
          />

          <div className="mt-7 max-w-4xl space-y-5 text-lg leading-8 text-slate-600">
            <p>
              I&apos;m a software engineer with 2+ years of professional
              experience building backend systems with Java, Spring Boot,
              PostgreSQL, GCP, Redis, REST APIs, and event-driven integrations.
              At Coditas, I worked on production systems supporting thousands of
              daily orders and financial data pipelines processing 50K+ records
              per day.
            </p>

            <p>
              I&apos;m currently completing my MS in Information Systems at
              Syracuse University and expanding into applied AI and data-intensive
              systems — building projects around AI agents, tool calling,
              event-driven architecture, evaluation, distributed systems, and
              production reliability.
            </p>

            <p className="font-medium text-slate-800">
              I enjoy engineering systems where software, data, and AI meet real
              operational problems.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="border-t border-sky-100 bg-sky-50 px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Experience"
            title="Production engineering, not just portfolio code."
            description="Backend and platform work across e-commerce, healthcare reporting, and internal enterprise systems."
          />

          <div className="mt-8 rounded-2xl border border-sky-100 bg-white p-6 shadow-lg shadow-sky-100/70 md:p-8">
            <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-2xl font-bold text-slate-950">
                  Software Engineer
                </h3>

                <p className="mt-1 text-slate-600">
                  Coditas Solutions LLP · Pune, India
                </p>
              </div>

              <p className="text-sm font-medium text-slate-500">
                Aug 2022 — Dec 2024
              </p>
            </div>

            <div className="mt-7 grid gap-5">
              <ExperienceProject
                title="EshopBox — E-commerce Platform"
                dates="Jan 2024 — Dec 2024"
                bullets={[
                  "Built and scaled Spring Boot backend services supporting 5K–10K orders per day across e-commerce integrations.",
                  "Developed event-driven financial reconciliation workflows processing 50K+ records per day with GCP Pub/Sub and Cloud Scheduler.",
                  "Improved reliability with idempotency, Spring Retry, Resilience4j circuit breakers, and database concurrency controls.",
                ]}
              />

              <ExperienceProject
                title="Ambry — Healthcare Reporting Platform"
                dates="Jun 2022 — Jun 2023"
                bullets={[
                  "Built REST APIs serving 1K+ users across healthcare reporting workflows.",
                  "Improved response latency by ~20% and reduced report-generation time by 35% through PostgreSQL optimization, indexing, Redis caching, batch fetching, and JPA tuning.",
                ]}
              />

              <ExperienceProject
                title="OneView — Internal L&D Platform"
                dates="Jun 2023 — Dec 2023"
                bullets={[
                  "Built scheduling integrations with Google Calendar API, OAuth 2.0, and webhooks.",
                  "Implemented stateless JWT authentication and resilient third-party API handling using Spring Retry and Resilience4j.",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="border-t border-sky-100 bg-white px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Selected Work"
            title="Projects built around real engineering problems."
            description="A focused set spanning AI-agent infrastructure, backend systems, data engineering, API integration, and product development."
          />

          <div className="mt-9 grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-sky-100 bg-sky-50 p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="font-bold text-slate-950">
                  More engineering projects
                </h3>

                <p className="mt-1 text-sm text-slate-600">
                  Additional cloud, time-series, machine learning, and analytics
                  work is available on GitHub.
                </p>
              </div>

              <ButtonLink
                href="https://github.com/praveerbn12?tab=repositories"
                variant="secondary"
                target="_blank"
              >
                View All Repositories ↗
              </ButtonLink>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {moreProjects.map((project) => (
                <a
                  key={project.name}
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-sky-200 bg-white px-3 py-1.5 text-xs font-medium text-sky-700 transition hover:border-sky-300 hover:bg-sky-100"
                >
                  {project.name} ↗
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="border-t border-sky-100 bg-sky-50 px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Skills"
            title="A systems-focused toolkit."
            description="Technologies I use across backend engineering, distributed systems, data platforms, and applied AI."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="rounded-2xl border border-sky-100 bg-white p-6 shadow-lg shadow-sky-100/60"
              >
                <div className="mb-3 flex items-center gap-3 text-sky-600">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-xs font-bold text-sky-700">
                    {skill.icon}
                  </span>

                  <h3 className="font-semibold text-slate-950">
                    {skill.title}
                  </h3>
                </div>

                <p className="leading-7 text-slate-600">{skill.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section
        id="education"
        className="border-t border-sky-100 bg-white px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Education" title="Syracuse University" />

          <div className="mt-6 rounded-2xl border border-sky-100 bg-sky-50 p-6 md:flex md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-950">
                Master of Science in Information Systems
              </h3>

              <p className="mt-2 text-slate-600">
                Syracuse University · Syracuse, NY
              </p>
            </div>

            <p className="mt-4 font-medium text-slate-600 md:mt-0">
              Expected Dec 2026
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="border-t border-sky-100 bg-slate-950 px-6 py-20"
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
            Let&apos;s Connect
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Open to full-time opportunities.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
            I&apos;m currently seeking full-time roles across software
            engineering, backend systems, applied AI / forward-deployed
            engineering, and data engineering. Available starting December 2026.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <ButtonLink href="mailto:pbyndoor@syr.edu">
              Email Me
            </ButtonLink>

            <ButtonLink
              href="/resume-software.pdf"
              variant="secondary"
              target="_blank"
            >
              SWE Resume ↗
            </ButtonLink>

            <ButtonLink
              href="/resume-data.pdf"
              variant="secondary"
              target="_blank"
            >
              DE Resume ↗
            </ButtonLink>

            <ButtonLink
              href="https://www.linkedin.com/in/praveerbn"
              variant="secondary"
              target="_blank"
            >
              LinkedIn ↗
            </ButtonLink>

            <ButtonLink
              href="https://github.com/praveerbn12"
              variant="secondary"
              target="_blank"
            >
              GitHub ↗
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}