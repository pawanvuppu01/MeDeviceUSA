"use client";

export default function SectionPage({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="container mx-auto px-6 py-16 space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-green-700">{title}</h1>
        {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
      </header>

      <div className="bg-white border rounded-xl p-6 shadow-sm">
        {children ?? (
          <p className="text-gray-700">
            This page is ready. Add your real content here.
          </p>
        )}
      </div>
    </div>
  );
}
