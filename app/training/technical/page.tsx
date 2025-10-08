import PageHero from "@/components/PageHero";

export default function TechnicalTrainingPage() {
  return (
    <>
      <PageHero
        title="Technical Training"
        subtitle="Enhance your team’s skills in cutting-edge medical technology"
      />
      <section className="container mx-auto py-16 px-6">
        <p className="text-gray-700">
          Practical workshops on equipment handling, diagnostic systems, and software tools to boost
          operational confidence and efficiency.
        </p>
      </section>
    </>
  );
}
