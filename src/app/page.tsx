'use client';

import { Mail, MapPin, Phone, Download, Menu, X } from 'lucide-react';
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
      <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 shadow-lg z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-black text-white">Rosella Joseph ✨</h1>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('summary')} className="text-white hover:text-yellow-200 font-semibold transition-colors">Summary</button>
              <button onClick={() => scrollToSection('skills')} className="text-white hover:text-yellow-200 font-semibold transition-colors">Skills</button>
              <button onClick={() => scrollToSection('education')} className="text-white hover:text-yellow-200 font-semibold transition-colors">Education</button>
              <button onClick={() => scrollToSection('projects')} className="text-white hover:text-yellow-200 font-semibold transition-colors">Projects</button>
              <button onClick={() => scrollToSection('experience')} className="text-white hover:text-yellow-200 font-semibold transition-colors">Experience</button>
              <a
                href="mailto:rosellajoseph2@gmail.com"
                className="bg-white text-purple-600 px-4 py-2 rounded-full hover:bg-yellow-300 hover:scale-110 transition-all flex items-center gap-2 font-bold shadow-lg"
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
              <button onClick={() => scrollToSection('summary')} className="text-slate-700 hover:text-emerald-600 transition-colors text-left">Summary</button>
              <button onClick={() => scrollToSection('skills')} className="text-slate-700 hover:text-emerald-600 transition-colors text-left">Skills</button>
              <button onClick={() => scrollToSection('education')} className="text-slate-700 hover:text-emerald-600 transition-colors text-left">Education</button>
              <button onClick={() => scrollToSection('projects')} className="text-slate-700 hover:text-emerald-600 transition-colors text-left">Projects</button>
              <button onClick={() => scrollToSection('experience')} className="text-slate-700 hover:text-emerald-600 transition-colors text-left">Experience</button>
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

      {/* Header/Hero Section */}
      <header className="relative bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white mt-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="absolute top-0 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl"></div>
        </div>
        <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
          <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
            ✨ Recent Graduate • Tech Enthusiast • Problem Solver
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight">
            Hey, I'm <span className="bg-white text-purple-600 px-3 py-1 rounded-lg inline-block transform -rotate-2">Rosella</span>
          </h1>
          <p className="text-xl md:text-3xl mb-8 font-bold text-yellow-100">
            Building secure & creative tech solutions 🚀
          </p>
          <div className="flex flex-wrap gap-4 text-sm md:text-base">
            <a
              href="mailto:rosellajoseph2@gmail.com"
              className="flex items-center gap-2 bg-white text-purple-600 px-5 py-3 rounded-full font-bold hover:bg-yellow-300 hover:scale-105 transition-all shadow-lg"
            >
              <Mail size={18} />
              Let's Connect!
            </a>
            <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full">
              <Phone size={18} />
              (414) 399-6953
            </span>
            <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full">
              <MapPin size={18} />
              Milwaukee, WI
            </span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Professional Summary */}
        <section id="summary" className="mb-16 scroll-mt-24">
          <h2 className="text-4xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            About Me 👋
          </h2>
          <div className="bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 rounded-2xl shadow-xl p-8 border-4 border-purple-200 transform hover:scale-105 transition-transform">
            <p className="text-slate-800 leading-relaxed text-lg font-medium">
              <span className="text-2xl font-black text-purple-600">Hey there!</span> I'm an
              <span className="bg-yellow-200 px-2 py-1 rounded font-bold"> Information Science & Technology graduate</span> who enjoys
              learning new technologies and solving practical problems.
              <br/><br/>
              Through my coursework and projects, I've gained hands-on experience with <span className="text-pink-600 font-bold">PHP/MySQL databases</span>,
              <span className="text-blue-600 font-bold"> OWASP security testing</span>, and
              <span className="text-green-600 font-bold"> web application development</span>. I've built projects such as an
              <span className="text-orange-600 font-bold"> image watermarking system</span> and
              <span className="text-purple-600 font-bold"> e-commerce applications</span> that strengthened my problem-solving, documentation, and system-thinking skills.
              <br/><br/>
              I'm currently seeking entry-level opportunities where I can apply my technical foundation,
              support reliable systems and processes, and continue growing within a collaborative team.
            </p>
          </div>
        </section>

        {/* Technical Skills */}
        <section id="skills" className="mb-16 scroll-mt-24">
          <h2 className="text-4xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
            My Tech Stack 🛠️
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <SkillCategory
              title="Languages"
              skills={["Python", "PHP", "JavaScript", "SQL", "HTML/CSS", "JSON", "XML"]}
            />
            <SkillCategory
              title="Cybersecurity"
              skills={["OWASP Top 10", "Burp Suite", "Recon", "XSS", "SQL Injection", "Auth/Session Testing"]}
            />
            <SkillCategory
              title="Networking"
              skills={["TCP/IP", "DNS", "DHCP", "Subnetting", "OSI Model", "Cisco Packet Tracer"]}
            />
            <SkillCategory
              title="Tools"
              skills={["GitHub", "phpMyAdmin", "XAMPP", "cPanel", "VS Code", "Tekion DMS", "Microsoft Excel"]}
            />
            <SkillCategory
              title="Software Development"
              skills={["SDLC", "Agile/Scrum", "UML", "Requirements Analysis", "System Testing"]}
            />
            <SkillCategory
              title="Strengths"
              skills={["Troubleshooting", "Documentation", "Data Accuracy", "Communication", "Problem-Solving"]}
            />
          </div>
        </section>

        {/* Education */}
        <section id="education" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-6 text-slate-900 border-b-4 border-emerald-500 pb-2 inline-block">
            Education
          </h2>
          <div className="bg-white rounded-lg shadow-md p-8 border border-slate-200">
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
                <li>• Software Engineering Principles (INFOST 691)</li>
                <li>• Web Application Penetration Testing (OWASP/Burp Suite)</li>
                <li>• Database Design (MySQL)</li>
                <li>• Systems Analysis & Design</li>
                <li>• Web Development (HTML/CSS/JS/PHP)</li>
                <li>• Cisco Networking + Cisco Packet Tracer Labs</li>
                <li>• Information Security, JSON/XML, Project Management</li>
              </ul>
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
              <span>🎮</span>
              Try Interactive Demos
            </a>
          </div>
          <div className="space-y-6">
            <ProjectCard
              title="Image Protection Platform (Capstone)"
              subtitle="TRUEFACE"
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
              description={[
                "Created SMART goals, system requirements, user stories, and use cases",
                "Designed a 3-layer system architecture, class diagram, and sequence diagram",
                "Built a full traceability matrix and system workflow documentation"
              ]}
            />

            <ProjectCard
              title="Web Application Pen Testing (WAPT)"
              description={[
                "Performed hands-on OWASP testing using Burp Suite",
                "Completed labs on XSS, SQL Injection, authentication bypass, session attacks, and access control issues",
                "Conducted full penetration tests for midterm and final projects"
              ]}
            />

            <ProjectCard
              title="PHP/MySQL Website"
              subtitle="Movie Poster Store"
              description={[
                "Built a website with login, products, and CRUD functionality",
                "Connected forms to MySQL database using PHP"
              ]}
            />

            <ProjectCard
              title="MySQL Database Design"
              description={[
                "Created EER diagrams, normalized tables, and SQL queries"
              ]}
            />

            <ProjectCard
              title="Python Hackathon"
              subtitle="Mental Health Chatbot"
              description={[
                "Created a decision-based chatbot using conditional logic and input validation"
              ]}
            />

            <ProjectCard
              title="Fuse Bootcamp"
              subtitle="MKE Tech Hub Coalition"
              description={[
                "Earned the HERA Data & AI Badge",
                "Completed workshops on job readiness, networking, and AI basics"
              ]}
            />
          </div>
        </section>

        {/* Professional Experience */}
        <section id="experience" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-6 text-slate-900 border-b-4 border-emerald-500 pb-2 inline-block">
            Professional Experience
          </h2>
          <div className="bg-white rounded-lg shadow-md p-8 border border-slate-200">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Rosen Honda</h3>
                <p className="text-lg text-emerald-600 font-semibold">Cashier / Receptionist</p>
              </div>
              <span className="text-slate-600 font-semibold mt-2 md:mt-0">Feb 2023 - Present</span>
            </div>
            <ul className="text-slate-700 space-y-2 mt-4">
              <li>• Use Tekion DMS for payments, customer accounts, and service records</li>
              <li>• Maintain and update Excel logs: cash-out, gas slips, and license plate tracking</li>
              <li>• Perform daily cash drawer reconciliation and ensure balance accuracy</li>
              <li>• Process Synchrony, credit, debit, and cash payments with zero errors</li>
              <li>• Assist customers and staff with account lookups, scheduling, and documentation</li>
            </ul>
          </div>
        </section>

        {/* Awards */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900 border-b-4 border-emerald-500 pb-2 inline-block">
            Awards & Recognition
          </h2>
          <div className="bg-white rounded-lg shadow-md p-8 border border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
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
          <p className="text-slate-300">
            © 2025 Rosella Joseph. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
  const colorMap: Record<string, { bg: string; text: string; border: string; badge: string; badgeText: string }> = {
    "Languages": { bg: "from-purple-100 to-pink-100", text: "text-purple-800", border: "border-purple-300", badge: "bg-purple-200", badgeText: "text-purple-800" },
    "Cybersecurity": { bg: "from-red-100 to-orange-100", text: "text-red-800", border: "border-red-300", badge: "bg-red-200", badgeText: "text-red-800" },
    "Networking": { bg: "from-blue-100 to-cyan-100", text: "text-blue-800", border: "border-blue-300", badge: "bg-blue-200", badgeText: "text-blue-800" },
    "Tools": { bg: "from-green-100 to-emerald-100", text: "text-green-800", border: "border-green-300", badge: "bg-green-200", badgeText: "text-green-800" },
    "Software Development": { bg: "from-yellow-100 to-amber-100", text: "text-yellow-800", border: "border-yellow-300", badge: "bg-yellow-200", badgeText: "text-yellow-800" },
    "Strengths": { bg: "from-pink-100 to-rose-100", text: "text-pink-800", border: "border-pink-300", badge: "bg-pink-200", badgeText: "text-pink-800" }
  };

  const colors = colorMap[title] || colorMap["Languages"];

  return (
    <div className={`bg-gradient-to-br ${colors.bg} rounded-2xl shadow-lg p-6 border-2 ${colors.border} transform hover:scale-105 hover:rotate-1 transition-all`}>
      <h3 className={`font-black text-xl ${colors.text} mb-3`}>{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className={`${colors.badge} ${colors.badgeText} px-3 py-2 rounded-full text-sm font-bold shadow-sm hover:shadow-md hover:scale-110 transition-all cursor-default`}
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
  description
}: {
  title: string;
  subtitle?: string;
  description: string[]
}) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-slate-200 hover:shadow-lg transition-shadow">
      <div className="mb-3">
        <h3 className="text-xl font-bold text-slate-900">{title}</h3>
        {subtitle && <p className="text-emerald-600 font-semibold">{subtitle}</p>}
      </div>
      <ul className="text-slate-700 space-y-2">
        {description.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}
