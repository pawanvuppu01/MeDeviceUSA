export default function DashboardHome() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        { title: "Doctors", count: 32, color: "bg-blue-100", link: "/dashboard/doctors" },
        { title: "Patients", count: 118, color: "bg-green-100", link: "/dashboard/patients" },
        { title: "Appointments", count: 46, color: "bg-yellow-100", link: "/dashboard/appointments" },
      ].map((card) => (
        <a
          key={card.title}
          href={card.link}
          className={`${card.color} p-6 rounded-xl shadow hover:shadow-lg transition`}
        >
          <h3 className="text-xl font-semibold text-blue-700">{card.title}</h3>
          <p className="text-3xl font-bold mt-2">{card.count}</p>
        </a>
      ))}
    </div>
  );
}
