// components/PageHero.tsx
export default function PageHero({
  title,
  subtitle,
  ctaText,
  ctaHref,
}: {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
}) {
  return (
    <section className="bg-green-700 text-white py-20 text-center">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-lg mb-6">{subtitle}</p>}
        {ctaText && ctaHref && (
          <a
            href={ctaHref}
            className="inline-block bg-white text-green-700 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition"
          >
            {ctaText}
          </a>
        )}
      </div>
    </section>
  );
}
