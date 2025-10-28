import React from "react";
import myPhoto from "../assets/myphoto.jpg.png";
import "./AboutMe.css";

const cards = [
  {
    title: "💡How I Can Help You ?",
    icon: "💡",
    highlight: true,
    summary:
      "I turn ideas into polished, usable web experiences — fast. Below are the concrete deliverables I typically build and the business value you get.",
    items: [
      {
        title: "On‑brand design (Tailwind + daisyUI)",
        benefit:
          "Pixel-perfect, consistent UIs using Tailwind and daisyUI that match your brand and speed development",
      },
      {
        title: "Responsive & cross‑device",
        benefit:
          "Layouts and interactions that perform and look great on phones, tablets, and desktops",
      },
      {
        title: "Interactive UI (React & JS)",
        benefit:
          "Component-driven, reactive interfaces with smooth UX and predictable state management",
      },
      {
        title: "Speed, accessibility & SEO basics",
        benefit:
          "Performance tuning, WCAG-friendly markup, and SEO-minded structure to increase reach and usability",
      },
      {
        title: "Easy to maintain & update",
        benefit:
          "Clean architecture, documented components and clear patterns for fast future changes",
      },
      {
        title: "Landing pages & business sites",
        benefit:
          "Conversion-focused pages and professional sites that present your product or service clearly",
      },
      {
        title: "Dashboards & React apps",
        benefit:
          "Scalable React applications and admin dashboards built for data clarity and speed",
      },
      {
        title: "Forms, bookings, analytics & integrations",
        benefit:
          "Robust forms, booking flows, analytics and third‑party integrations (Stripe, Google Analytics, Zapier) wired and tested",
      },
    ],
  },
  {
    title: "Why Hire Me?",
    text: "I combine strong technical skills with creativity, fast delivery, and clear communication to bring your ideas to life.",
  },
];

export default function AboutMe() {
  return (
    <section id="about" className="about-section new-style">
      <div className="about-inner">
        <div className="about-hero">
          <div className="about-content">
            <div className="about-header-hero">
              <h2>About Me</h2>
              <p className="muted">
                <span className="role-badge">Computer Engineer</span>
                <span className="role-badge">Frontend Web Developer</span>
                — React, JavaScript, UI/UX
              </p>
            </div>

            <p className="lead">I build polished, accessible, and maintainable web experiences that drive results. I focus on performance, clear UX, and component-driven architecture so teams ship faster and users accomplish tasks with less friction.</p>

            <h3 className="services-heading">{cards[0].title}</h3>
            <div className="services-grid">
              {cards[0].items.map((it) => (
                <article className="service-card" key={it.title}>
                  <div className="service-icon">●</div>
                  <div>
                    <div className="service-title">{it.title}</div>
                    <div className="service-benefit">{it.benefit}</div>
                  </div>
                </article>
              ))}
            </div>

            {/* stats moved to aside; removed duplicate from content */}
          </div>

          <aside className="about-aside">
            <div className="avatar-wrap large">
              <img
                src={myPhoto}
                alt="Sharifuzzaman Apu"
                className="about-avatar"
              />
              <div className="avatar-ring" aria-hidden="true"></div>
            </div>
            <p className="about-edu muted">
              B.Sc. Computer Science &amp; Engineering <br />— Currently working
              as a{" "}
              <span style={{ fontWeight: 800, color: "#00bcd4" }}>
                Computer Engineer
              </span>{" "}
              &{" "}
              <span style={{ fontWeight: 800, color: "#00bcd4" }}>
                FrontEnd Web Developer
              </span>
            </p>

            <div className="aside-ctas">
              <a className="btn primary" href="#contact">
                Hire Me
              </a>
                <a className="btn download" href="/Sharifuzzaman_CV.pdf" download>
                    <span className="cv-label">Download CV</span>
                    <span className="cv-icon" aria-hidden>⬇</span>
                </a>
            </div>

            <div className="aside-stats">
              <div className="stat">
                <div className="stat-num">4+</div>
                <div className="stat-label">Years</div>
              </div>
              <div className="stat">
                <div className="stat-num">20+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat">
                <div className="stat-num">10k+</div>
                <div className="stat-label">LOC</div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
