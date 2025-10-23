import React from "react";

export default function Projects() {
  const sectionStyle = {
    padding: "80px 20px",
    background: "#111",
    color: "white",
    textAlign: "center",
  };

  const cardStyle = {
    background: "#1f1f1f",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 15px rgba(0,0,0,0.3)",
    width: "300px",
    margin: "15px",
    display: "inline-block",
    verticalAlign: "top",
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "pointer",
  };

  const imageStyle = { width: "100%", borderRadius: "10px" };
  const linkStyle = { color: "#00bcd4", textDecoration: "none", fontWeight: "bold" };

  const projects = [
    {
      title: "Portfolio Website",
      desc: "A personal portfolio showcasing my projects and skills.",
      tech: "React, Tailwind, CSS",
      img: "https://via.placeholder.com/300x180",
      demo: "#",
      code: "#",
    },
    {
      title: "E-Commerce App",
      desc: "A modern online store built using React and Context API.",
      tech: "React, CSS, JS",
      img: "https://via.placeholder.com/300x180",
      demo: "#",
      code: "#",
    },
    {
      title: "Weather App",
      desc: "A weather forecast app using OpenWeather API.",
      tech: "JavaScript, API, CSS",
      img: "https://via.placeholder.com/300x180",
      demo: "#",
      code: "#",
    },
  ];

  return (
    <section id="projects" style={sectionStyle}>
      <h2 style={{ fontSize: "32px", marginBottom: "30px" }}>Projects</h2>
      {projects.map((p) => (
        <div
          key={p.title}
          style={cardStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,188,212,0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 0 15px rgba(0,0,0,0.3)";
          }}
        >
          <img src={p.img} alt={p.title} style={imageStyle} />
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
          <p style={{ fontStyle: "italic" }}>{p.tech}</p>
          <a href={p.demo} style={linkStyle} target="_blank" rel="noreferrer">
            Live Demo
          </a>{" "}
          |{" "}
          <a href={p.code} style={linkStyle} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      ))}
    </section>
  );
}
