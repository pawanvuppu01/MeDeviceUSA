"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Overview", path: "/dashboard" },
  { name: "Doctors", path: "/dashboard/doctors" },
  { name: "Patients", path: "/dashboard/patients" },
  { name: "Appointments", path: "/dashboard/appointments" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="bg-blue-900 text-white w-64 min-h-screen p-5 space-y-6">
      <h1 className="text-2xl font-bold mb-6">MeDeviceUSA</h1>
      <nav className="space-y-3">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`block px-4 py-2 rounded ${
              pathname === item.path ? "bg-blue-700" : "hover:bg-blue-800"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
