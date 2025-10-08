import PageHero from "@/components/PageHero";

export default function AIDiagnosticsPage() {
  return (
    <>
      <PageHero
        title="AI Diagnostics"
        subtitle="Accelerate diagnosis and improve accuracy with advanced AI tools"
      />
      <section className="container mx-auto py-16 px-6">
        <p className="text-gray-700 leading-relaxed">
          Our AI diagnostic platform analyzes medical imaging and clinical data to support
          faster decision-making and enhance patient outcomes with evidence-based insights.
        </p>
      </section>
    </>
  );
}
