import PageHero from "@/components/PageHero";

export default function RegulatoryStrategyPage() {
  return (
    <>
      <PageHero
        title="Regulatory Strategy"
        subtitle="Guiding your healthcare innovations through complex regulatory pathways"
        ctaText="Contact Experts"
        ctaHref="/contact"
      />
      <section className="container mx-auto py-16 px-6">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">
          Our Expertise
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Alovera Hospital’s Regulatory Strategy team helps your medical
          innovations comply with international standards, including FDA, EMA,
          and ISO requirements. We guide you through product submissions,
          audits, and post-market surveillance.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Whether you are developing Class I devices or high-risk therapeutic
          products, our experts ensure smooth approval and launch.
        </p>
      </section>
    </>
  );
}
