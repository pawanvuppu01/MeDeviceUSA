import PageHero from "@/components/PageHero";

export default function CandidatesPage() {
  return (
    <>
      <PageHero
        title="Candidates"
        subtitle="Explore rewarding opportunities in healthcare with Alovera Hospital"
        ctaText="View Openings"
        ctaHref="/staffing-recruiting/view-jobs"
      />
      <section className="container mx-auto py-16 px-6">
        <p className="text-gray-700">
          Join leading healthcare organizations that value your expertise.
          Apply easily and grow your career with exclusive access to
          nationwide opportunities.
        </p>
      </section>
    </>
  );
}
