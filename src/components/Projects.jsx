import React, { useState } from "react";
import "./Projects.css";

const projects = [
  {
    title: "Portfolio Website",
    desc: "A personal portfolio that highlights projects, skills, and contact information with smooth UI and accessibility in mind.",
    tags: ["React", "CSS", "Accessibility"],
    demo: "#",
    code: "#",
    bg: "linear-gradient(135deg,#073642,#002b36)",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "E‑Commerce UI",
    desc: "A responsive product listing and cart UI with animated interactions and state management.",
    tags: ["React", "Context API", "Responsive"],
    demo: "#",
    code: "#",
    bg: "linear-gradient(135deg,#2a2a72,#009ffd)",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Weather Dashboard",
    desc: "Real-time weather dashboard using external APIs with caching and graceful error handling.",
    tags: ["JavaScript", "API", "UX"],
    demo: "#",
    code: "#",
    bg: "linear-gradient(135deg,#0f3443,#007991)",
    image: "https://images.unsplash.com/photo-1501973801540-537f08ccae7b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Task Manager",
    desc: "A lightweight task manager with drag-drop, filtering and persistent local storage.",
    tags: ["React", "LocalStorage", "UX"],
    demo: "#",
    code: "#",
    bg: "linear-gradient(135deg,#3a1c71,#d76d77)",
    image: "https://images.unsplash.com/photo-1555949963-3f3ed7c7f9b6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Chat UI Prototype",
    desc: "Prototype of a messaging interface with accessible chat bubbles and keyboard navigation.",
    tags: ["HTML", "CSS", "Accessibility"],
    demo: "#",
    code: "#",
    bg: "linear-gradient(135deg,#0b486b,#f56217)",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Real-time Chat App",
    desc: "A real-time chat application using WebSockets with channels, typing indicators and message persistence.",
    tags: ["React", "WebSocket", "UX"],
    demo: "#",
    code: "#",
    bg: "linear-gradient(135deg,#1f4037,#99f2c8)",
    image: "https://images.unsplash.com/photo-1517167685289-7b6f1f1d5e54?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Blog CMS",
    desc: "A small content management interface for blog posts with editor, media uploads and preview.",
    tags: ["React", "Markdown", "Uploads"],
    demo: "#",
    code: "#",
    bg: "linear-gradient(135deg,#42275a,#734b6d)",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Analytics Dashboard",
    desc: "Interactive charts and KPIs powered by light-weight charting libraries, with filters and export.",
    tags: ["Charts", "Performance", "UI"],
    demo: "#",
    code: "#",
    bg: "linear-gradient(135deg,#0f2027,#203a43)",
    image: "https://images.unsplash.com/photo-1508385082359-f8fd74997d8d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Recipe Finder",
    desc: "A search-driven recipe finder with ingredient filters, responsive cards and saved favorites.",
    tags: ["API", "Responsive", "Accessibility"],
    demo: "#",
    code: "#",
    bg: "linear-gradient(135deg,#ff7e5f,#feb47b)",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-inner">
        <h2 className="projects-title">Selected Projects</h2>
        <p className="projects-sub">A curated selection of front-end work — UI, interactions, and APIs.</p>

        <div id="projects-grid" className="projects-grid">
          {visibleProjects.map((p) => (
            <article key={p.title} className="project-card" tabIndex={0} aria-label={`${p.title} project`}>
              <div className="project-thumb" style={{ background: p.bg }} aria-hidden="true">
                {p.image ? (
                  <img src={p.image} alt={`${p.title} screenshot`} className="project-image" loading="lazy" />
                ) : null}
                <div className="thumb-overlay">{p.title}</div>
              </div>

              <div className="project-body">
                <h3 className="project-name">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>

                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>

                <div className="project-ctas">
                  <a className="btn btn-sm" href={p.demo} target="_blank" rel="noreferrer" aria-label={`Open demo for ${p.title}`}>
                    Live
                  </a>
                  <a className="btn btn-sm ghost" href={p.code} target="_blank" rel="noreferrer" aria-label={`Open code for ${p.title}`}>
                    Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {projects.length > 3 && (
          <div className="projects-controls">
            <button
              className="btn btn-sm ghost show-more"
              aria-expanded={showAll}
              aria-controls="projects-grid"
              onClick={() => setShowAll((v) => !v)}
            >
              {showAll ? "Show less" : `Show more (${projects.length - 3})`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
