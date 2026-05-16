import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Code2,
  Smartphone,
  Database,
  GraduationCap,
  Briefcase,
  User,
  ChevronDown,
  ArrowUp,
  Layers,
  BookOpen,
  Sparkles,
  CircleDot,
} from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact" },
];

const SKILLS = [
  {
    category: "Frontend",
    icon: <Code2 size={20} />,
    items: [
      { name: "React", level: 94 },
      { name: "JavaScript", level: 92 },
      { name: "HTML", level: 88 },
      { name: "CSS", level: 86 },
      { name: "Bootstrap", level: 82 },
    ],
  },
  {
    category: "Backend",
    icon: <Layers size={20} />,
    items: [
      { name: "ASP.NET MVC", level: 90 },
      { name: "C#", level: 88 },
      { name: "PHP", level: 78 },
    ],
  },
  {
    category: "Mobile",
    icon: <Smartphone size={20} />,
    items: [
      { name: "Android (Java)", level: 85 },
      { name: "SQLite", level: 80 },
    ],
  },
  {
    category: "Database",
    icon: <Database size={20} />,
    items: [
      { name: "SQL Server", level: 86 },
      { name: "MySQL", level: 82 },
    ],
  },
];

const PROJECTS = [
  {
    title: "Hotel Booking Android App",
    description:
      "Implemented room browsing, booking flow, authentication, and local data storage using SQLite.",
    tags: ["Android", "Java", "SQLite", "UI/UX"],
    gradient: "from-fuchsia-500/10 via-violet-500/10 to-cyan-400/10",
  },
  {
    title: "FitZone Fitness Center Web App",
    description:
      "Created modules for member management, attendance tracking, subscription plans, and payment flows.",
    tags: ["React", "JavaScript", "Bootstrap", "Web App"],
    gradient: "from-cyan-500/10 via-emerald-400/10 to-slate-800/10",
  },
  {
    title: "E-Commerce Platform (ASP.NET)",
    description:
      "Developed product listings, shopping cart, checkout functionality, and secure authentication.",
    tags: ["ASP.NET MVC", "C#", "SQL Server", "E-Commerce"],
    gradient: "from-emerald-500/10 via-lime-500/10 to-cyan-500/10",
  },
  {
    title: "All for Music Portal",
    description:
      "Built features for profile management, media uploads, content publishing, and admin controls.",
    tags: ["PHP", "JavaScript", "Web Portal", "Content Management"],
    gradient: "from-violet-500/10 via-fuchsia-500/10 to-slate-800/10",
  },
  {
    title: "Java Calculator App",
    description:
      "Developed a GUI-based calculator using Java Swing with event-driven programming.",
    tags: ["Java", "Swing", "Desktop", "OOP"],
    gradient: "from-slate-700/10 via-slate-800/10 to-slate-900/10",
  },
  {
    title: "Career Path Recommendation System",
    description:
      "Created an AI-based web application recommending career paths using ML models and user data analysis.",
    tags: ["Web App", "AI", "Data Analysis", "Machine Learning"],
    gradient: "from-emerald-500/10 via-cyan-500/10 to-violet-500/10",
  },
  {
    title: "AutoBlog Mobile Application",
    description:
      "Developed a messaging app with text messaging and image upload, focusing on smooth communication and design.",
    tags: ["Android", "Java", "Media Upload", "Chat App"],
    gradient: "from-sky-500/10 via-indigo-500/10 to-violet-500/10",
  },
];

const SKILLS_BACKGROUND_IMAGE = "https://source.unsplash.com/1920x1080/?code,technology,developer";
const PROFILE_IMAGE = "/profile.png";

const CONTACT_EMAIL = "sampathmeealla@gmail.com";
const LINK_MAILTO = `mailto:${CONTACT_EMAIL}`;
const LINK_LINKEDIN = "https://www.linkedin.com/in/lahiru-sampath-193705344";
const LINK_GITHUB = "https://github.com/Sampathcode12";

const EXPERIENCE = [
  {
    role: "Software Engineer Intern",
    company: "",
    period: "2025 – Present",
    description:
      "Provided one year of internship experience building enterprise applications with .NET and React. Integrated RESTful APIs and supported both front-end and back-end development.",
    highlights: [
      "Improved system performance by optimizing SQL Server queries",
      "Participated in code reviews, debugging, refactoring, and feature enhancements",
      "Conducted system testing, bug fixing, and quality assurance activities",
      "Identified, documented, and tracked software defects",
      "Collaborated with developers, analysts, and project teams",
      "Verified data accuracy, workflows, and system validations",
      "Supported production deployments and server-side updates",
      "Contributed to web and mobile application development",
      "Prepared technical documentation, test cases, and reports",
    ],
  },
];

const EDUCATION = [
  {
    degree: "BSc (Hons) in Computer Science",
    institution: "CINEC Campus",
    period: "2025 � Present",
    description:
      "Currently pursuing a BSc (Hons) in Computer Science with a focus on software development and engineering practices.",
  },
  {
    degree: "Higher Diploma in Computing and Software Engineering",
    institution: "ICBT Campus",
    period: "May 2025",
    description:
      "Completed a higher diploma program centered on computing concepts, software engineering, and application development.",
  },
  {
    degree: "G.C.E. A/L",
    institution: "MR/ Beralapanathara National School",
    period: "2019",
    description: "Completed A/L examinations in the Mathematics stream.",
  },
  {
    degree: "G.C.E. O/L",
    institution: "MR/ Beralapanathara National School",
    period: "2016",
    description: "Completed O/L examinations with strong academic performance.",
  },
];

const CERTIFICATIONS = [
  "Python for Beginners � University of Moratuwa (DP Education)",
  "Intermediate SQL for Data Scientists � Coursera",
  "Java Programming � Coursera",
  "CCNA 200-301: Network Fundamentals � Coursera",
  "Certified Support Technician � Networking � LinkedIn",
  "Basics of Computer Networking � Coursera",
];

const LANGUAGES = ["English", "Sinhala"];

function SectionHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 bg-emerald-400/10 border border-emerald-400/15 rounded-2xl flex items-center justify-center text-emerald-400 shadow-[0_0_30px_rgba(34,197,94,0.15)]">
          {icon}
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>
      </div>
      <div className="h-0.5 sm:flex-1 bg-gradient-to-r from-cyan-400/40 via-emerald-400/20 to-violet-400/40 rounded-full hidden" />
    </div>
  );
}

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBack, setShowBack] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.remove("light-theme");
    window.localStorage.setItem("theme", "dark");
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      setScrollProgress(maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0);
      setShowBack(scrollTop > 420);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowToast(true);
    window.setTimeout(() => setShowToast(false), 2800);
  };

  return (
    <div className="min-h-screen theme-bg theme-text overflow-x-hidden">
      <div className="fixed inset-x-0 top-0 h-1 z-50 bg-slate-900/50">
        <div className="h-full bg-gradient-to-r from-cyan-400 via-emerald-400 to-violet-400 transition-all" style={{ width: `${scrollProgress}%` }} />
      </div>

      <header className="fixed inset-x-0 top-0 z-40 backdrop-blur-xl theme-surface/90 border-b theme-border sm:pb-0">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-6 lg:px-20">
          <button
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="text-lg">&lt;</span>Sampath /&gt;
          </button>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="transition hover:text-emerald-300"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl theme-surface theme-border text-slate-100 md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t theme-border theme-surface/95">
            <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-4 text-sm text-slate-200">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left py-3 transition hover:text-emerald-300"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="relative pt-24">
        <div className="absolute -left-32 top-40 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-10 top-72 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
        <section id="home" className="pt-14 pb-28">
          <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:items-center lg:px-20">
            <div className="space-y-6 lg:max-w-2xl">
              <div className="space-y-4">
                <h1 className="text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
                  Hi, I&apos;m <span className="text-gradient">Lahiru Sampath</span>
                </h1>
                <div className="flex flex-wrap gap-3 text-lg text-slate-300">
                  <span className="rounded-full border border-slate-700/80 bg-slate-950/40 px-4 py-2 backdrop-blur-md">Software Engineer</span>
                  <span className="rounded-full border border-slate-700/80 bg-slate-950/40 px-4 py-2 backdrop-blur-md">Full-Stack Developer</span>
                  <span className="rounded-full border border-slate-700/80 bg-slate-950/40 px-4 py-2 backdrop-blur-md">React + .NET</span>
                </div>
              </div>
              <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                I build high-quality enterprise applications, mobile solutions, and polished user experiences using modern engineering practices, clean architecture, and strong collaboration.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-8 py-4 text-sm font-semibold text-slate-950 shadow-[0_25px_80px_rgba(16,185,129,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_32px_120px_rgba(16,185,129,0.35)]"
                >
                  View Projects
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-700 px-8 py-4 text-sm font-semibold text-slate-100 transition hover:border-emerald-400 hover:text-emerald-300"
                >
                  Contact Me
                </button>
              </div>
              <div className="flex items-center gap-4 pt-4 text-slate-400">
                <a href={LINK_GITHUB} target="_blank" rel="noreferrer" className="transition hover:text-cyan-300">
                  <Github size={20} />
                </a>
                <a href={LINK_LINKEDIN} target="_blank" rel="noreferrer" className="transition hover:text-cyan-300">
                  <Linkedin size={20} />
                </a>
                <a href={LINK_MAILTO} className="transition hover:text-cyan-300">
                  <Mail size={20} />
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-lg lg:order-last">
              <div className="absolute -left-12 top-10 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl" />
              <div className="absolute right-0 bottom-0 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-slate-700/40 bg-slate-950/80 p-8 shadow-[0_40px_120px_rgba(15,23,42,0.45)] backdrop-blur-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-emerald-500/10 to-violet-500/10 opacity-60" />
                <div className="relative h-[560px] w-full rounded-[1.75rem] bg-slate-950/90 p-6">
                  <div className="relative z-10 flex flex-col items-center pt-8 text-center text-slate-200">
                    <div className="relative h-[250px] w-[250px] overflow-hidden rounded-[2.5rem] border border-slate-700/60 bg-slate-950/80 shadow-[0_30px_90px_rgba(15,23,42,0.35)]">
                      <img
                        src={PROFILE_IMAGE}
                        alt="Lahiru Sampath"
                        onError={(event) => {
                          const target = event.currentTarget as HTMLImageElement;
                          const path = new URL(target.src).pathname;
                          if (path.endsWith("/profile.png") || path.endsWith("/profile.jpg")) {
                            target.src = "/profile.svg";
                          }
                        }}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <p className="mt-8 text-sm uppercase tracking-[0.35em] text-cyan-300">Profile</p>
                    <h3 className="mt-4 text-3xl font-bold">Software Engineer</h3>
                    <p className="mt-3 text-sm text-slate-400">CINEC Campus | Intern</p>
                    <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs text-slate-400">
                      <span className="rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-2">React</span>
                      <span className="rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-2">.NET</span>
                      <span className="rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-2">Java</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-20">
            <SectionHeader icon={<User size={20} />} title="About Me" />
            <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-6">
                <div className="rounded-[2rem] border border-slate-700/40 bg-slate-950/80 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.3)]">
                  <p className="text-slate-300 leading-8">
                    I&apos;m a dedicated Software Engineering undergraduate currently pursuing a BSc (Hons) in Computer Science at CINEC Campus. I have hands-on experience as a Software Engineering Intern, contributing to both software development and quality assurance activities.
                  </p>
                  <p className="mt-4 text-slate-300 leading-8">
                    I have developed strong technical skills in .NET, React, Java, PHP, Python, SQL, and modern software engineering practices. I am eager to further strengthen my expertise and contribute to high-quality software solutions.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {[
                    { label: "Location", value: "Matara, Sri Lanka" },
                    { label: "Email", value: CONTACT_EMAIL, href: LINK_MAILTO },
                    { label: "Phone", value: "+94 785 590 631" },
                    { label: "Open", value: "Internships" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-3xl border border-slate-700/40 bg-slate-950/80 p-5">
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{item.label}</p>
                      <p className="mt-3 text-lg font-semibold text-slate-100">
                        {"href" in item && item.href ? (
                          <a href={item.href} className="transition hover:text-cyan-300">
                            {item.value}
                          </a>
                        ) : (
                          item.value
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[2rem] border border-slate-700/40 bg-slate-950/80 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.3)]">
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Work Summary</p>
                <h3 className="mt-5 text-2xl font-bold text-white">Software Engineer Intern</h3>
                <ul className="mt-8 space-y-4 text-slate-300">
                  <li>Developed enterprise applications with .NET and React.</li>
                  <li>Integrated REST APIs and supported full-stack delivery.</li>
                  <li>Improved performance via optimized SQL Server queries.</li>
                  <li>Participated in QA, code reviews, and production support.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="relative py-24">
          <div className="absolute inset-0 overflow-hidden rounded-[3rem] bg-slate-950/80">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-40"
              style={{ backgroundImage: `url(${SKILLS_BACKGROUND_IMAGE})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/70 to-slate-950/95" />
          </div>
          <div className="relative mx-auto max-w-7xl px-6 lg:px-20">
            <SectionHeader icon={<Layers size={20} />} title="Skills" />
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {SKILLS.map((category) => (
                <div key={category.category} className="rounded-[2rem] border border-slate-700/40 bg-slate-950/80 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.3)]">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{category.category}</h3>
                  </div>
                  <div className="space-y-5">
                    {category.items.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex items-center justify-between text-sm text-slate-300">
                          <span>{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-900">
                          <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all" style={{ width: `${skill.level}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-20">
            <SectionHeader icon={<ExternalLink size={20} />} title="Projects" />
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {PROJECTS.map((project) => (
                <div key={project.title} className="group relative overflow-hidden rounded-[2rem] border border-slate-700/40 bg-slate-950/80 shadow-[0_40px_100px_rgba(15,23,42,0.35)] transition hover:-translate-y-1 hover:shadow-[0_50px_120px_rgba(16,185,129,0.22)]">
                  <div className={`h-56 ${project.gradient} absolute inset-x-0 top-0 overflow-hidden`}></div>
                  <div className="relative p-6 pt-40">
                    <div className="mb-5 rounded-3xl border border-slate-900/40 bg-slate-950/95 p-4 text-slate-300 shadow-[inset_0_0_30px_rgba(0,0,0,0.15)]">
                      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    </div>
                    <p className="text-slate-300 leading-7">{project.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-slate-700/50 px-3 py-1 text-xs uppercase tracking-[0.15em] text-slate-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-8 flex items-center gap-3 opacity-0 transition group-hover:opacity-100">
                      <button className="inline-flex items-center gap-2 rounded-2xl bg-cyan-400/10 px-4 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400/20">
                        <ExternalLink size={16} /> View Project
                      </button>
                      <a
                        href={LINK_GITHUB}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-2xl border border-slate-700/60 bg-slate-950/90 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-300"
                      >
                        <Github size={16} /> GitHub
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-20">
            <SectionHeader icon={<Briefcase size={20} />} title="Experience" />
            <div className="relative mt-12 pl-12 before:absolute before:left-6 before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-cyan-400/40 before:to-slate-800">
              {EXPERIENCE.map((item, index) => (
                <div key={item.role} className="relative mb-10 pl-8">
                  <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.35)]" />
                  <div className="rounded-[2rem] border border-slate-700/40 bg-slate-950/80 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.25)]">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                        <p className="text-slate-400">{item.company}</p>
                      </div>
                      <span className="rounded-full bg-slate-900/90 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-400">
                        {item.period}
                      </span>
                    </div>
                    <p className="mt-5 text-slate-300 leading-7">{item.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.highlights.slice(0, 5).map((highlight) => (
                        <span key={highlight} className="rounded-full border border-slate-700/40 bg-slate-900/80 px-3 py-1 text-xs text-slate-400">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-20">
            <SectionHeader icon={<GraduationCap size={20} />} title="Education" />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {EDUCATION.map((school) => (
                <div key={school.degree} className="rounded-[2rem] border border-slate-700/40 bg-slate-950/80 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.25)]">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{school.degree}</h3>
                      <p className="mt-2 text-slate-400">{school.institution}</p>
                    </div>
                    <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-cyan-300">
                      {school.period}
                    </span>
                  </div>
                  <p className="mt-5 text-slate-300 leading-7">{school.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="certifications" className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-20">
            <SectionHeader icon={<BookOpen size={20} />} title="Certifications" />
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert} className="rounded-[2rem] border border-slate-700/40 bg-slate-950/80 p-6 text-slate-300 shadow-[0_30px_80px_rgba(15,23,42,0.25)]">
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="languages" className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-20">
            <SectionHeader icon={<CircleDot size={20} />} title="Languages" />
            <div className="mt-12 flex flex-wrap gap-4">
              {LANGUAGES.map((language) => (
                <span key={language} className="rounded-full border border-slate-700/40 bg-slate-950/80 px-5 py-3 text-sm text-slate-300 shadow-[0_25px_70px_rgba(15,23,42,0.18)]">
                  {language}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-20">
            <SectionHeader icon={<Mail size={20} />} title="Contact" />
            <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-[2rem] border border-slate-700/40 bg-slate-950/80 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.3)]">
                <p className="text-slate-300 leading-8">
                  I&apos;m available for internship and junior engineer opportunities. Reach out to discuss projects, collaboration, or potential roles.
                </p>
                <div className="mt-10 space-y-4 text-slate-300">
                  <a
                    href={LINK_MAILTO}
                    className="flex items-center gap-3 rounded-3xl border border-slate-700/50 bg-slate-900/80 px-5 py-4 transition hover:border-cyan-400/35 hover:text-cyan-200"
                  >
                    <Mail size={18} className="shrink-0 text-cyan-300" />
                    <div>
                      <p className="text-sm text-slate-400">Email</p>
                      <p className="font-medium text-white">{CONTACT_EMAIL}</p>
                    </div>
                  </a>
                  <a
                    href={LINK_LINKEDIN}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-3xl border border-slate-700/50 bg-slate-900/80 px-5 py-4 transition hover:border-cyan-400/35 hover:text-cyan-200"
                  >
                    <Linkedin size={18} className="shrink-0 text-cyan-300" />
                    <div>
                      <p className="text-sm text-slate-400">LinkedIn</p>
                      <p className="font-medium text-white">linkedin.com/in/lahiru-sampath-193705344</p>
                    </div>
                  </a>
                  <a
                    href={LINK_GITHUB}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-3xl border border-slate-700/50 bg-slate-900/80 px-5 py-4 transition hover:border-cyan-400/35 hover:text-cyan-200"
                  >
                    <Github size={18} className="shrink-0 text-cyan-300" />
                    <div>
                      <p className="text-sm text-slate-400">GitHub</p>
                      <p className="font-medium text-white">github.com/Sampathcode12</p>
                    </div>
                  </a>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="space-y-5 rounded-[2rem] border border-slate-700/40 bg-slate-950/80 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.35)]">
                <div>
                  <label className="mb-2 block text-sm uppercase tracking-[0.2em] text-slate-500">Name</label>
                  <input className="w-full rounded-3xl border theme-border theme-input px-5 py-4 text-slate-100 outline-none transition focus:border-cyan-400/60" placeholder="Your name" />
                </div>
                <div>
                  <label className="mb-2 block text-sm uppercase tracking-[0.2em] text-slate-500">Email</label>
                  <input className="w-full rounded-3xl border theme-border theme-input px-5 py-4 text-slate-100 outline-none transition focus:border-cyan-400/60" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="mb-2 block text-sm uppercase tracking-[0.2em] text-slate-500">Message</label>
                  <textarea className="w-full rounded-3xl border theme-border theme-input px-5 py-4 text-slate-100 outline-none transition focus:border-cyan-400/60 resize-none" rows={5} placeholder="Hello Sampath..." />
                </div>
                <button className="w-full rounded-3xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t theme-border py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-20 text-sm text-slate-500">
          <p>� 2026 Lahiru Sampath. Built for modern engineering careers.</p>
          <p className="text-cyan-300">Premium portfolio experience</p>
        </div>
      </footer>

      {showBack && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-300 shadow-[0_20px_70px_rgba(16,185,129,0.2)] transition hover:bg-cyan-400/25"
          aria-label="Back to top"
        >
          <ArrowUp size={22} />
        </button>
      )}

      {showToast && (
        <div className="fixed bottom-24 right-6 z-50 rounded-3xl border border-slate-700/50 bg-slate-950/95 px-6 py-4 text-slate-100 shadow-[0_30px_100px_rgba(15,23,42,0.5)]">
          <p className="text-sm font-semibold">Message sent successfully!</p>
          <p className="mt-1 text-slate-400">I&apos;ll get back to you soon.</p>
        </div>
      )}
    </div>
  );
}
