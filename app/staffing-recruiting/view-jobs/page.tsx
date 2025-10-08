import PageHero from "@/components/PageHero";

export default function ViewJobsPage() {
  return (
    <>
      <PageHero
        title="Current Job Openings"
        subtitle="Discover active positions across departments and specialties"
      />
      <section className="container mx-auto py-16 px-6">
        <ul className="space-y-4 text-gray-700">
          <li>• Registered Nurse – ICU Unit</li>
          <li>• Medical Lab Technician</li>
          <li>• Patient Support Coordinator</li>
        </ul>
      </section>
    </>
  );
}
