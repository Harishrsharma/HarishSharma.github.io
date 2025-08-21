import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import './index.css'; // or wherever Tailwind is imported


// ---- Data ----
const skills = [
  "Python", "SQL", "R", "Java", "Pandas", "NumPy", "scikit-learn", "PyTorch",
  "TensorFlow", "Langchain", "PowerBI", "Tableau", "Looker", "Jira", "Ms Excel",
  "FastAPI", "Flask", "RESTApi", "ETL Pipelines",
  "PostgreSQL", "Neo4j", "Snowflake (familiar)", "Git", "Docker", "Data Bricks"
];

const stats = [
  { label: "Years Experience", value: "3+" },
  { label: "Projects Completed", value: "10+" },
  { label: "Dashboards Built", value: "6+" },
  { label: "Certifications", value: "12+" },
];

const experiences = [
  {
    role: "Data Analyst",
    company: "Hangar901 Aircraft Maintenance  , Hahn ",
    date: "April 2025 - Present",
    details: [
      "Built PowerBI dashboards to track daily KPIs—cutting reporting time by 30%.",
      "Developed a cosine-similarity based employee recommendation engine—accelerating workforce planning by 60%",
      "Designed a FastAPI service for real-time performance recommendations—enhancing automation and user experience",
      "Automated ETL pipelines in Python, improving data reliability and reducing manual effort"
    ],
  },
  {
    role: "Working Student:- Artificial Intelligence",
    company: "Seeburger AG , Karlsruhe",
    date: "April 2024- April 2025",
    details: [
      "Implemented Retrieval-Augmented Generation (RAG) pipelines using LLaMA and LangChain",
      "integrating LangChain’s modular agent and vector store interfaces to improve enterprise document query accuracy",
      "Built Neo4j knowledge graphs enabling semantic search across internal data.",
      "Automated AI workflows—cutting prototype-to-deployment time by 40%.",
      "Created production REST APIs using Flask for AI model integration"
    ],
  },
];

const projects = [
  {
    title: "AI-Powered Resume Parser",
    description: "Extracted structured insights using NLP & LangChain.",
  },
  {
    title: "Predictive Maintenance",
    description: "Built ML models to predict equipment failures in aviation.",
  },
  {
    title: "ETL Automation",
    description: "Streamlined ETL pipelines reducing runtime by 40%.",
  },
];

const certifications = [
  "AWS Cloud Practitioner",
  "Microsoft PowerBI Data Analyst Associate",
  "TensorFlow Developer Certificate",
];

const contactLinks = [
  { label: "LinkedIn", url: "https://linkedin.com/in/harishrsharma" },
  { label: "GitHub", url: "https://github.com/harishrsharma" },
];

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

// ---- Components ----
function DownloadCVButton() {
  return (
    <a
      href="/Harish_Sharma_CV.pdf"
      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-700 hover:to-blue-800 text-white font-bold py-2 px-5 rounded-xl shadow-xl transition-all duration-160"
      download
    >
      Download CV
    </a>
  );
}

function LiveClock() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <span className="font-mono px-2 py-1 bg-purple-100 rounded text-purple-700 text-xs md:text-sm">
      {now.toLocaleTimeString()}
    </span>
  );
}

// ---- Main App ----
export default function App() {
  const refs = SECTIONS.reduce((acc, s) => {
    acc[s.id] = useRef();
    return acc;
  }, {});

  const handleNavigate = (id) => {
    refs[id].current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="font-sans bg-gray-50 min-h-screen relative overflow-x-hidden">
      {/* Navbar */}
      <nav className="sticky top-0 z-20 bg-white/90 backdrop-blur shadow-md w-full flex items-center justify-between px-7 py-3 border-b">
        <div className="flex items-center gap-5">
          <span className="text-xl font-bold text-blue-700 tracking-tight">HS</span>
          {SECTIONS.map(s => (
            <button
              key={s.id}
              onClick={() => handleNavigate(s.id)}
              className="text-base font-medium px-2 py-1 rounded hover:bg-purple-100 text-purple-600 hover:text-blue-700 transition"
            >
              {s.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <LiveClock />
          <DownloadCVButton />
        </div>
      </nav>

      {/* Hero */}
      <header className="pt-20 pb-16 px-5 text-center bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500"
        >
          Harish Sharma
        </motion.h1>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-3">
          <Typewriter
            words={["Data Scientist", "AI/ML Developer", "Data Analyst"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </h2>
        <p className="font-medium text-gray-600 mb-5">Germany – Open to relocate</p>
        <DownloadCVButton />
      </header>

      {/* Stats */}
      <section className="py-12 px-6 flex justify-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl w-full">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-lg text-center border border-purple-100"
            >
              <h3 className="text-3xl font-bold text-purple-700">{s.value}</h3>
              <p className="text-gray-600 font-medium">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About */}
      <section ref={refs["about"]} className="py-9 px-5 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl p-7 shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-3 text-blue-700">About Me</h2>
          <p className="text-lg mb-1 text-gray-800">
            Data Enthusiast with 3 years experience designing ETL pipelines, dashboards & ML systems.
            Automated workflows (40% faster), improved data quality (25%), and scaled AI solutions.
            Analytical depth meets product storytelling to drive insights for business impact.
          </p>
          <div className="mt-2 text-gray-700 text-sm font-medium">
            MSc in Web & Data Science, University of Koblenz (Thesis ongoing).<br />
            Bachelor of Engineering (Computer Engineering), Mumbai University (2019).
          </div>
        </motion.div>
      </section>

      {/* Skills */}
      <section ref={refs["skills"]} className="py-8 px-5">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-7"
        >
          <h2 className="text-2xl font-bold mb-4 text-blue-700">Technical Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map(skill => (
              <span key={skill}
                className="px-3 py-1 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-lg shadow text-sm font-semibold text-gray-900"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Experience */}
      <section ref={refs["experience"]} className="py-11 px-4 max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold mb-7 text-purple-700"
        >
          Experience
        </motion.h2>
        <div className="space-y-7">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-gradient-to-tr from-purple-100 via-blue-50 to-pink-50 rounded-xl p-7 shadow-xl border-l-8 border-blue-400"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                <h3 className="font-semibold text-lg">{exp.role} – <span className="font-normal italic">{exp.company}</span></h3>
                <span className="text-sm text-gray-600">{exp.date}</span>
              </div>
              <ul className="list-disc list-inside text-base ml-2 marker:text-blue-700">
                {exp.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section ref={refs["projects"]} className="py-10 px-5">
        <motion.h2
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold mb-6 text-pink-700"
        >
          Projects
        </motion.h2>
        <div className="flex flex-wrap gap-7 justify-center">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.18 }}
              className="w-72 bg-white p-6 rounded-xl shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-200 border border-purple-100"
            >
              <h3 className="text-xl font-bold mb-2 text-blue-900">{proj.title}</h3>
              <p className="text-base text-gray-700">{proj.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section ref={refs["certifications"]} className="py-10 px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-6 max-w-xl mx-auto border border-pink-100"
        >
          <h2 className="text-2xl font-bold mb-3 text-purple-700">Certifications</h2>
          <ul className="list-disc ml-6 mb-2 text-base text-gray-800 marker:text-pink-700">
            {certifications.map(cert => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
          <div className="text-gray-600 text-sm">More on <a href="https://linkedin.com/in/harishrsharma" className="underline text-blue-700 hover:text-pink-600 transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</div>
        </motion.div>
      </section>

      {/* Contact */}
      <section ref={refs["contact"]} className="py-10 px-5 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md text-center border border-purple-100"
        >
          <h2 className="text-2xl font-bold mb-5 text-blue-700">Contact Me</h2>
          <div className="mb-3 text-purple-700 font-medium">
            Germany – Open to relocate
          </div>
          <div className="flex flex-col items-center mb-3 text-gray-700">
            <span className="mb-1">📞 +49 1577 400 3637</span>
            <span>✉️ harishrsharma1405@gmail.com</span>
          </div>
          <div className="mt-2 flex gap-5 text-lg justify-center">
            {contactLinks.map(link => (
              <a
                key={link.label}
                href={link.url}
                className="text-blue-700 hover:text-pink-700 font-semibold underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm bg-gradient-to-r from-blue-100 to-purple-100 font-semibold text-gray-700">
        &copy; {new Date().getFullYear()} Harish Sharma. All rights reserved.
      </footer>
    </main>
  );
}
