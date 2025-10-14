"use client";
import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  phone: string;
}

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", specialty: "", phone: "" });

  // fetch doctors
  const loadDoctors = async () => {
    setLoading(true);
    const res = await fetch("/api/doctors");
    const data = await res.json();
    setDoctors(data);
    setLoading(false);
  };

  useEffect(() => {
    loadDoctors();
  }, []);

  // submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/doctors", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setOpen(false);
    setForm({ name: "", specialty: "", phone: "" });
    loadDoctors();
  };

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-blue-900">Doctors</h1>
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
        >
          + Add Doctor
        </button>
      </div>

      {/* Table */}
      {loading ? (
        <p>Loading...</p>
      ) : doctors.length === 0 ? (
        <p className="text-gray-500">No doctors yet. Add one!</p>
      ) : (
        <table className="w-full border-collapse bg-white shadow rounded-lg">
          <thead>
            <tr className="bg-blue-50 border-b text-left">
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Specialty</th>
              <th className="p-3">Phone</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor) => (
              <tr key={doctor.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{doctor.id}</td>
                <td className="p-3">{doctor.name}</td>
                <td className="p-3">{doctor.specialty}</td>
                <td className="p-3">{doctor.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Modal */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="fixed inset-0 flex items-center justify-center z-50 bg-black/30"
      >
        <Dialog.Panel className="bg-white p-6 rounded-lg w-full max-w-sm shadow-lg">
          <Dialog.Title className="text-lg font-semibold mb-4 text-blue-800">
            Add New Doctor
          </Dialog.Title>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="border p-2 rounded w-full"
              required
            />
            <input
              type="text"
              placeholder="Specialty"
              value={form.specialty}
              onChange={(e) => setForm({ ...form, specialty: e.target.value })}
              className="border p-2 rounded w-full"
              required
            />
            <input
              type="text"
              placeholder="Phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="border p-2 rounded w-full"
              required
            />
            <div className="flex justify-end gap-2 pt-3">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="px-4 py-2 rounded border border-gray-300 text-gray-600 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded bg-blue-700 text-white hover:bg-blue-800"
              >
                Save
              </button>
            </div>
          </form>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
}
