import Link from "next/link";

export default function Resources() {
  const articles = [
    {
      title: "Top 5 Trends in Medical Device Innovation 2025",
      date: "October 10, 2025",
      excerpt:
        "Explore the latest breakthroughs in smart devices, AI-powered diagnostics, and telehealth integration.",
      link: "/resources/blog/medical-device-trends-2025",
    },
    {
      title: "Understanding FDA 510(k) Submission Requirements",
      date: "September 28, 2025",
      excerpt:
        "A step-by-step guide to preparing compliant documentation for medical device submissions.",
      link: "/resources/blog/fda-510k-guide",
    },
    {
      title: "Implementing Quality Management Systems in Healthcare",
      date: "August 15, 2025",
      excerpt:
        "Learn how ISO 13485-based systems enhance consistency, compliance, and product safety.",
      link: "/resources/blog/qms-healthcare",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-24 text-center px-6">
        <h1 className="text-5xl font-bold mb-4">Resources & Insights</h1>
        <p className="max-w-3xl mx-auto text-blue-100 text-lg">
          Stay updated with expert articles, whitepapers, and industry news from MeDeviceUSA.
        </p>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-blue-700 mb-10 text-center">
          Latest Articles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {articles.map((article) => (
            <div
              key={article.title}
              className="bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg transition flex flex-col justify-between"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{article.date}</p>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
              </div>
              <div className="border-t border-gray-100 p-6">
                <Link
                  href={article.link}
                  className="text-blue-700 font-semibold hover:text-blue-800"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-700 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Want to Share Your Insights?</h2>
        <p className="max-w-2xl mx-auto text-blue-100 mb-8">
          Collaborate with MeDeviceUSA to publish guest articles and healthcare innovation case studies.
        </p>
        <Link
          href="/contact"
          className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-50 transition"
        >
          Submit an Article
        </Link>
      </section>
    </main>
  );
}
