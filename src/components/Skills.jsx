import React, { useEffect, useRef, useState } from "react";
import "./Skills.css";

const skillsData = [
  { name: "HTML5", level: 96 },
  { name: "CSS3", level: 94 },
  { name: "JavaScript (ES6+)", level: 90 },
  { name: "React.js", level: 89 },
  { name: "Tailwind CSS", level: 86 },
  { name: "Git & GitHub", level: 88 },
  { name: "Testing (Jest/RTL)", level: 72 },
  { name: "Accessibility (a11y)", level: 75 },
  { name: "Performance Optimization", level: 74 },
];

export default function Skills() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const [visible, setVisible] = useState(() => skillsData.map(() => false));
  const [displayValues, setDisplayValues] = useState(() => skillsData.map(() => 0));

  // store timeouts and raf ids so we can cleanup
  const timeouts = useRef([]);
  const rafIds = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const idx = Number(entry.target.dataset.index);
          if (Number.isNaN(idx)) return;

          // if already visible, skip
          if (visible[idx]) {
            observer.unobserve(entry.target);
            return;
          }

          // stagger by index (small delay)
          const delay = Math.min(400, idx * 80);
          const t = setTimeout(() => {
            setVisible((v) => {
              const next = [...v];
              next[idx] = true;
              return next;
            });
            // start count-up animation for this index
            startCountUp(idx, skillsData[idx].level);
          }, delay);
          timeouts.current.push(t);

          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.25 }
    );

    // observe each card
    cardRefs.current.forEach((c) => c && observer.observe(c));

    // copy refs so cleanup uses the snapshot
    const timeoutsSnapshot = timeouts.current.slice();
    const rafSnapshot = rafIds.current.slice();

    return () => {
      observer.disconnect();
      // clear timeouts and rafs (use snapshot)
      timeoutsSnapshot.forEach((id) => clearTimeout(id));
      rafSnapshot.forEach((id) => cancelAnimationFrame(id));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function startCountUp(index, target) {
    const duration = 900 + (index % 3) * 120; // small variance
    const start = performance.now();

    function step(now) {
      const t = Math.min(1, (now - start) / duration);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      const value = Math.round(eased * target);
      setDisplayValues((prev) => {
        const next = [...prev];
        next[index] = value;
        return next;
      });

      if (t < 1) {
        const id = requestAnimationFrame(step);
        rafIds.current.push(id);
      }
    }

    const id = requestAnimationFrame(step);
    rafIds.current.push(id);
  }

  return (
    <section id="skills" ref={sectionRef} className={`skills-section`}>
      <div className="skills-inner">
        <header className="skills-head">
          <h2 className="skills-title">Skills</h2>
          <p className="skills-sub">Front-end developer toolkit & proficiency</p>
        </header>

        <div className="skills-grid">
          {skillsData.map((s, idx) => (
            <article
              key={s.name}
              className={`skill-card ${visible[idx] ? "visible" : ""}`}
              aria-label={`${s.name} skill`}
              data-index={idx}
              ref={(el) => (cardRefs.current[idx] = el)}
            >
              <div className="skill-meta">
                <span className="skill-name">{s.name}</span>
                <span className="skill-level">{displayValues[idx]}%</span>
              </div>

              <div className="skill-bar" aria-hidden="true">
                <div
                  className="skill-fill"
                  style={{ width: visible[idx] ? `${s.level}%` : "0%" }}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
