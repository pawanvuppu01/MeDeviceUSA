import PageHero from "@/components/PageHero";

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        title="Case Studies"
        subtitle="Real-world success stories from Alovera Hospital’s partners"
      />
      <section className="container mx-auto py-16 px-6">
        <p className="text-gray-700">
          Discover how we’ve helped clients achieve regulatory approval, improve workflows,
          and modernize their healthcare systems.
        </p>
      </section>
    </>
  );
}
