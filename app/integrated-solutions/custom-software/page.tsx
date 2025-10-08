import PageHero from "@/components/PageHero";

export default function CustomSoftwarePage() {
  return (
    <>
      <PageHero
        title="Custom Healthcare Software"
        subtitle="Tailored applications for efficient clinical and administrative workflows"
      />
      <section className="container mx-auto py-16 px-6">
        <p className="text-gray-700 leading-relaxed">
          We design custom software to manage patients, inventory, appointments, and more — built
          securely and scalably to fit your hospital’s needs.
        </p>
      </section>
    </>
  );
}
