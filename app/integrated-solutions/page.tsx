import Link from "next/link";

export default function IntegratedSolutions() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-24 text-center px-6">
        <h1 className="text-5xl font-bold mb-4">Integrated Healthcare Solutions</h1>
        <p className="max-w-3xl mx-auto text-blue-100 text-lg">
          Bridging technology, innovation, and medical expertise to create connected healthcare ecosystems.
        </p>
      </section>

      {/* Overview Section */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
          Seamless Integration for a Smarter Healthcare Future
        </h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
          Our Integrated Solutions division combines software, hardware, and compliance frameworks
          to help hospitals and healthcare organizations modernize operations and data workflows.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { title: "Digital Transformation", text: "Migration to cloud and smart device integration for real-time monitoring." },
            { title: "Data & Analytics", text: "Advanced insights and dashboards that improve decision-making in healthcare." },
            { title: "Compliance Automation", text: "Ensuring HIPAA, FDA, and MDR compliance through intelligent systems." },
          ].map((feature) => (
            <div
              key={feature.title}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Transform Your Healthcare Operations</h2>
        <p className="max-w-2xl mx-auto text-blue-100 mb-8">
          Partner with MeDeviceUSA to integrate technology, compliance, and innovation into your
          healthcare systems.
        </p>
        <Link
          href="/contact"
          className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-50 transition"
        >
          Get Started
        </Link>
      </section>
    </main>
  );
}
