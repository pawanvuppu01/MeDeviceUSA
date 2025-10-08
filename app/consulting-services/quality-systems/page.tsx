import PageHero from "@/components/PageHero";

export default function QualitySystemsPage() {
  return (
    <>
      <PageHero
        title="Quality Systems"
        subtitle="Building and maintaining excellence in healthcare operations"
        ctaText="Request Consultation"
        ctaHref="/contact"
      />
      <section className="container mx-auto py-16 px-6">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">
          Why Quality Matters
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Our Quality Systems consulting helps hospitals and medical device
          companies implement ISO 13485-compliant processes that enhance
          reliability, reduce risk, and improve patient safety.
        </p>
        <p className="text-gray-700 leading-relaxed">
          From internal audits to documentation management, Alovera Hospital’s
          experts partner with you to build sustainable systems that drive
          long-term success.
        </p>
      </section>
    </>
  );
}
