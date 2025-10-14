export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white text-center py-24 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Engineering Medical Innovation
        </h1>
        <p className="max-w-2xl mx-auto text-lg">
          MeDeviceUSA delivers integrated solutions in design, regulatory
          affairs, and quality systems for the medical device industry.
        </p>
        <a
          href="/services"
          className="mt-8 inline-block bg-white text-blue-800 font-semibold px-6 py-3 rounded hover:bg-blue-100 transition"
        >
          Explore Our Services
        </a>
      </section>

      {/* ABOUT */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-blue-900 mb-4">
          About MeDeviceUSA
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Inspired by Ventura-Solutions, we combine expertise and precision to
          accelerate innovation in healthcare technology, ensuring devices reach
          the market safely and effectively.
        </p>
      </section>

      {/* SERVICES */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-semibold text-blue-900 mb-10 text-center">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Regulatory Affairs",
            "Quality Assurance",
            "Clinical Research",
            "Product Design",
            "Staffing & Recruiting",
            "Training & Compliance",
          ].map((service) => (
            <div
              key={service}
              className="bg-white shadow p-6 rounded-lg text-center border hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                {service}
              </h3>
              <p className="text-gray-600 text-sm">
                Learn how MeDeviceUSA supports {service.toLowerCase()}.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-blue-800 text-white text-center py-16">
        <h2 className="text-3xl font-semibold mb-4">
          Let’s Build the Future of Healthcare
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Partner with our specialists to develop, validate, and launch your
          medical device successfully.
        </p>
        <a
          href="/contact"
          className="bg-white text-blue-800 px-6 py-3 rounded font-semibold hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>
    </main>
  );
}
