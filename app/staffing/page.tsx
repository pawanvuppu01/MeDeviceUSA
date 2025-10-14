import Link from "next/link";

export default function Staffing() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-24 text-center px-6">
        <h1 className="text-5xl font-bold mb-4">Healthcare Staffing & Talent Solutions</h1>
        <p className="max-w-3xl mx-auto text-blue-100 text-lg">
          Connecting innovation with expertise — delivering skilled professionals for the medical and technology sectors.
        </p>
      </section>

      {/* Overview Section */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
          Empowering Medical Teams through Strategic Staffing
        </h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
          At MeDeviceUSA, we provide healthcare, research, and engineering organizations with qualified
          professionals across all levels. From biomedical engineers to clinical specialists, our staffing
          division ensures that your teams have the right talent for success.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { title: "Permanent Recruitment", text: "Matching long-term professionals with innovative healthcare organizations." },
            { title: "Contract Staffing", text: "Flexible, project-based staffing to meet clinical and technical demands." },
            { title: "Specialized Consulting", text: "Expert advisors for regulatory, design, and research roles." },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-700 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Looking for Expert Talent?</h2>
        <p className="max-w-2xl mx-auto text-blue-100 mb-8">
          Let us connect you with the right professionals for your next project or full-time role.
        </p>
        <Link
          href="/contact"
          className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-50 transition"
        >
          Contact Us
        </Link>
      </section>
    </main>
  );
}
