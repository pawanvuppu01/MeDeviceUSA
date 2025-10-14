"use client";
import { useEffect, useState } from "react";

interface Patient {
  id: number;
  name: string;
  age: number;
  doctorId: number;
}

export default function PatientsPage() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/patients")
      .then((res) => res.json())
      .then((data) => {
        setPatients(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-blue-900">Patients</h1>
        <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition">
          + Add Patient
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="w-full border-collapse bg-white shadow rounded-lg">
          <thead>
            <tr className="bg-blue-50 border-b text-left">
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Age</th>
              <th className="p-3">Doctor ID</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{patient.id}</td>
                <td className="p-3">{patient.name}</td>
                <td className="p-3">{patient.age}</td>
                <td className="p-3">{patient.doctorId}</td>
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
