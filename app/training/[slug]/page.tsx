import SectionPage from "@/components/SectionPage";

const TITLES: Record<string, string> = {
  "live-training": "Live Training",
  "online-courses": "Online Courses",
};

export default function Page({ params }: { params: { slug: string } }) {
  const title = TITLES[params.slug] ?? "Training";
  return <SectionPage title={title} subtitle="Training" />;
}

