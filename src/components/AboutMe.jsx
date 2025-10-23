import React from "react";

export default function AboutMe() {
    const sectionStyle = {
        padding: "80px 20px",
        background: "linear-gradient(to right, #0f0f0f, #272727)",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "30px",
        color: "white",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        flexDirection: "column",
        alignItems: "center",
    };

    const cardsContainerStyle = {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "30px",
        marginTop: "30px",
        width: "100%",
        maxWidth: "900px",
    };

    const cardStyle = {
        backgroundColor: "#1a1a1a",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
        flex: "1 1 300px",
        maxWidth: "350px",
        textAlign: "center",
        transition: "transform 0.3s, box-shadow 0.3s",
        cursor: "pointer",
    };

    const cardHoverStyle = {
        transform: "scale(1.05)",
        boxShadow: "0 12px 25px rgba(102, 126, 234, 0.6)",
    };

    const titleStyle = {
        fontSize: "24px",
        fontWeight: "700",
        marginBottom: "15px",
        color: "#ffffff",
    };

    const textStyle = {
        fontSize: "16px",
        color: "#e0e0e0",
        lineHeight: "1.5",
    };

    const [hoverIndex, setHoverIndex] = React.useState(null);

    const cards = [
        {
            title: "How I Can Help You",
            text: "I build responsive, user-friendly, and visually appealing websites using HTML, CSS, JavaScript, Tailwind, and React.js.",
        },
        {
            title: "Why Hire Me?",
            text: "I combine strong technical skills with creativity, fast delivery, and clear communication to bring your ideas to life.",
        },
    ];

    return (
        <section id="about" style={sectionStyle}>
            <h1>About Me</h1>

            <div style={cardsContainerStyle}>
                {cards.map((card, idx) => {
                    const isHovered = hoverIndex === idx;
                    return (
                        <div
                            key={card.title}
                            style={{ ...cardStyle, ...(isHovered ? cardHoverStyle : {}) }}
                            onMouseEnter={() => setHoverIndex(idx)}
                            onMouseLeave={() => setHoverIndex(null)}
                        >
                            <h3 style={titleStyle}>{card.title}</h3>
                            <p style={textStyle}>{card.text}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
