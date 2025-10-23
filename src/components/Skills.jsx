import React, { useState } from "react";

export default function Skills() {
  const sectionStyle = {
    padding: "80px 20px",
    textAlign: "center",
    background: "#1f1f1f",
    color: "white",
  };

  const titleStyle = {
    fontSize: "36px",
    marginBottom: "40px",
    fontWeight: "700",
  };

  const skillsContainer = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "25px",
    maxWidth: "700px",
    margin: "0 auto",
  };

  const skillBox = {
    backgroundColor: "#272727",
    color: "#fff",
    padding: "20px 35px",
    borderRadius: "12px",
    boxShadow: "0 8px 15px rgba(0,0,0,0.2)",
    fontSize: "20px",
    fontWeight: "600",
    cursor: "pointer",
    userSelect: "none",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const [hoverIndex, setHoverIndex] = useState(null);

  const skills = ["HTML", "CSS", "Tailwind", "JavaScript", "React.js"];

  return (
    <section id="skills" style={sectionStyle}>
      <h2 style={titleStyle}>My Skills</h2>
      <div style={skillsContainer}>
        {skills.map((skill, idx) => {
          const isHovered = hoverIndex === idx;
          return (
            <div
              key={skill}
              style={{
                ...skillBox,
                transform: isHovered ? "scale(1.1)" : "scale(1)",
                boxShadow: isHovered
                  ? "0 12px 25px rgba(0,0,0,0.4)"
                  : skillBox.boxShadow,
              }}
              onMouseEnter={() => setHoverIndex(idx)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              {skill}
            </div>
          );
        })}
      </div>
    </section>
  );
}
