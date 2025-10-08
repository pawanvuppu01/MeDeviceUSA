import SectionPage from "@/components/SectionPage";

const TITLES: Record<string, string> = {
  "combination-products": "Combination Products",
  "design-controls": "Design Controls",
  "risk-management": "Risk Management",
  "design-and-development": "Design & Development",
  "project-management": "Project Management",
  "quality-assurance": "Quality Assurance",
  "regulatory-affairs": "Regulatory Affairs",
  "human-factors": "Human Factors",
  "dhf-remediation": "DHF Remediation",
  "nih-sbir-sttr-grant-writing": "NIH SBIR/STTR Grant Writing",
  statistics: "Statistics",
  "startup-business": "Startup Business",
};

export default function Page({ params }: { params: { slug: string } }) {
  const title = TITLES[params.slug] ?? "Consulting Service";
  return <SectionPage title={title} subtitle="Consulting Services" />;
}

