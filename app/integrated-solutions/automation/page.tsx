import PageHero from "@/components/PageHero";

export default function AutomationPage() {
  return (
    <>
      <PageHero
        title="Automation"
        subtitle="Streamline hospital operations through intelligent automation"
      />
      <section className="container mx-auto py-16 px-6">
        <p className="text-gray-700 leading-relaxed">
          From scheduling and billing to lab data management, our automation
          solutions improve efficiency and reduce manual workload across departments.
        </p>
      </section>
    </>
  );
}
