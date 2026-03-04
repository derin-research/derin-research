import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export default function App() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_8a14zrl",
        "template_4217dfa",
        formData,
        "rk0V0zj1sYCUTeSXz"
      )
      .then(() => setSubmitted(true));
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "800px", margin: "auto", padding: "50px" }}>
      <motion.h1 initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
        Derin Research & Data Entry
      </motion.h1>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        Reliable Writing and Data Entry Services at $5/hour
      </motion.p>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <input
            type="text"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <textarea
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
          <button type="submit" style={{ padding: "10px", cursor: "pointer" }}>Send Message</button>
        </form>
        {submitted && <p style={{ color: "green" }}>Message sent!</p>}
      </motion.div>
    </div>
  );
}