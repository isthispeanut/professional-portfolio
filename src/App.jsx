import { useEffect, useState } from "react";

const sections = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Education", "#education"],
  ["Certifications", "#certifications"],
];

const skillGroups = [
  {
    number: "01",
    title: "Programming & development",
    skills: [
      { name: "JavaScript", icon: "javascript.svg", iconLabel: "JS" },
      { name: "HTML", icon: "html5.svg", iconLabel: "HTML" },
      { name: "CSS", icon: "css.svg", iconLabel: "CSS" },
      { name: "React.js", icon: "react.svg", iconLabel: "React" },
      { name: "Vue.js", icon: "vuedotjs.svg", iconLabel: "Vue" },
      { name: "Node.js", icon: "nodedotjs.svg", iconLabel: "Node" },
    ],
  },
  {
    number: "02",
    title: "Back-end, databases & APIs",
    skills: [
      { name: "RESTful APIs", iconLabel: "API" },
      { name: "Express.js", icon: "express.svg", iconLabel: "Ex" },
      { name: "OAuth 2.0", iconLabel: "OAuth" },
      { name: "MongoDB", icon: "mongodb.svg", iconLabel: "MongoDB" },
      { name: "PostgreSQL", icon: "postgresql.svg", iconLabel: "Postgres" },
      { name: "SQL", iconLabel: "SQL" },
    ],
  },
  {
    number: "03",
    title: "Analytics & automation",
    skills: [
      { name: "Data Visualization", iconLabel: "Data" },
      { name: "Chart.js", icon: "chartdotjs.svg", iconLabel: "Chart.js" },
      { name: "Excel Automation", iconLabel: "Excel" },
      { name: "UiPath Studio", icon: "uipath.svg", iconLabel: "UiPath" },
      { name: "Workflow Automation", iconLabel: "Flow" },
      { name: "Process Mapping", iconLabel: "Map" },
    ],
  },
  {
    number: "04",
    title: "Testing, tools & UI/UX",
    skills: [
      { name: "Vitest", icon: "vitest.svg", iconLabel: "Vitest" },
      { name: "Postman", icon: "postman.svg", iconLabel: "Postman" },
      { name: "Git", icon: "git.svg", iconLabel: "Git" },
      { name: "GitHub", icon: "github.svg", iconLabel: "GitHub" },
      { name: "Vercel", icon: "vercel.svg", iconLabel: "Vercel" },
      { name: "VS Code", iconLabel: "Code" },
      { name: "Figma", icon: "figma.svg", iconLabel: "Figma" },
      { name: "Wireframing", iconLabel: "Frame" },
      { name: "User Flow Design", iconLabel: "Flow" },
    ],
  },
];

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Rolan Semilla, home">
        <span className="brand-initials">RS</span>
        <span className="brand-dot" aria-hidden="true">
          .
        </span>
      </a>
      <a className="header-name" href="#home">
        Rolan Brixx S. Semilla
      </a>
      <div className="header-actions">
        <a className="header-contact" href="#contact">
          Let&apos;s connect <Arrow diagonal />
        </a>
        <button
          className={`menu-toggle${menuOpen ? " is-open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Close main menu" : "Open main menu"}
          aria-expanded={menuOpen}
          aria-controls="main-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
      </div>
      <nav
        className={`menu-panel${menuOpen ? " is-open" : ""}`}
        id="main-menu"
        aria-label="Main navigation"
        aria-hidden={!menuOpen}
      >
        {sections.map(([label, href], index) => (
          <a href={href} onClick={closeMenu} key={href}>
            <span className="menu-index">0{index + 1}</span>
            {label}
            <Arrow diagonal />
          </a>
        ))}
        <a className="menu-contact" href="#contact" onClick={closeMenu}>
          Get in touch <Arrow diagonal />
        </a>
      </nav>
    </header>
  );
}

function SectionLabel({ number, children }) {
  return (
    <p className="section-label">
      <span>{number}</span> / {children}
    </p>
  );
}

function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-sky">
        <img
          className="hero-portrait"
          src="/images/rolan-graduation.jpg"
          alt="Rolan Brixx S. Semilla in graduation attire"
        />
        <span
          className="portrait-corner portrait-corner-top"
          aria-hidden="true"
        />
        <span
          className="portrait-corner portrait-corner-bottom"
          aria-hidden="true"
        />
      </div>
      <SectionLabel number="01">Introduction</SectionLabel>
      <div className="hero-copy">
        <p className="hero-hello">Hi, I&apos;m Rolan.</p>
        <h1>
          Curious mind.
          <br />
          <span>Thoughtful work.</span>
        </h1>
        <p className="hero-description">
          Information Technology graduate specializing in Mobile and Web
          Applications, with hands-on experience in software development,
          UI/UX design, software testing, and business process automation.
        </p>
        <div className="hero-links">
          <a className="button button-light" href="#projects">
            Explore my work <Arrow diagonal />
          </a>
          <a className="button button-outline" href="#contact">
            Let&apos;s connect <Arrow diagonal />
          </a>
        </div>
      </div>
      <div className="hero-foot">
        <span>Data Analyst · QA Analyst · Front-end Developer · UI/UX Designer</span>
        <a href="#about" aria-label="Scroll to about section">
          <span className="scroll-line" />
          Scroll to explore
        </a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section-wrap content-section about-section" id="about">
      <SectionLabel number="02">About me</SectionLabel>
      <div className="section-heading-grid">
        <p className="eyebrow">A little about me</p>
        <h2>
          Learning to turn
          <br />
          <span>curiosity into clarity.</span>
        </h2>
      </div>
      <div className="about-body">
        <p>
          I&apos;m Rolan Brixx S. Semilla, an Information Technology graduate
          specializing in Mobile and Web Applications. My hands-on experience
          spans software development, UI/UX design, software testing, and
          business process automation.
        </p>
        <p>
          I&apos;m seeking an entry-level technology role in data analysis,
          quality assurance, front-end development, or UI/UX design, where I
          can contribute and continue growing professionally. My internship
          experience includes SM Prime Holdings, Inc. and Cebu Air Inc.
        </p>
      </div>
      <div className="interest-strip" aria-label="Career interests">
        {["Data analysis", "Quality assurance", "Front-end development", "UI/UX design"].map(
          (interest, index) => (
            <span key={interest}>
              <span className="interest-index">0{index + 1}</span>
              {interest}
            </span>
          ),
        )}
      </div>
    </section>
  );
}

function Skills() {
  const [compact, setCompact] = useState(false);

  return (
    <section className="section-wrap content-section skills-section" id="skills">
      <SectionLabel number="03">Toolkit</SectionLabel>
      <div className="skills-intro">
        <div>
          <p className="eyebrow">Skills &amp; tools</p>
          <h2>
            The tools I&apos;m
            <br />
            <span>growing with.</span>
          </h2>
        </div>
        <div className="skills-controls">
          <p>
            A résumé-grounded toolkit spanning software development,
            analytics, automation, testing, and user experience.
          </p>
          <button
            className="compact-toggle"
            type="button"
            role="switch"
            aria-checked={compact}
            aria-label="Compact skills layout"
            onClick={() => setCompact((current) => !current)}
          >
            <span>Compact</span>
            <span className="toggle-track" aria-hidden="true">
              <span />
            </span>
          </button>
        </div>
      </div>
      <div className={`skill-groups${compact ? " is-compact" : ""}`}>
        {skillGroups.map((group) => (
          <article className="skill-group" key={group.number}>
            <div className="skill-group-heading">
              <span>{group.number}</span>
              <h3>{group.title}</h3>
            </div>
            <ul>
              {group.skills.map((skill) => (
                <li key={skill.name}>
                  {skill.icon ? (
                    <img
                      className="skill-icon"
                      src={`/icons/${skill.icon}`}
                      alt=""
                      loading="lazy"
                    />
                  ) : (
                    <span className="skill-icon skill-icon-fallback" aria-hidden="true">
                      {skill.iconLabel}
                    </span>
                  )}
                  <span className="skill-name">{skill.name}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

const projects = [
  {
    number: "01",
    name: "MANTRAklatan",
    role: "Project Manager & Full-Stack Developer",
    type: "Team project · MERN Stack",
    image: "/images/mantraklatan-project.png",
    imageAlt: "MANTRAKLATAN library and museum management system login page",
    description:
      "A full-stack library and museum management system featuring barcode attendance, resource borrowing, real-time notifications, and asset management across web and mobile platforms.",
  },
  {
    number: "02",
    name: "CRAVE",
    role: "UI/UX Designer",
    type: "Two-person team",
    image: "/images/crave-project.png",
    imageAlt: "CRAVE recipe recommendation app branding",
    description:
      "An Android application that recommends recipes based on user-provided ingredients, focusing on intuitive navigation and an engaging mobile user experience.",
  },
  {
    number: "03",
    name: "Enterprise Document Tracking System",
    role: "UI/UX Designer",
    type: "SM Prime Holdings, Inc.",
    description:
      "High-fidelity Figma prototypes for multiple enterprise modules, improving navigation consistency and streamlining document-processing workflows.",
  },
  {
    number: "04",
    name: "Enterprise Vendor Management Portal",
    role: "UI/UX Designer",
    type: "SM Prime Holdings, Inc.",
    description:
      "Wireframes, user flows, and high-fidelity prototypes for purchase order monitoring, payment tracking, and vendor workflows.",
  },
  {
    number: "05",
    name: "Legal Workflow Request System",
    role: "UI/UX Designer",
    type: "SM Prime Holdings, Inc.",
    description:
      "User-centered interfaces and interactive prototypes for legal request submission and approval workflows.",
  },
];

function Projects() {
  return (
    <section
      className="section-wrap content-section projects-section"
      id="projects"
    >
      <SectionLabel number="04">Selected work</SectionLabel>
      <div className="projects-heading">
        <div>
          <p className="eyebrow">{projects.length} projects</p>
          <h2>
            Work with
            <br />
            <span>purpose.</span>
          </h2>
        </div>
        <p>
          Software and interface projects, from a full-stack management system
          to enterprise workflow prototypes.
        </p>
      </div>
      <div className="project-grid">
        {projects.map((project) => {
          const ProjectCard = project.image ? "a" : "article";
          const projectLinkProps = project.image
            ? {
                href: project.image,
                target: "_blank",
                rel: "noreferrer",
                "aria-label": `Open ${project.name} project image`,
              }
            : {};

          return (
            <ProjectCard
              className="project-card"
              key={project.number}
              {...projectLinkProps}
            >
              <div
                className={`project-art${project.image ? " has-image" : ""}`}
              >
                {project.image ? (
                  <img
                    className="project-image"
                    src={project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                  />
                ) : null}
                <span className="project-art-index" aria-hidden="true">
                  {project.number}
                </span>
                {!project.image ? (
                  <span className="project-art-title">{project.name}</span>
                ) : null}
                <span className="project-art-caption">{project.type}</span>
              </div>
              <div className="project-details">
                <div className="project-topline">
                  <span>{project.role}</span>
                  <span>{project.number}</span>
                </div>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-kind">{project.type}</p>
              </div>
            </ProjectCard>
          );
        })}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section
      className="section-wrap content-section experience-section"
      id="experience"
    >
      <SectionLabel number="05">Experience</SectionLabel>
      <div className="experience-heading">
        <p className="eyebrow">Learning in the workplace</p>
        <h2>
          Experience
          <br />
          <span>that shapes me.</span>
        </h2>
      </div>
      <article className="experience-card">
        <div className="experience-index">01</div>
        <div className="experience-main">
          <div className="experience-top">
            <div>
              <span className="experience-type">RPA &amp; E-Learning Intern</span>
              <h3>SM Prime Holdings, Inc.</h3>
              <p className="experience-meta">On-site · Apr 2026 – Jul 2026</p>
            </div>
            <img
              className="company-logo"
              src="/images/sm-prime-logo.png"
              alt="SM Prime Holdings logo"
            />
          </div>
          <ul className="experience-points">
            <li>Developed workflow automation solutions using UiPath to improve business efficiency.</li>
            <li>Designed Figma prototypes for enterprise systems aligned with business requirements.</li>
            <li>Collaborated with stakeholders to analyze processes and translate them into technical solutions.</li>
            <li>Supported digital transformation initiatives through automation and UI improvements.</li>
          </ul>
          <div
            className="experience-gallery"
            aria-label="SM Prime internship photos"
          >
            {[
              ["sm-prime-intern-team.jpg", "Internship checkpoint with the team"],
              ["sm-prime-office-team.jpg", "SM Prime office team"],
              ["sm-prime-team-portrait.jpg", "SM Prime internship team"],
              ["sm-prime-office.jpg", "At the SM Prime office"],
              ["sm-prime-intern-team-2.jpg", "Internship team gathering"],
              ["sm-prime-intern-certificates.jpg", "Internship certificate gathering"],
              ["sm-prime-intern-award.jpg", "SM Prime internship recognition"],
              ["sm-prime-intern-checkpoint.jpg", "SM Prime internship checkpoint"],
            ].map(([src, alt]) => (
              <figure key={src}>
                <img src={`/images/${src}`} alt={alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </article>
      <article className="experience-card">
        <div className="experience-index">02</div>
        <div className="experience-main">
          <div className="experience-top">
            <div>
              <span className="experience-type">Back-end Development Intern</span>
              <h3>Cebu Air Inc.</h3>
              <p className="experience-meta">Hybrid · Nov 2025 – Jan 2026</p>
            </div>
            <img
              className="company-logo cebu-pacific-logo"
              src="/images/cebu-pacific-logo.png"
              alt="Cebu Pacific logo"
            />
          </div>
          <ul className="experience-points">
            <li>Built and enhanced RESTful APIs with OAuth 2.0 authentication.</li>
            <li>Developed a Vue.js data visualization system using reusable components.</li>
            <li>Implemented unit testing (Vitest) achieving near 100% code coverage.</li>
            <li>Deployed applications via Vercel and documented system architecture.</li>
          </ul>
          <div
            className="experience-gallery"
            aria-label="Cebu Pacific internship photos"
          >
            {[
              ["cebu-pacific-intern-team.jpg", "Cebu Pacific internship team"],
              ["cebu-pacific-office-team.jpg", "Cebu Pacific office team"],
              ["cebu-pacific-office-photo.jpg", "At the Cebu Pacific office"],
              ["cebu-pacific-office-portrait.jpg", "At the Cebu Pacific sign"],
            ].map(([src, alt]) => (
              <figure key={src}>
                <img src={`/images/${src}`} alt={alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
}

function Education() {
  return (
    <section
      className="section-wrap content-section education-section"
      id="education"
    >
      <SectionLabel number="06">Education</SectionLabel>
      <div className="experience-heading">
        <p className="eyebrow">Academic foundation</p>
        <h2>
          Information
          <br />
          <span>Technology.</span>
        </h2>
      </div>
      <article className="education-card">
        <span className="experience-type">2022 – 2026</span>
        <div>
          <img
            className="education-logo"
            src="/images/nu-moa-logo.jpg"
            alt="National University Mall of Asia Campus logo"
          />
          <h3>National University – Mall of Asia Campus</h3>
          <p>
            Bachelor of Science in Information Technology
            <br />
            Specialization in Mobile and Web Applications
          </p>
        </div>
      </article>
    </section>
  );
}

const certifications = [
  {
    name: "AI Fluency: Framework & Foundations",
    issuer:
      "Anthropic × University College Cork × Ringling College of Art and Design × Higher Education Authority × National Forum",
    date: "Jun 2026",
    file: "ai-fluency.pdf",
  },
  {
    name: "Pearson IT Specialist – Cybersecurity",
    issuer: "Pearson",
    date: "Apr 2026",
    file: "certiport-cybersecurity.pdf",
  },
  {
    name: "Pearson IT Specialist – Databases",
    issuer: "Pearson",
    date: "Apr 2026",
    file: "certiport-databases.pdf",
  },
  {
    name: "Fundamentals of Python Programming",
    issuer: "Data Analytics Philippines",
    date: "Apr 2025",
    file: "python-fundamentals.pdf",
  },
  {
    name: "Python Essentials 1",
    issuer: "Cisco Networking Academy in collaboration with OpenEDG Python Institute",
    date: "Sep 2026",
    file: "cisco-python-essentials.pdf",
  },
];

function Certifications() {
  return (
    <section
      className="section-wrap content-section certifications-section"
      id="certifications"
    >
      <SectionLabel number="07">Certifications</SectionLabel>
      <div className="projects-heading">
        <div>
          <p className="eyebrow">Courses &amp; credentials</p>
          <h2>
            Always
            <br />
            <span>learning.</span>
          </h2>
        </div>
      </div>
      <div className="certification-list">
        {certifications.map((certification, index) => (
          <article className="certification-card" key={certification.name}>
            <span className="certification-index">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3>
                {certification.file ? (
                  <a
                    href={`/certificates/${certification.file}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {certification.name}
                  </a>
                ) : (
                  certification.name
                )}
              </h3>
              <p>{certification.issuer}</p>
              {certification.file ? (
                <div className="certificate-actions">
                  <a
                    href={`/certificates/${certification.file}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View certificate <Arrow diagonal />
                  </a>
                  <a
                    href={`/certificates/${certification.file}`}
                    download
                  >
                    Download PDF <span aria-hidden="true">↓</span>
                  </a>
                </div>
              ) : (
                <span className="certificate-pending">
                  Certificate PDF not provided
                </span>
              )}
            </div>
            <span className="certification-date">{certification.date}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="section-wrap contact-inner">
        <SectionLabel number="08">Contact</SectionLabel>
        <p className="eyebrow">Open to entry-level opportunities</p>
        <h2>
          Let&apos;s make
          <br />
          <span>something matter.</span>
        </h2>
        <p className="contact-copy">
          Interested in connecting? Reach out by email or find me on LinkedIn.
        </p>
        <div className="contact-links">
          <a
            className="button button-light contact-button"
            href="mailto:semillarolan@gmail.com"
          >
            Email me <Arrow diagonal />
          </a>
          <a
            className="button button-outline contact-button"
            href="https://linkedin.com/in/rolansemilla"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <Arrow diagonal />
          </a>
        </div>
        <div className="contact-details">
          <a href="mailto:semillarolan@gmail.com">semillarolan@gmail.com</a>
          <a href="tel:+639660848347">+63 966 084 8347</a>
          <span>General Trias, Cavite, Philippines</span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <a className="brand footer-brand" href="#home" aria-label="Back to top">
        <span className="brand-initials">RS</span>
        <span className="brand-dot" aria-hidden="true">
          .
        </span>
      </a>
      <p>General Trias, Cavite, Philippines</p>
      <a href="#home">Back to top ↑</a>
      <span>© {new Date().getFullYear()}</span>
    </footer>
  );
}

export default function App() {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const revealTargets = document.querySelectorAll(
      [
        ".content-section > .section-label",
        ".section-heading-grid",
        ".about-body",
        ".interest-strip",
        ".skills-intro",
        ".skill-group",
        ".projects-heading",
        ".project-card",
        ".experience-heading",
        ".experience-card",
        ".experience-gallery figure",
        ".education-card",
        ".certification-card",
        ".contact-inner > *",
      ].join(", "),
    );

    if (reduceMotion || !("IntersectionObserver" in window)) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -48px 0px", threshold: 0.08 },
    );

    revealTargets.forEach((target, index) => {
      target.classList.add("reveal-on-scroll");
      target.style.setProperty("--reveal-delay", `${(index % 4) * 55}ms`);
      observer.observe(target);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const hero = document.querySelector(".hero");
    const heroPortrait = document.querySelector(".hero-sky");

    if (
      !hero ||
      !heroPortrait ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches
    ) {
      return undefined;
    }

    function moveHero(event) {
      const bounds = hero.getBoundingClientRect();
      const offsetX = (event.clientX - bounds.left) / bounds.width - 0.5;
      const offsetY = (event.clientY - bounds.top) / bounds.height - 0.5;
      heroPortrait.style.setProperty(
        "--parallax-x",
        `${(offsetX * 8).toFixed(2)}px`,
      );
      heroPortrait.style.setProperty(
        "--parallax-y",
        `${(offsetY * 8).toFixed(2)}px`,
      );
    }

    function resetHero() {
      heroPortrait.style.setProperty("--parallax-x", "0px");
      heroPortrait.style.setProperty("--parallax-y", "0px");
    }

    hero.addEventListener("pointermove", moveHero, { passive: true });
    hero.addEventListener("pointerleave", resetHero);

    return () => {
      hero.removeEventListener("pointermove", moveHero);
      hero.removeEventListener("pointerleave", resetHero);
    };
  }, []);

  useEffect(() => {
    const glow = document.querySelector(".cursor-glow");

    if (
      !glow ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches
    ) {
      return undefined;
    }

    let animationFrame = 0;

    function moveGlow(event) {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }

      animationFrame = window.requestAnimationFrame(() => {
        glow.style.setProperty("--cursor-x", `${event.clientX}px`);
        glow.style.setProperty("--cursor-y", `${event.clientY}px`);
        glow.classList.add("is-active");
        animationFrame = 0;
      });
    }

    function hideGlow(event) {
      if (!event.relatedTarget) {
        glow.classList.remove("is-active");
      }
    }

    function resetGlow() {
      glow.classList.remove("is-active");
    }

    window.addEventListener("pointermove", moveGlow, { passive: true });
    window.addEventListener("pointerout", hideGlow);
    window.addEventListener("blur", resetGlow);

    return () => {
      window.removeEventListener("pointermove", moveGlow);
      window.removeEventListener("pointerout", hideGlow);
      window.removeEventListener("blur", resetGlow);
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <>
      <div className="cursor-glow" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
