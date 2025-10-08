import PageHero from "@/components/PageHero";

export default function EmployersPage() {
  return (
    <>
      <PageHero
        title="Employers"
        subtitle="Partner with Alovera Hospital to find qualified healthcare professionals"
        ctaText="Post a Job"
        ctaHref="/staffing-recruiting/view-jobs"
      />
      <section className="container mx-auto py-16 px-6">
        <p className="text-gray-700 leading-relaxed">
          Our recruitment experts specialize in sourcing skilled physicians, nurses,
          and allied health staff for hospitals and clinics. We ensure a streamlined
          hiring experience backed by verified credentials and compliance standards.
        </p>
      </section>
    </>
  );
}
