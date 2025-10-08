import PageHero from "@/components/PageHero";

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Blog"
        subtitle="Insights on healthcare innovation, AI, and medical compliance"
      />
      <section className="container mx-auto py-16 px-6">
        <p className="text-gray-700">
          Read our latest articles on emerging medical technologies, digital transformation,
          and hospital best practices.
        </p>
      </section>
    </>
  );
}
