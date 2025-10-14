import Link from "next/link";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white flex flex-col justify-between">
        <div>
          <div className="px-6 py-4 border-b border-blue-700 text-center">
            <h1 className="text-xl font-bold">MeDeviceUSA</h1>
            <p className="text-sm text-blue-200">Admin Panel</p>
          </div>
          <nav className="mt-8 space-y-2 px-4">
            <Link href="/dashboard" className="block px-3 py-2 rounded hover:bg-blue-800">
              🏠 Dashboard Home
            </Link>
            <Link href="/dashboard/doctors" className="block px-3 py-2 rounded hover:bg-blue-800">
              👨‍⚕️ Doctors
            </Link>
            <Link href="/dashboard/patients" className="block px-3 py-2 rounded hover:bg-blue-800">
              🧑‍🤝‍🧑 Patients
            </Link>
            <Link href="/dashboard/appointments" className="block px-3 py-2 rounded hover:bg-blue-800">
              📅 Appointments
            </Link>
          </nav>
        </div>
        <div className="px-6 py-4 text-sm text-blue-200 border-t border-blue-700">
          © {new Date().getFullYear()} MeDeviceUSA
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-blue-700">Dashboard</h2>
          <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition">
            Logout
          </button>
        </header>

        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
