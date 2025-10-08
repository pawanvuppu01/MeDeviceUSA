"use client";
import { useEffect, useState } from "react";

interface Doctor {
  name: string;
  specialty: string;
}

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDoctors() {
      try {
        const res = await fetch("/api/doctors");
        const data = await res.json();
        setDoctors(data);
      } catch (error) {
        console.error("Failed to fetch doctors:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchDoctors();
  }, []);

  if (loading)
    return (
      <div className="text-center py-20 text-green-700 font-semibold">
        Loading doctor list...
      </div>
    );

  return (
    <section className="container mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-green-700 mb-10 text-center">
        Our Expert Doctors
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {doctors.map((doc, i) => (
          <div
            key={i}
            className="bg-white border rounded-lg p-6 shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold text-green-700">{doc.name}</h3>
            <p className="text-gray-600">{doc.specialty}</p>
            <a
              href="/appointments"
              className="mt-4 inline-block text-sm bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md"
            >
              Book Appointment
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
