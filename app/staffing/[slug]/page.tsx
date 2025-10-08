import SectionPage from "@/components/SectionPage";

const TITLES: Record<string, string> = {
  employers: "Employers",
  candidates: "Candidates",
  jobs: "View Jobs",
};

export default function Page({ params }: { params: { slug: string } }) {
  const title = TITLES[params.slug] ?? "Staffing & Recruiting";
  return <SectionPage title={title} subtitle="Staffing & Recruiting" />;
}
