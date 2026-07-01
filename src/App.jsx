import React, { useRef } from "react";
import { motion } from "framer-motion";
import "./index.css";

const stats = [
  { value: "3.5yrs", label: "Professional analytics experience" },
  { value: "10+", label: "Power BI dashboards & KPI frameworks shipped" },
  { value: "Daily", label: "AI-assisted development with Claude & LangChain" },
  { value: "C1/B1", label: "English fluent · German intermediate" },
];

const aboutBadges = [
  { emoji: "📊", label: "Business-first analytics" },
  { emoji: "🧩", label: "Stakeholder translation" },
  { emoji: "🤖", label: "AI-enabled workflows" },
  { emoji: "🔍", label: "Data quality by default" },
];

const toolkit = [
  {
    title: "BI & Visualization",
    level: "Professional",
    tags: ["Power BI", "DAX", "Power Query", "Tableau"],
  },
  {
    title: "SQL & Data Modeling",
    level: "Advanced",
    tags: ["PostgreSQL", "MySQL", "CTEs", "Window fns", "Optimization"],
  },
  {
    title: "Python & ML",
    level: "Advanced",
    tags: ["Pandas", "NumPy", "Scikit-learn", "FastAPI"],
  },
  {
    title: "AI & Automation",
    level: "Daily user",
    tags: ["Claude", "LangChain", "RAG", "n8n", "Power Automate"],
  },
  {
    title: "Data Engineering",
    level: "Working knowledge",
    tags: ["ETL", "Pipelines", "dbt", "Neo4j", "Git", "Docker"],
  },
];

const certified = [
  "Tableau Desktop Specialist",
  "Power BI Desktop",
  "Business Analyst with Excel",
  "Data Analytics",
];

const experiences = [
  {
    date: "May 2025 — May 2026",
    role: "Data Analyst",
    company: "Hangar901 Aircraft Maintenance GmbH",
    bullets: [
      "Built and maintained Power BI dashboards for operational KPIs, performance trends, and management reporting — used daily by operational and senior management teams.",
      "Built a Python recommendation model (TF-IDF + FastAPI) that reduced operational losses by 10–15% through data-driven decisioning.",
      "Automated a manual workflow with Power Automate, saving 1–2 hours daily.",
      "Implemented proactive data-quality and integrity processes, and used Claude and AI tools daily to accelerate reliable analytical development.",
    ],
  },
  {
    date: "Apr 2024 — Apr 2025",
    role: "Working Student — AI",
    company: "SEEBURGER AG",
    bullets: [
      "Supported data pipeline development and BI reporting using Python and SQL.",
      "Contributed to AI tooling with LangChain and locally-hosted LLaMA models, supporting adoption of AI-assisted analytics across teams.",
      "Worked with Neo4j knowledge graphs, supporting senior engineers on graph-based data modeling and analysis.",
      "Assisted with data modeling and data-warehouse integration for scalable business reporting.",
    ],
  },
  {
    date: "Jan 2021 — Oct 2021",
    role: "Data Processing Analyst",
    company: "Ugam Solutions · Market Research",
    bullets: [
      "Developed SQL queries and Python scripts for data processing, transformation, and business reporting.",
      "Created structured analytical reports and summaries for client stakeholders.",
      "Recognized for quality of deliverables by the team.",
    ],
  },
  {
    date: "Oct 2021 — Dec 2021",
    role: "Market Research Analyst Intern",
    company: "Coldmail",
    bullets: [
      "Analyzed market and consumer data to support business strategy and decision-making.",
    ],
  },
];

const projects = [
  {
    tag: "ML · PYTHON",
    metric: "10–15% ↓",
    title: "Employees recommendation model",
    description:
      "A TF-IDF recommendation engine served through FastAPI, driving data-informed operational decisions and cutting operational losses by 10–15%.",
    stack: ["TF-IDF", "FastAPI", "Scikit-learn"],
  },
  {
    tag: "BI · POWER BI",
    metric: "Daily use",
    title: "Operational KPI dashboards",
    description:
      "End-to-end Power BI dashboards and KPI frameworks — Power Query models, DAX measures, and automated refreshes — relied on daily by operational and management teams.",
    stack: ["Power BI", "DAX", "SQL"],
  },
  {
    tag: "AI · LANGCHAIN",
    metric: "RAG",
    title: "AI-assisted analytics workflows",
    description:
      "RAG systems and agentic automations built with LangChain, the Claude API, and n8n — accelerating analytical development and supporting AI adoption across teams.",
    stack: ["LangChain", "Claude API", "n8n"],
  },
  {
    tag: "AUTOMATION",
    metric: "1–2 hrs/day",
    title: "Manual workflow automation",
    description:
      "Replaced a repetitive manual reporting process with a Power Automate flow, freeing 1–2 hours of analyst time every day for higher-value work.",
    stack: ["Power Automate", "Excel"],
  },
];

const certifications = [
  { name: "Tableau Desktop Specialist", year: "2022" },
  { name: "Power BI Desktop", year: "2025" },
  { name: "Business Analyst with Excel — Simplilearn", year: "2022" },
  { name: "Data Analytics", year: "2021" },
];

const contactLinks = [
  { label: "LinkedIn", url: "https://linkedin.com/in/harishrsharma" },
  { label: "GitHub", url: "https://github.com/Harishrsharma" },
];

function SectionLabel({ children }) {
  return (
    <p className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-brand-600 mb-4">
      <span className="w-4 h-px bg-brand-500" />
      {children}
    </p>
  );
}

function DownloadCVButton({ className = "" }) {
  return (
    <a
      href={`${import.meta.env.BASE_URL}Harish_Sharma_CV.pdf`}
      download
      className={`inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-ink-950 font-bold py-3 px-6 rounded-xl shadow-lg transition-colors ${className}`}
    >
      Work with me →
    </a>
  );
}

export default function App() {
  const refs = {
    about: useRef(null),
    toolkit: useRef(null),
    experience: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };

  const scrollTo = (id) => refs[id].current?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="font-sans bg-slate-50 text-ink-950 min-h-screen overflow-x-hidden">
      {/* Hero */}
      <header className="bg-dots bg-slate-100 pt-16 pb-0 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2 mb-8 font-mono text-xs tracking-wide text-slate-600"
          >
            <span className="w-2 h-2 rounded-full bg-brand-500 inline-block" />
            OPEN TO DATA &amp; BI ROLES · KOBLENZ, GERMANY (Open for relocation)
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight mb-6 max-w-3xl"
          >
            Turning messy data into decisions teams{" "}
            <span className="text-brand-500">actually trust.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-slate-600 max-w-xl mb-8"
          >
            Data &amp; BI Analyst with 3.5 years building Power BI dashboards,
            SQL data models, and Python + AI-assisted analytics that
            operational and management teams rely on daily.
          </motion.p>

          <div className="flex flex-wrap gap-4 mb-8">
            <DownloadCVButton />
            <button
              onClick={() => scrollTo("experience")}
              className="bg-white border border-slate-300 hover:border-brand-500 text-ink-950 font-bold py-3 px-6 rounded-xl transition-colors"
            >
              See experience
            </button>
          </div>

          <div className="flex gap-6 pb-16 font-mono text-sm text-slate-500">
            <a href="mailto:harishrsharma1405@gmail.com" className="hover:text-brand-600 underline underline-offset-4">
              Email
            </a>
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-600 underline underline-offset-4"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* Stats bar */}
      <section className="bg-ink-950 text-white py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display font-bold text-3xl text-brand-400 mb-1">
                {s.value}
              </div>
              <p className="text-sm text-slate-300">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section ref={refs.about} className="py-20 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <SectionLabel>ABOUT</SectionLabel>
            <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight">
              From raw tables to reporting people act on.
            </h2>
          </div>
          <div className="space-y-5 text-slate-700 text-lg">
            <p>
              I'm a data professional who lives in the space between business
              questions and the data that answers them — comfortable across
              analytics, BI, data engineering, and applied ML. My day-to-day
              spans <b>Power BI</b> (Desktop, Service, Power Query, DAX,
              modeling), <b>advanced SQL</b>, and <b>Python</b> — building
              dashboards, data models, pipelines, and KPI frameworks that
              operational teams and management use to make decisions.
            </p>
            <p>
              I use <b>Claude and LangChain daily</b> for AI-assisted
              analytics — prompt engineering, RAG systems, and agentic
              workflow automation — to ship reliable analytical code faster.
              I'm currently finishing an <b>MSc in Web &amp; Data Science</b>{" "}
              with a focus on machine learning and data systems.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {aboutBadges.map((b) => (
                <span
                  key={b.label}
                  className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2 text-sm font-medium"
                >
                  <span>{b.emoji}</span> {b.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Toolkit */}
      <section ref={refs.toolkit} className="py-20 px-6 bg-slate-100">
        <div className="max-w-5xl mx-auto">
          <SectionLabel>TOOLKIT</SectionLabel>
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-10">
            The stack I build with
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {toolkit.map((cat) => (
              <div
                key={cat.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
              >
                <h3 className="font-bold text-lg">{cat.title}</h3>
                <p className="text-sm text-slate-400 mb-4">{cat.level}</p>
                <div className="flex flex-wrap gap-2">
                  {cat.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs bg-slate-50 border border-slate-200 rounded-md px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            <div className="bg-ink-950 text-white rounded-2xl p-6">
              <p className="font-mono text-xs tracking-widest text-brand-400 mb-3">
                CERTIFIED
              </p>
              <p className="text-slate-200">{certified.join(" · ")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section ref={refs.experience} className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionLabel>EXPERIENCE</SectionLabel>
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-10">
            Where I've delivered
          </h2>
          <div className="divide-y divide-slate-100">
            {experiences.map((exp) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="grid md:grid-cols-[240px_1fr] gap-4 py-8"
              >
                <div>
                  <p className="font-mono text-sm text-brand-600 mb-1">
                    {exp.date}
                  </p>
                  <h3 className="font-bold text-lg">{exp.role}</h3>
                  <p className="text-slate-400 text-sm">{exp.company}</p>
                </div>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section ref={refs.projects} className="py-20 px-6 bg-slate-100">
        <div className="max-w-5xl mx-auto">
          <SectionLabel>SELECTED WORK</SectionLabel>
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-10">
            Projects with measurable impact
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((proj) => (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="font-mono text-xs text-slate-400">
                    {proj.tag}
                  </span>
                  <span className="font-display font-bold text-brand-500">
                    {proj.metric}
                  </span>
                </div>
                <h3 className="font-bold text-xl mb-2">{proj.title}</h3>
                <p className="text-slate-600 mb-4">{proj.description}</p>
                <div className="flex flex-wrap gap-2">
                  {proj.stack.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs bg-slate-50 border border-slate-200 rounded-md px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="bg-slate-50 rounded-2xl p-7 border border-slate-100">
            <SectionLabel>EDUCATION</SectionLabel>
            <h3 className="font-bold text-lg">MSc, Web &amp; Data Science</h3>
            <p className="text-slate-600 mb-1">
              University of Koblenz, Germany · Expected July 2026
            </p>
            <p className="text-sm text-slate-400 mb-5">
              Focus: Machine Learning, Data Systems &amp; Analytics
            </p>
            <hr className="border-slate-200 mb-5" />
            <h3 className="font-bold text-lg">B.E., Computer Engineering</h3>
            <p className="text-slate-600">
              University of Mumbai, India · 2015 – 2019
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-7 border border-slate-100">
            <SectionLabel>CERTIFICATIONS &amp; RECOGNITION</SectionLabel>
            <ul className="space-y-2 mb-5">
              {certifications.map((c) => (
                <li key={c.name} className="flex justify-between items-baseline gap-4">
                  <span className="flex items-center gap-2 text-slate-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500 inline-block" />
                    {c.name}
                  </span>
                  <span className="text-sm text-slate-400 shrink-0">{c.year}</span>
                </li>
              ))}
            </ul>
            <hr className="border-slate-200 mb-5" />
            <p className="text-slate-700 flex gap-3">
              <span>🏆</span>
              <span>
                Recognized for quality of deliverables at{" "}
                <b>Ugam Solutions</b>.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section ref={refs.contact} className="bg-ink-950 text-white py-20 px-6 text-center">
        <p className="font-mono text-xs tracking-widest text-brand-400 mb-4">
          // LET'S TALK
        </p>
        <h2 className="font-display font-bold text-3xl md:text-5xl mb-6 max-w-3xl mx-auto">
          Looking for a data analyst who ships.
        </h2>
        <p className="text-slate-300 max-w-xl mx-auto mb-8">
          Open to Data Analyst / BI, Analytics &amp; Data Engineering, and
          ML/AI Engineer roles across
          Germany.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          <a
            href="mailto:harishrsharma1405@gmail.com"
            className="bg-brand-500 hover:bg-brand-600 text-ink-950 font-bold py-3 px-6 rounded-xl transition-colors"
          >
            harishrsharma1405@gmail.com
          </a>
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-600 hover:border-brand-400 font-bold py-3 px-6 rounded-xl transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <hr className="border-slate-800 max-w-3xl mx-auto mb-6" />
        <p className="font-mono text-xs text-slate-500 mb-2">
          linkedin.com/in/harishrsharma · github.com/Harishrsharma · Koblenz,
          Germany
        </p>
        <p className="text-xs text-slate-600">
          © {new Date().getFullYear()} Harish Sharma
        </p>
      </section>
    </main>
  );
}
