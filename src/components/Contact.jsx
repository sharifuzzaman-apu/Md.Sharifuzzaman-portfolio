import React, { useState } from "react";

export default function Contact() {
  const sectionStyle = {
    padding: "80px 20px",
    background: "linear-gradient(to right, #0f0f0f, #272727)",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexWrap: "wrap",
    gap: "60px",
    color: "white",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    textAlign: "left",
  };

  const leftStyle = {
    flex: "1",
    minWidth: "250px",
    maxWidth: "400px",
    padding: "20px",
  };

  const headingStyle = {
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "20px",
    borderBottom: "3px solid #667eea",
    display: "inline-block",
    paddingBottom: "5px",
  };

  const infoText = {
    fontSize: "16px",
    lineHeight: "1.8",
    color: "#e0e0e0",
  };

  const highlight = {
    color: "#667eea",
    fontWeight: "600",
  };

  const formStyle = {
    flex: "1",
    minWidth: "280px",
    maxWidth: "450px",
    background: "linear-gradient(to right, #1a1a1a, #222)",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.5)",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    borderRadius: "8px",
    border: "1px solid #555",
    backgroundColor: "#1c1c1c",
    color: "white",
    fontSize: "1rem",
    outline: "none",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    backgroundColor: "#667eea",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "10px",
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert("Please fill in all fields!");
      return;
    }

    // Submit form using Netlify
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        "form-name": form.getAttribute("name"),
        ...formData,
      }).toString(),
    })
      .then(() => alert("Message sent successfully ✅"))
      .catch(() => alert("Something went wrong ❌"));
  };

  return (
    <section id="contact" style={sectionStyle}>
      <div style={leftStyle}>
        <h2 style={headingStyle}>Contact Me</h2>
        <p style={infoText}>
          <strong>Phone:</strong> <span style={highlight}>01762568008</span>
          <br />
          <strong>Email:</strong> <span style={highlight}>sharifapuzaman@gmail.com</span>
          <br />
          <br />
          I’m open to freelance projects, collaborations, or exciting job
          opportunities. Let’s connect and create something amazing together!
        </p>
      </div>

      {/* ✅ Netlify-ready form */}
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
        style={formStyle}
      >
        <input type="hidden" name="form-name" value="contact" />
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          style={inputStyle}
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          style={inputStyle}
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          style={inputStyle}
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          style={inputStyle}
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" style={buttonStyle}>
          Send Message
        </button>
      </form>
    </section>
  );
}
