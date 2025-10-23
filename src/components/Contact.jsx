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

  const leftStyle = { flex: 1, minWidth: "250px", maxWidth: "400px", padding: "20px" };
  const headingStyle = { fontSize: "32px", fontWeight: "700", marginBottom: "20px", borderBottom: "3px solid #667eea", display: "inline-block", paddingBottom: "5px" };
  const infoText = { fontSize: "16px", lineHeight: "1.8", color: "#e0e0e0" };
  const highlight = { color: "#667eea", fontWeight: "600" };
  const formStyle = { flex: 1, minWidth: "280px", maxWidth: "450px", background: "linear-gradient(to right, #1a1a1a, #222)", padding: "30px", borderRadius: "12px", boxShadow: "0 8px 25px rgba(0,0,0,0.5)" };
  const inputStyle = { width: "100%", padding: "12px", margin: "10px 0", borderRadius: "8px", border: "1px solid #555", backgroundColor: "#1c1c1c", color: "white", fontSize: "1rem", outline: "none" };
  const buttonStyle = { width: "100%", padding: "12px", backgroundColor: "#667eea", color: "white", border: "none", borderRadius: "8px", fontSize: "1rem", fontWeight: "600", cursor: "pointer", marginTop: "10px", transition: "all 0.3s ease" };

  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10,15}$/;

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!phoneRegex.test(formData.phone)) newErrors.phone = "Enter a valid phone number (10–15 digits)";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    if (!validateForm()) e.preventDefault();
    else setSubmitted(true);
  };

  return (
    <section id="contact" style={sectionStyle}>
      <div style={leftStyle}>
        <h2 style={headingStyle}>Contact Me</h2>
        <p style={infoText}>
          <strong>Phone:</strong> <span style={highlight}>01762568008</span><br />
          <strong>Email:</strong> <span style={highlight}>sharifapuzaman@gmail.com</span><br /><br />
          I’m open to freelance projects, collaborations, or exciting job opportunities. Let’s connect and create something amazing together!
        </p>
      </div>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        style={formStyle}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p style={{ display: "none" }}>
          <label>Don’t fill this out: <input name="bot-field" /></label>
        </p>

        <input type="text" name="name" placeholder="Your Name" style={inputStyle} value={formData.name} onChange={handleChange} />
        {errors.name && <p style={{ color: "#ff4d4d", fontSize: "0.9rem" }}>{errors.name}</p>}

        <input type="email" name="email" placeholder="Your Email" style={inputStyle} value={formData.email} onChange={handleChange} />
        {errors.email && <p style={{ color: "#ff4d4d", fontSize: "0.9rem" }}>{errors.email}</p>}

        <input type="tel" name="phone" placeholder="Your Phone Number" style={inputStyle} value={formData.phone} onChange={handleChange} />
        {errors.phone && <p style={{ color: "#ff4d4d", fontSize: "0.9rem" }}>{errors.phone}</p>}

        <textarea name="message" placeholder="Your Message" rows="4" style={inputStyle} value={formData.message} onChange={handleChange} />
        {errors.message && <p style={{ color: "#ff4d4d", fontSize: "0.9rem" }}>{errors.message}</p>}

        <button type="submit" style={buttonStyle}>Send Message</button>
        {submitted && <p style={{ color: "#00e676", marginTop: "10px" }}>✅ Thank you! Message sent.</p>}
      </form>
    </section>
  );
}
