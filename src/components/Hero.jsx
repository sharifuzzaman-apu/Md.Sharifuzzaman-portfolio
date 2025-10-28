import React, { useEffect, useRef, useState } from "react";
import myPhoto from "../assets/myphoto.jpg.png";
import "./Hero.css";

export default function Hero() {
  // Smooth scroll helper used by CTAs
  const handleScroll = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 64, behavior: "smooth" });
    }
  };

  // Stats that will count up on page load and when Reload is pressed
  const stats = [
    { label: "Years", value: 4, suffix: "+" },
    { label: "Projects", value: 20, suffix: "+" },
    { label: "LOC", value: 10000, suffix: "+" }
  ];

  const rafRefs = useRef([]);
  const [display, setDisplay] = useState(() => stats.map(() => 0));
  const infoRef = useRef(null);
  const [finished, setFinished] = useState(() => stats.map(() => false));
  const isAnimatingMain = useRef(false);

  // live cards: clients / supporting projects / anything
  const liveCards = [
    { label: "Clients", value: 50,suffix: "+"  },
    { label: "Supporting Projects", value: 17,suffix: "+" },
    
  ];
  const liveRafs = useRef([]);
  const [liveDisplay, setLiveDisplay] = useState(() => liveCards.map(() => 0));
  const [liveFinished, setLiveFinished] = useState(() => liveCards.map(() => false));
  const isAnimatingLive = useRef(false);

  function formatDisplay(val) {
    if (val >= 1000) {
      // show as k (e.g. 10000 -> 10k)
      return `${Math.round(val / 1000)}k`;
    }
    return `${val}`;
  }

  function startCounts() {
    if (isAnimatingMain.current) return;
    isAnimatingMain.current = true;

    // reset displays and finished flags
    setDisplay(stats.map(() => 0));
    setFinished(stats.map(() => false));

    // clear any previous rafs
    rafRefs.current.forEach((id) => cancelAnimationFrame(id));
    rafRefs.current = [];

    stats.forEach((s, idx) => {
      const start = performance.now();
  // slower duration so counts update more gradually
  const duration = 1600 + (idx % 2) * 420; // slower, small variance per card

      function step(now) {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        const value = Math.round(eased * s.value);
        setDisplay((prev) => {
          const next = [...prev];
          next[idx] = value;
          return next;
        });

        if (t < 1) {
          const id = requestAnimationFrame(step);
          rafRefs.current.push(id);
        } else {
          // mark finished and play pulse
          setFinished((prev) => {
            const next = [...prev];
            next[idx] = true;
            return next;
          });
          // remove finished class after animation
          setTimeout(() => {
            setFinished((prev) => {
              const next = [...prev];
              next[idx] = false;
              return next;
            });
            // allow subsequent animations
            if (idx === stats.length - 1) isAnimatingMain.current = false;
          }, 700);
        }
      }

      const id = requestAnimationFrame(step);
      rafRefs.current.push(id);
    });
  }

  function startLiveCounts() {
    if (isAnimatingLive.current) return;
    isAnimatingLive.current = true;

    // reset displays and finished flags
    setLiveDisplay(liveCards.map(() => 0));
    setLiveFinished(liveCards.map(() => false));

    // clear any previous rafs
    liveRafs.current.forEach((id) => cancelAnimationFrame(id));
    liveRafs.current = [];

    liveCards.forEach((s, idx) => {
      const start = performance.now();
  // slower duration for live cards as well
  const duration = 1200 + idx * 260;

      function step(now) {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        const value = Math.round(eased * s.value);
        setLiveDisplay((prev) => {
          const next = [...prev];
          next[idx] = value;
          return next;
        });

        if (t < 1) {
          const id = requestAnimationFrame(step);
          liveRafs.current.push(id);
        } else {
          setLiveFinished((prev) => {
            const next = [...prev];
            next[idx] = true;
            return next;
          });
          setTimeout(() => {
            setLiveFinished((prev) => {
              const next = [...prev];
              next[idx] = false;
              return next;
            });
            if (idx === liveCards.length - 1) isAnimatingLive.current = false;
          }, 700);
        }
      }

      const id = requestAnimationFrame(step);
      liveRafs.current.push(id);
    });
  }

  // Start animations when the info row scrolls into view
  useEffect(() => {
    const node = infoRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // start both animations once when visible
            startCounts();
            startLiveCounts();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      rafRefs.current.forEach((id) => cancelAnimationFrame(id));
      liveRafs.current.forEach((id) => cancelAnimationFrame(id));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-eyebrow">Hello, I'm</p>
          <h1 className="hero-name">Sharifuzzaman Apu</h1>
          

          <p className="hero-role muted">
            <span className="role-badge">Front-End Web Developer</span>
            <span className="role-tech">— React &amp; JavaScript</span>
          </p>

          <p className="hero-desc">
            I build modern, accessible, and responsive web applications using
            React.js, performant CSS, and thoughtful UX. I focus on clean code,
            fast interfaces, and delightful interactions.
          </p>

          <div className="hero-ctas">
            <a
              href="#contact"
              className="btn btn-primary"
              onClick={(e) => handleScroll(e, "contact")}
            >
              Hire Me
            </a>

            <a
              href="#projects"
              className="btn btn-ghost"
              onClick={(e) => handleScroll(e, "projects")}
            >
              View Projects
            </a>
          </div>
          {/* Combined info row: stats + live cards rendered uniformly in a single row */}
          {/* Note: positioned at the bottom-left of the text column (hero-content) */}
          <div className="hero-info-row" aria-hidden={false} ref={infoRef}>
            {stats.map((s, i) => (
              <div className={`info-card ${finished[i] ? "finished" : ""}`} key={`stat-${s.label}`}>
                <div className={`info-number ${finished[i] ? "pulse" : ""}`}>{formatDisplay(display[i])}{s.suffix}</div>
                <div className="info-label">{s.label}</div>
              </div>
            ))}

            {liveCards.map((c, i) => (
              <div className={`info-card ${liveFinished[i] ? "finished" : ""}`} key={`live-${c.label}`}>
                <div className={`info-number ${liveFinished[i] ? "pulse" : ""}`}>{formatDisplay(liveDisplay[i])}{liveDisplay[i] >= 1000 ? "k" : ""}{c.suffix ?? ""}</div>
                <div className="info-label">{c.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-image">
          <img src={myPhoto} alt="Sharifuzzaman Apu" className="hero-avatar" />
        </div>
        {/* positioned bottom-left info row (inside container so it aligns with content) */}
        {/* removed duplicate info row to avoid rendering the stats twice */}
      </div>
    </section>
  );
}
