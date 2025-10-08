import PageHero from "@/components/PageHero";

export default function ConsultingPage() {
  return (
    <>
      <PageHero
        title="Consulting Services"
        subtitle="Innovative strategies to ensure operational excellence in healthcare"
        ctaText="Learn More"
        ctaHref="/consulting-services/design-controls"
      />
      <section className="container mx-auto py-16 px-6">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">
          Expert Guidance
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Our consulting experts help healthcare organizations streamline
          compliance, improve patient outcomes, and achieve global quality
          standards. We specialize in medical device design, risk management,
          and process optimization.
        </p>
      </section>
    </>
  );
}
