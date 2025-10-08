import PageHero from "@/components/PageHero";

export default function ComplianceTrainingPage() {
  return (
    <>
      <PageHero
        title="Compliance Training"
        subtitle="Keep your staff updated with regulatory and safety requirements"
      />
      <section className="container mx-auto py-16 px-6">
        <p className="text-gray-700">
          Our courses cover HIPAA compliance, infection control, and patient privacy standards to
          maintain legal and ethical excellence in healthcare practice.
        </p>
      </section>
    </>
  );
}
