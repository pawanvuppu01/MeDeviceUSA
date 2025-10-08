import PageHero from "@/components/PageHero";

export default function HomePage() {
  return (
    <>
      <PageHero
        title="Welcome to Alovera Hospital"
        subtitle="Compassionate care, modern facilities, and expert doctors"
        ctaText="Book an Appointment"
        ctaHref="/appointments"
      />

      <section className="container mx-auto py-16 px-6 text-center">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">
          Our Commitment
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Alovera Hospital provides world-class healthcare services inspired by
          nature’s healing. Our expert doctors ensure every patient receives the
          best care possible.
        </p>
      </section>
    </>
  );
}
