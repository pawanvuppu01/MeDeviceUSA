import SectionPage from "@/components/SectionPage";

const TITLES: Record<string, string> = {
  "combination-products": "Combination Products",
  "end-to-end-integrated-device-solution": "End-to-End Integrated Device Solution",
  "dhf-remediation": "DHF Remediation",
  "quality-system-implementation": "Quality System Implementation",
  "end-to-end-product-development": "End-to-End Product Development",
  "outsourced-partner": "Outsourced Partner",
};

export default function Page({ params }: { params: { slug: string } }) {
  const title = TITLES[params.slug] ?? "Integrated Solution";
  return <SectionPage title={title} subtitle="Integrated Solutions" />;
}
