import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Design & Development",
      description:
        "Comprehensive product design and engineering services that ensure safety, performance, and innovation.",
      link: "/services/design-development",
    },
    {
      title: "Regulatory Affairs",
      description:
        "Expert support for FDA, ISO, and EU MDR submissions. Compliance documentation and strategic guidance.",
      link: "/services/regulatory-affairs",
    },
    {
      title: "Quality Assurance",
      description:
        "Implementation of QMS, risk management, and audit readiness for consistent medical device quality.",
      link: "/services/quality-assurance",
    },
    {
      title: "Clinical Research",
      description:
        "Preclinical and clinical trial management, data monitoring, and validation for medical technologies.",
      link: "/services/clinical-research",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-24 text-center px-6">
        <h1 className="text-5xl font-bold mb-4">Our Services</h1>
        <p className="max-w-3xl mx-auto text-blue-100 text-lg">
          MeDeviceUSA provides end-to-end support across the medical device lifecycle — 
          from concept and design to regulatory approval and market delivery.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-blue-700 mb-10 text-center">
          Explore Our Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 p-8 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>
              <Link
                href={service.link}
                className="text-blue-700 font-medium hover:text-blue-800 mt-auto underline"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Need Custom Medical Solutions?</h2>
        <p className="max-w-2xl mx-auto text-blue-100 mb-8">
          Let’s collaborate to bring your next innovation to life. Reach out to our experts today.
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
