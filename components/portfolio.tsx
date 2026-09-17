import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Mail,
  Menu,
} from "lucide-react";
import { experience, problems, projects, toolbox } from "@/data/portfolio";
import { ProjectVisual } from "@/components/project-visuals";
import { SystemVisual } from "@/components/system-visual";
import { ThemeToggle } from "@/components/theme-toggle";

const github = "https://github.com/gabimonutti";
const linkedin = "https://www.linkedin.com/in/gabriel-monutti/";
const email = "mailto:gabimonutti1@gmail.com";

function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a className={`external-link ${className}`} href={href} target="_blank" rel="noreferrer">
      {children}
      <ArrowUpRight aria-hidden="true" />
    </a>
  );
}

function SectionHeading({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <div className="section-title-row">
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
    </div>
  );
}

export function Portfolio() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <a className="monogram" href="#top" aria-label="Gabriel Monutti, home">
          GM
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#toolbox">Stack</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="header-actions">
          <ExternalLink href={github} className="header-social">
            GitHub
          </ExternalLink>
          <ExternalLink href={linkedin} className="header-social">
            LinkedIn
          </ExternalLink>
          <ThemeToggle />
          <details className="mobile-menu">
            <summary aria-label="Open navigation">
              <Menu aria-hidden="true" />
            </summary>
            <nav aria-label="Mobile navigation">
              <a href="#about">About</a>
              <a href="#work">Work</a>
              <a href="#toolbox">Stack</a>
              <a href="#contact">Contact</a>
            </nav>
          </details>
        </div>
      </header>

      <main id="main">
        <section className="hero shell" id="top">
          <div className="hero-copy">
            <p className="hero-name">Gabriel Monutti</p>
            <h1>
              I build the systems
              <span>behind digital products.</span>
            </h1>
            <p className="hero-description">
              Backend-focused engineer working mainly with Node.js, TypeScript, and PostgreSQL.
              I build APIs, integrations, and business systems that connect products, platforms,
              and real-world operations.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="#work">
                View my work
                <ArrowDown aria-hidden="true" />
              </a>
              <a className="text-action" href={email}>
                Get in touch
                <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
            <div className="hero-meta" aria-label="Professional summary">
              <span>Backend Engineer</span>
              <span>3+ years experience</span>
              <span>Córdoba, Argentina</span>
              <span>Open to remote opportunities</span>
            </div>
          </div>
          <SystemVisual />
        </section>

        <section className="current-strip" aria-label="Current work and focus">
          <div className="shell current-grid">
            <div>
              <span>Currently</span>
              <strong>Backend Engineer @ Wuala</strong>
              <small>ERP ↔ e-commerce integrations</small>
            </div>
            <div>
              <span>Based in</span>
              <strong>Argentina</strong>
              <small>UTC−3</small>
            </div>
            <div>
              <span>Focus</span>
              <strong>Backend · APIs · Systems</strong>
              <small>Products that solve real operations</small>
            </div>
          </div>
        </section>

        <section className="about-section shell" id="about">
          <SectionHeading title="A little about me" />
          <div className="about-layout">
            <p className="about-lead">
              I&apos;m a Backend Engineer with 3+ years of experience building business
              applications, REST APIs, and system integrations.
            </p>
            <div className="about-body">
              <p>
                I mainly work with Node.js, TypeScript, Express, and PostgreSQL, while also
                working across frontend, databases, and cloud infrastructure when a product
                requires it.
              </p>
              <p>
                I enjoy understanding how a business works, turning those requirements into
                software, and building systems that are reliable, maintainable, and practical.
              </p>
            </div>
          </div>
        </section>

        <section className="experience-section shell" id="experience">
          <SectionHeading
            title="Experience"
            description="The work behind the stack: systems, responsibilities, and the problems they had to solve."
          />
          <div className="experience-trace">
            {experience.map((item, index) => (
              <article className="experience-entry" key={item.company}>
                <div className="trace-marker" aria-hidden="true">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <p className="experience-period">{item.period}</p>
                <div className="experience-company">
                  <h3>{item.company}</h3>
                  <p>{item.role}</p>
                </div>
                <div className="experience-copy">
                  <p>{item.description}</p>
                  <p className="experience-detail">{item.details}</p>
                  <ul className="technology-list" aria-label={`${item.company} technologies`}>
                    {item.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="projects-section" id="work">
          <div className="shell">
            <SectionHeading
              title="Things I’ve built"
              description="Four products, each showing a different part of how I work."
            />
          </div>

          <div className="project-list">
            {projects.map((project, index) => (
              <article className={`project-chapter project-${project.id}`} key={project.id}>
                <div className="shell project-layout">
                  <div className="project-copy">
                    <div className="project-index">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <span>{project.category}</span>
                    </div>
                    <h3>{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <p className="project-contribution">{project.contribution}</p>
                    <ul className="technology-list" aria-label={`${project.title} technologies`}>
                      {project.technologies.map((technology) => (
                        <li key={technology}>{technology}</li>
                      ))}
                    </ul>
                    <div className="project-links">
                      <ExternalLink href={project.href}>Visit project</ExternalLink>
                      {project.secondaryHref ? (
                        <ExternalLink href={project.secondaryHref}>
                          {project.secondaryLabel}
                        </ExternalLink>
                      ) : null}
                    </div>
                  </div>
                  <ProjectVisual project={project.id} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="problems-section shell">
          <SectionHeading
            title="Problems I like solving"
          />
          <ol className="problems-list">
            {problems.map((problem, index) => (
              <li key={problem.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{problem.title}</h3>
                <p>{problem.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="toolbox-section shell" id="toolbox">
          <SectionHeading
            title="My toolbox"
            description="Tools I use in context—not a wall of logos or arbitrary proficiency scores."
          />
          <div className="toolbox-grid">
            {toolbox.map((group) => (
              <div className="toolbox-group" key={group.label}>
                <h3>{group.label}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="closing-section shell">
          <div className="education-block">
            <h2>Information Systems Engineer</h2>
            <p>Universidad Tecnológica Nacional · Argentina</p>
            <div>
              <span>2020 — 2024</span>
              <span>Final average · 8.98 / 10</span>
            </div>
          </div>
          <div className="principles-block">
            <p>I like understanding the business behind the software.</p>
            <p>I prefer simple solutions that are easy to maintain.</p>
            <p>
              I&apos;m more interested in how a system works than in how impressive its stack
              sounds.
            </p>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="shell contact-layout">
            <div>
              <h2>Let&apos;s build something useful.</h2>
              <span className="contact-status">
                <i aria-hidden="true" />
                Open to remote opportunities
              </span>
            </div>
            <div className="contact-copy">
              <p>
                I&apos;m open to backend, full-stack, and product-oriented engineering
                opportunities.
              </p>
              <div className="contact-links">
                <a className="primary-action" href={email}>
                  <Mail aria-hidden="true" />
                  Email me
                </a>
                <ExternalLink href={github}>
                  <Code2 aria-hidden="true" />
                  GitHub
                </ExternalLink>
                <ExternalLink href={linkedin}>
                  <BriefcaseBusiness aria-hidden="true" />
                  LinkedIn
                </ExternalLink>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer shell">
        <div>
          <strong>Gabriel Monutti</strong>
          <span>Backend Engineer</span>
        </div>
        <nav className="footer-links" aria-label="Footer links">
          <a href={email}>Email</a>
          <a href={github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </nav>
        <p>© 2026 · Built with Next.js and TypeScript</p>
      </footer>
    </>
  );
}
