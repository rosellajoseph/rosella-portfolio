'use client';

import { Mail, MapPin, Phone, Menu, X, Users, TrendingUp, Headphones, Database } from 'lucide-react';
import { useState } from 'react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-slate-900 shadow-lg z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-white">Rosella Joseph</h1>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('about')} className="text-slate-300 hover:text-white font-medium transition-colors">About</button>
              <button onClick={() => scrollToSection('operations')} className="text-slate-300 hover:text-white font-medium transition-colors">Operations</button>
              <button onClick={() => scrollToSection('tools')} className="text-slate-300 hover:text-white font-medium transition-colors">Tools</button>
              <button onClick={() => scrollToSection('education')} className="text-slate-300 hover:text-white font-medium transition-colors">Education</button>
              <button onClick={() => scrollToSection('projects')} className="text-slate-300 hover:text-white font-medium transition-colors">Projects</button>
              <a
                href="mailto:rosellajoseph2@gmail.com"
                className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-all flex items-center gap-2 font-semibold"
              >
                <Mail size={16} />
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-3">
              <button onClick={() => scrollToSection('about')} className="text-slate-300 hover:text-white transition-colors text-left">About</button>
              <button onClick={() => scrollToSection('operations')} className="text-slate-300 hover:text-white transition-colors text-left">Operations</button>
              <button onClick={() => scrollToSection('tools')} className="text-slate-300 hover:text-white transition-colors text-left">Tools</button>
              <button onClick={() => scrollToSection('education')} className="text-slate-300 hover:text-white transition-colors text-left">Education</button>
              <button onClick={() => scrollToSection('projects')} className="text-slate-300 hover:text-white transition-colors text-left">Projects</button>
              <a
                href="mailto:rosellajoseph2@gmail.com"
                className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors flex items-center gap-2 w-fit"
              >
                <Mail size={16} />
                Contact
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white mt-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 py-20 md:py-28 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight leading-tight">
              Tech-Savvy Customer & Revenue Professional
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-emerald-400 font-semibold">
              Certified ScrumMaster | CRM & Salesforce Learner | High-Volume Client Communication
            </p>
            <p className="text-lg text-slate-300 mb-8 max-w-3xl">
              I operate at the intersection of customer experience, revenue operations, and CRM systems within structured, metrics-driven environments.
            </p>
            <div className="flex flex-wrap gap-4 text-sm md:text-base">
              <a
                href="mailto:rosellajoseph2@gmail.com"
                className="flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-all shadow-lg"
              >
                <Mail size={18} />
                Let's Connect
              </a>
              <span className="flex items-center gap-2 bg-slate-700/50 backdrop-blur-sm px-5 py-3 rounded-lg text-slate-300">
                <Phone size={18} />
                (414) 399-6953
              </span>
              <span className="flex items-center gap-2 bg-slate-700/50 backdrop-blur-sm px-5 py-3 rounded-lg text-slate-300">
                <MapPin size={18} />
                Milwaukee, WI
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 max-w-6xl">
        {/* About Me Section */}
        <section id="about" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-6 text-slate-900 border-b-4 border-emerald-500 pb-2 inline-block">
            About Me
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-200">
            <p className="text-slate-700 leading-relaxed text-lg">
              I am an Information Science & Technology professional with hands-on experience supporting high-volume customer interactions and revenue-generating operations. I manage 15-25 daily calls and process 40-60 financial transactions per shift with 99%+ accuracy while coordinating closely with sales and finance teams.
            </p>
            <p className="text-slate-700 leading-relaxed text-lg mt-4">
              With a strong technical foundation in system design, databases, and Agile methodology, I am building expertise in CRM platforms including Salesforce and Jira. I thrive in structured, performance-driven environments where communication, documentation accuracy, and process discipline drive results.
            </p>
            <p className="text-slate-700 leading-relaxed text-lg mt-4 font-medium text-slate-800">
              My goal is to grow within a technology-driven organization at the intersection of customer experience, revenue operations, and CRM systems.
            </p>
          </div>
        </section>

        {/* Professional Focus Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900 border-b-4 border-emerald-500 pb-2 inline-block">
            Professional Focus
          </h2>
          <div className="flex flex-wrap gap-3">
            <span className="bg-emerald-100 text-emerald-800 px-5 py-3 rounded-lg font-semibold text-lg border border-emerald-200">
              Sales Development (SDR/BDR)
            </span>
            <span className="bg-blue-100 text-blue-800 px-5 py-3 rounded-lg font-semibold text-lg border border-blue-200">
              Customer Support / Product Support
            </span>
            <span className="bg-purple-100 text-purple-800 px-5 py-3 rounded-lg font-semibold text-lg border border-purple-200">
              Customer Success (Entry-Level)
            </span>
            <span className="bg-amber-100 text-amber-800 px-5 py-3 rounded-lg font-semibold text-lg border border-amber-200">
              Revenue Operations / CRM Support
            </span>
          </div>
        </section>

        {/* Revenue & Customer Operations Snapshot */}
        <section id="operations" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-6 text-slate-900 border-b-4 border-emerald-500 pb-2 inline-block">
            Revenue & Customer Operations Snapshot
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200 flex items-start gap-4">
              <div className="bg-emerald-100 p-3 rounded-lg">
                <Headphones className="text-emerald-600" size={28} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900">15-25 Daily Calls</h3>
                <p className="text-slate-600">Inbound/outbound customer communication</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200 flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <TrendingUp className="text-blue-600" size={28} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900">40-60 Transactions/Shift</h3>
                <p className="text-slate-600">Processing with 99%+ accuracy</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200 flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Database className="text-purple-600" size={28} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900">High-Value Payments</h3>
                <p className="text-slate-600">Up to $20,000 + financing application support</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200 flex items-start gap-4">
              <div className="bg-amber-100 p-3 rounded-lg">
                <Users className="text-amber-600" size={28} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900">Cross-Functional Coordination</h3>
                <p className="text-slate-600">Sales, Service, and Finance teams</p>
              </div>
            </div>
          </div>
        </section>

        {/* CRM & Workflow Tools Section */}
        <section id="tools" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-6 text-slate-900 border-b-4 border-emerald-500 pb-2 inline-block">
            CRM & Workflow Tools
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <h3 className="font-bold text-lg text-slate-900">Salesforce</h3>
              </div>
              <p className="text-slate-600">Learning lead/contact/account basics, activity logging, pipeline stages</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">J</span>
                </div>
                <h3 className="font-bold text-lg text-slate-900">Jira (Atlassian)</h3>
              </div>
              <p className="text-slate-600">Boards, tickets, sprint workflows</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">T</span>
                </div>
                <h3 className="font-bold text-lg text-slate-900">Tekion DMS</h3>
              </div>
              <p className="text-slate-600">Dealership CRM-style transaction system</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">E</span>
                </div>
                <h3 className="font-bold text-lg text-slate-900">Microsoft Excel</h3>
              </div>
              <p className="text-slate-600">Reconciliation and reporting</p>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section id="skills" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-6 text-slate-900 border-b-4 border-emerald-500 pb-2 inline-block">
            Technical Foundation
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCategory
              title="CRM & Operations"
              skills={["Salesforce (Learning)", "Jira", "Tekion DMS", "Pipeline Management", "Activity Logging"]}
            />
            <SkillCategory
              title="Methodology"
              skills={["Certified ScrumMaster", "Agile/Scrum", "SDLC", "Requirements Analysis", "Process Documentation"]}
            />
            <SkillCategory
              title="Technical Skills"
              skills={["SQL", "Database Design", "Python", "PHP", "HTML/CSS", "System Design"]}
            />
            <SkillCategory
              title="Communication"
              skills={["High-Volume Calls", "Client Relations", "Cross-Team Coordination", "Documentation", "Problem Resolution"]}
            />
            <SkillCategory
              title="Tools & Systems"
              skills={["Microsoft Excel", "GitHub", "phpMyAdmin", "VS Code", "Data Reconciliation"]}
            />
            <SkillCategory
              title="Core Strengths"
              skills={["99%+ Accuracy", "Metrics-Driven", "Detail-Oriented", "Process Discipline", "Team Collaboration"]}
            />
          </div>
        </section>

        {/* Education */}
        <section id="education" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-6 text-slate-900 border-b-4 border-emerald-500 pb-2 inline-block">
            Education & Certifications
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-200">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">University of Wisconsin-Milwaukee</h3>
                  <p className="text-lg text-emerald-600 font-semibold">Bachelor of Science, Information Science & Technology</p>
                </div>
                <span className="text-slate-600 font-semibold mt-2 md:mt-0">Dec 2025</span>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold text-slate-900 mb-2">Relevant Coursework:</h4>
                <ul className="text-slate-700 space-y-1">
                  <li>Software Engineering Principles | Systems Analysis & Design</li>
                  <li>Database Design (MySQL) | Web Development</li>
                  <li>Information Security | Project Management</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
              <div className="flex items-center gap-4">
                <div className="bg-emerald-100 p-3 rounded-lg">
                  <Users className="text-emerald-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">Certified ScrumMaster (CSM)</h3>
                  <p className="text-slate-600">Agile methodology and sprint management</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Experience */}
        <section id="projects" className="mb-16 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
            <h2 className="text-3xl font-bold text-slate-900 border-b-4 border-emerald-500 pb-2 inline-block">
              Project Experience
            </h2>
            <a
              href="/projects"
              className="mt-4 md:mt-0 bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors font-semibold inline-flex items-center gap-2"
            >
              View Interactive Demos
            </a>
          </div>
          <div className="space-y-6">
            <ProjectCard
              title="Image Protection Platform (Capstone)"
              subtitle="TRUEFACE"
              businessValue="Demonstrates structured workflow design and documentation discipline in a real-world system build."
              description={[
                "Developed a PHP/MySQL prototype for image upload, watermarking, and verification",
                "Built the database, user workflow, error handling, and system layout",
                "Created project documentation: Scope Statement, WBS, Gantt Chart, cost estimates, and risk analysis",
                "Developed complete user and technical documentation including ERD and system diagrams"
              ]}
            />

            <ProjectCard
              title="Graduate Software Engineering Project"
              subtitle="Mini-ATM System"
              businessValue="Shows ability to translate business requirements into technical specifications with full traceability."
              description={[
                "Created SMART goals, system requirements, user stories, and use cases",
                "Designed a 3-layer system architecture, class diagram, and sequence diagram",
                "Built a full traceability matrix and system workflow documentation"
              ]}
            />

            <ProjectCard
              title="Web Application Security Testing"
              businessValue="Demonstrates security awareness and systematic testing methodology for protecting customer data."
              description={[
                "Performed hands-on OWASP testing using Burp Suite",
                "Completed labs on XSS, SQL Injection, authentication bypass, session attacks, and access control issues",
                "Conducted full penetration tests for midterm and final projects"
              ]}
            />

            <ProjectCard
              title="E-Commerce Website"
              subtitle="Movie Poster Store"
              businessValue="Built a functional customer-facing application with database-driven product management."
              description={[
                "Built a website with login, products, and CRUD functionality",
                "Connected forms to MySQL database using PHP"
              ]}
            />

            <ProjectCard
              title="Fuse Bootcamp"
              subtitle="MKE Tech Hub Coalition"
              businessValue="Completed professional development focused on job readiness and emerging technologies."
              description={[
                "Earned the HERA Data & AI Badge",
                "Completed workshops on job readiness, networking, and AI basics"
              ]}
            />
          </div>
        </section>

        {/* Awards */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900 border-b-4 border-emerald-500 pb-2 inline-block">
            Awards & Recognition
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
              <p className="text-lg text-slate-700">
                <span className="font-semibold">Dean's Honor List</span> - 2018, 2019, 2024
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400">
            © 2025 Rosella Joseph. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
      <h3 className="font-bold text-lg text-slate-900 mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({
  title,
  subtitle,
  businessValue,
  description
}: {
  title: string;
  subtitle?: string;
  businessValue?: string;
  description: string[]
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200 hover:shadow-xl transition-shadow">
      <div className="mb-3">
        <h3 className="text-xl font-bold text-slate-900">{title}</h3>
        {subtitle && <p className="text-emerald-600 font-semibold">{subtitle}</p>}
      </div>
      {businessValue && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 mb-4">
          <p className="text-sm text-emerald-800">
            <span className="font-semibold">Business Value:</span> {businessValue}
          </p>
        </div>
      )}
      <ul className="text-slate-700 space-y-2">
        {description.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}
