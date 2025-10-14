"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ===== HERO SECTION ===== */}
      <motion.section
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-blue-700 to-blue-500 text-white text-center py-24"
      >
        <h1 className="text-4xl font-bold mb-4">About MeDeviceUSA</h1>
        <p className="max-w-3xl mx-auto">
          We combine medical expertise, engineering excellence, and regulatory compliance
          to deliver end-to-end healthcare technology solutions.
        </p>
      </motion.section>

      {/* ===== WHO WE ARE ===== */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto py-16 px-6 text-gray-700"
      >
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Who We Are</h2>
        <p className="leading-relaxed mb-4">
          MeDeviceUSA is a trusted partner for global medical device companies.
          We specialize in design, regulatory affairs, staffing, and compliance solutions.
          Our mission is to empower innovation through quality, compliance, and technology.
        </p>
        <p className="leading-relaxed">
          From concept to market, we help clients accelerate product development,
          streamline regulatory submissions, and ensure excellence across every stage
          of the medical device lifecycle.
        </p>
      </motion.section>

      {/* ===== CORE VALUES ===== */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-white py-16 px-6"
      >
        <h2 className="text-2xl font-bold text-blue-700 text-center mb-10">
          Our Core Values
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Integrity", desc: "We act with honesty and transparency in every collaboration." },
            { title: "Innovation", desc: "Pioneering creative solutions that improve lives worldwide." },
            { title: "Quality", desc: "Delivering excellence that meets regulatory and client standards." },
            { title: "Collaboration", desc: "Empowering teams through trust, inclusion, and shared goals." },
          ].map((value) => (
            <div
              key={value.title}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <h3 className="font-semibold text-blue-700 mb-2">{value.title}</h3>
              <p className="text-gray-600 text-sm">{value.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ===== LEADERSHIP TEAM ===== */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-blue-50 py-16 px-6"
      >
        <h2 className="text-2xl font-bold text-blue-700 text-center mb-10">
          Leadership Team
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { name: "Dr. Sarah Johnson", role: "Chief Medical Officer", img: "/team1.jpg" },
            { name: "Michael Lee", role: "Head of Engineering", img: "/team2.jpg" },
            { name: "Priya Verma", role: "Director of Quality Assurance", img: "/team3.jpg" },
          ].map((member) => (
            <div key={member.name} className="text-center">
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 shadow-md object-cover"
              />
              <h3 className="font-semibold text-gray-800">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ===== CONTACT CTA ===== */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-blue-700 to-blue-500 text-white text-center py-16"
      >
        <h2 className="text-3xl font-bold mb-4">Ready to Collaborate?</h2>
        <p className="mb-6">Let’s work together to bring life-changing medical innovations to market.</p>
        <a
          href="/contact"
          className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Contact Us →
        </a>
      </motion.section>
    </div>
  );
}
