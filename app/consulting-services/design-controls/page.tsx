import PageHero from "@/components/PageHero";

export default function DesignControlsPage() {
  return (
    <>
      <PageHero
        title="Design Controls"
        subtitle="Compliance-driven design processes for safer healthcare devices"
      />
      <section className="container mx-auto py-16 px-6">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Overview</h2>
        <p className="text-gray-700 leading-relaxed">
          Alovera Hospital provides expertise in implementing design control
          frameworks aligned with FDA and ISO 13485 standards, ensuring your
          medical products meet safety and efficacy expectations.
        </p>
      </section>
    </>
  );
}
