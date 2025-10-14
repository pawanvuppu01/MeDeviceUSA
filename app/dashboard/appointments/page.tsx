"use client";
import { useEffect, useState } from "react";

interface Appointment {
  id: number;
  date: string;
  time: string;
  doctorId: number;
  patientId: number;
}

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/appointments")
      .then((res) => res.json())
      .then((data) => {
        setAppointments(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-blue-900">Appointments</h1>
        <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition">
          + Add Appointment
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="w-full border-collapse bg-white shadow rounded-lg">
          <thead>
            <tr className="bg-blue-50 border-b text-left">
              <th className="p-3">ID</th>
              <th className="p-3">Date</th>
              <th className="p-3">Time</th>
              <th className="p-3">Doctor</th>
              <th className="p-3">Patient</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((a) => (
              <tr key={a.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{a.id}</td>
                <td className="p-3">{new Date(a.date).toLocaleDateString()}</td>
                <td className="p-3">{a.time}</td>
                <td className="p-3">{a.doctorId}</td>
                <td className="p-3">{a.patientId}</td>
                <td className="p-3 text-center space-x-2">
                  <button className="text-blue-700 hover:underline">Edit</button>
                  <button className="text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
