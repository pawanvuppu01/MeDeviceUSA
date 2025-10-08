"use client";

import { useEffect, useState, useCallback } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Trash2, RefreshCw } from "lucide-react";

type Doctor = { id: number; name: string; specialty: string };
type Appointment = {
  id: number;
  fullName: string;
  email: string;
  date: string | Date;
  department: string;
  message?: string | null;
};
type Message = { id: number; name: string; email: string; content: string };

export default function DashboardClient() {
  const { data: session, status } = useSession();
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");

  const fetchJSON = useCallback(async <T,>(url: string): Promise<T> => {
    const res = await fetch(url, { credentials: "same-origin" });
    if (!res.ok) throw new Error(`GET ${url} → ${res.status}`);
    return res.json();
  }, []);

  const loadData = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const [d, a, m] = await Promise.all([
        fetchJSON<Doctor[]>("/api/doctors"),
        fetchJSON<Appointment[]>("/api/appointments"),
        fetchJSON<Message[]>("/api/contact"),
      ]);
      setDoctors(d || []);
      setAppointments(a || []);
      setMessages(m || []);
    } catch {
      setError("Could not load data. Please try Refresh.");
    } finally {
      setLoading(false);
    }
  }, [fetchJSON]);

  const deleteRecord = useCallback(
    async (type: "doctors" | "appointments" | "contact", id: number) => {
      if (!confirm("Are you sure you want to delete this record?")) return;
      await fetch(`/api/${type}/${id}`, { method: "DELETE" });
      await loadData();
    },
    [loadData]
  );

  const refreshData = useCallback(async () => {
    setRefreshing(true);
    await loadData();
    setTimeout(() => setRefreshing(false), 400);
  }, [loadData]);

  useEffect(() => {
    if (status === "authenticated") loadData();
  }, [status, loadData]);

  if (status === "loading") return <p className="p-6">Checking session…</p>;

  if (status === "unauthenticated")
    return (
      <div className="container mx-auto px-6 py-16 space-y-4">
        <h1 className="text-2xl font-bold text-green-700">Please log in</h1>
        <p className="text-gray-700">You must sign in to view the dashboard.</p>
        <Link
          href="/login"
          className="inline-block bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md"
        >
          Go to Login
        </Link>
      </div>
    );

  const fmtDate = (d: string | Date) => {
    const date = typeof d === "string" ? new Date(d) : d;
    return Number.isNaN(date.getTime()) ? "—" : date.toLocaleDateString();
  };

  return (
    <section className="container mx-auto px-6 py-16">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-green-700">Admin Dashboard</h1>
        <button
          onClick={refreshData}
          className="flex items-center space-x-2 bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md"
        >
          <RefreshCw size={18} className={refreshing ? "animate-spin" : ""} />
          <span>{refreshing ? "Refreshing…" : "Refresh"}</span>
        </button>
      </div>

      {error && (
        <div className="mb-6 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* Doctors */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Doctors</h2>
        {doctors.length === 0 ? (
          <p className="text-gray-600">No doctors found.</p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {doctors.map((d) => (
              <div key={d.id} className="p-4 bg-green-50 border rounded-lg shadow-sm flex justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{d.name}</h3>
                  <p className="text-gray-600">{d.specialty}</p>
                </div>
                <button
                  onClick={() => deleteRecord("doctors", d.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Appointments */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Appointments</h2>
        {appointments.length === 0 ? (
          <p className="text-gray-600">No appointments found.</p>
        ) : (
          <div className="overflow-x-auto border rounded-lg">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-green-700 text-white">
                <tr>
                  <th className="p-3">Name</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Department</th>
                  <th className="p-3">Message</th>
                  <th className="p-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((a) => (
                  <tr key={a.id} className="border-b hover:bg-green-50">
                    <td className="p-3">{a.fullName}</td>
                    <td className="p-3">{a.email}</td>
                    <td className="p-3">{fmtDate(a.date)}</td>
                    <td className="p-3">{a.department}</td>
                    <td className="p-3">{a.message || "—"}</td>
                    <td className="p-3 text-center">
                      <button
                        onClick={() => deleteRecord("appointments", a.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Messages */}
      <div>
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Messages</h2>
        {messages.length === 0 ? (
          <p className="text-gray-600">No messages found.</p>
        ) : (
          <div className="space-y-4">
            {messages.map((m) => (
              <div key={m.id} className="p-4 border rounded-lg bg-green-50 flex justify-between">
                <div>
                  <h4 className="font-semibold">{m.name}</h4>
                  <p className="text-sm text-gray-700">{m.email}</p>
                  <p className="mt-2">{m.content}</p>
                </div>
                <button
                  onClick={() => deleteRecord("contact", m.id)}
                  className="text-red-600 hover:text-red-800 self-start"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
