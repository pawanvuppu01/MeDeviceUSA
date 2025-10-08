import PageHero from "@/components/PageHero";

export default function WhitepapersPage() {
  return (
    <>
      <PageHero
        title="Whitepapers"
        subtitle="Download technical papers and in-depth industry analyses"
      />
      <section className="container mx-auto py-16 px-6">
        <p className="text-gray-700">
          Access detailed studies on AI in healthcare, digital compliance systems, and future
          readiness for smart hospitals.
        </p>
      </section>
    </>
  );
}
