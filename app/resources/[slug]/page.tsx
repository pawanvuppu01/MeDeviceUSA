import SectionPage from "@/components/SectionPage";

const TITLES: Record<string, string> = {
  blog: "Blog",
  "video-blogs": "Video Blogs",
  "video-shorts": "Video Shorts",
  "white-paper": "White Paper",
  downloads: "Downloads",
};

export default function Page({ params }: { params: { slug: string } }) {
  const title = TITLES[params.slug] ?? "Resources";
  return <SectionPage title={title} subtitle="Resources" />;
}
