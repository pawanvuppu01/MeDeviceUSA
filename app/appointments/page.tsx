"use client";
import { useState } from "react";

export default function AppointmentsPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    date: "",
    department: "",
    message: "",
  });
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setResponse(data.message || data.error);
    } catch (err) {
      setResponse("⚠️ Something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="container mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">
        Book an Appointment
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow space-y-4"
      >
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-2 rounded"
          onChange={(e) => setForm({ ...form, fullName: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="date"
          className="w-full border p-2 rounded"
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />
        <select
          className="w-full border p-2 rounded"
          onChange={(e) => setForm({ ...form, department: e.target.value })}
        >
          <option>Select Department</option>
          <option>General Medicine</option>
          <option>Dermatology</option>
          <option>Pediatrics</option>
          <option>Physiotherapy</option>
        </select>
        <textarea
          placeholder="Message (optional)"
          className="w-full border p-2 rounded"
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        <button
          type="submit"
          className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-md w-full"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
        {response && (
          <p className="text-center text-green-700 font-semibold mt-4">
            {response}
          </p>
        )}
      </form>
    </section>
  );
}
