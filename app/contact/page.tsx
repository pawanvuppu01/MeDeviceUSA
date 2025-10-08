"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setStatus(data.message || data.error);
    } catch {
      setStatus("⚠️ Failed to send message.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="container mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">
        Contact Us
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow space-y-4"
      >
        <input
          type="text"
          placeholder="Name"
          className="w-full border p-2 rounded"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <textarea
          placeholder="Your message"
          className="w-full border p-2 rounded"
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-md w-full"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
        {status && (
          <p className="text-center text-green-700 font-semibold mt-4">
            {status}
          </p>
        )}
      </form>

      <div className="text-center mt-10 text-gray-700">
        <p>📍 Denton, Texas, USA</p>
        <p>📞 +1 (940) 629-9145</p>
        <p>✉️ info@aloverahospital.com</p>
      </div>
    </section>
  );
}
