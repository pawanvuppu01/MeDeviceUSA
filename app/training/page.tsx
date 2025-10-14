import Link from "next/link";

export default function Training() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-24 text-center px-6">
        <h1 className="text-5xl font-bold mb-4">Professional Training & Certification</h1>
        <p className="max-w-3xl mx-auto text-blue-100 text-lg">
          Upskill your workforce with our expert-led training programs in medical technology, 
          regulatory compliance, and healthcare innovation.
        </p>
      </section>

      {/* Programs Section */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-blue-700 mb-10 text-center">Our Programs</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { title: "Regulatory Affairs", text: "Deep-dive courses on FDA, ISO 13485, and EU MDR standards." },
            { title: "Design & Development", text: "Product lifecycle training for biomedical and healthcare engineers." },
            { title: "Quality Systems", text: "Practical workshops on QMS, CAPA, and audit readiness." },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Enrollment CTA */}
      <section className="bg-blue-700 py-20 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Start Your Certification Journey</h2>
        <p className="max-w-2xl mx-auto text-blue-100 mb-8">
          Contact our training department to learn about schedules, group enrollments, and custom programs.
        </p>
        <Link
          href="/contact"
          className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-50 transition"
        >
          Enroll Now
        </Link>
      </section>
    </main>
  );
}
