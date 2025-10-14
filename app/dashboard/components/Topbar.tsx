"use client";

export default function Topbar() {
  return (
    <header className="flex justify-between items-center bg-white shadow px-6 py-3 border-b">
      <h2 className="text-xl font-semibold text-blue-900">Admin Dashboard</h2>
      <div className="flex items-center gap-4">
        <span className="text-gray-600">Welcome, Admin</span>
        <button className="text-blue-700 border border-blue-700 px-3 py-1 rounded hover:bg-blue-700 hover:text-white transition">
          Logout
        </button>
      </div>
    </header>
  );
}
