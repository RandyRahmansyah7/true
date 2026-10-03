import SectionHeader from "@/components/common/SectionHeader";
import { PORTFOLIO_ITEMS } from "@/data/landing-data";

export default function PortfolioSection() {
  const getPaddingClasses = (index: number) => {
    if (index === 0) return "pt-6 md:pt-0 md:pr-8";
    if (index === 1) return "pt-6 md:pt-0 md:px-8";
    return "pt-6 md:pt-0 md:pl-8";
  };

  return (
    <section id="use-cases" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 scroll-mt-20">
      <SectionHeader
        title="Portofolio"
        description="Studi kasus nyata mengenai bagaimana strategi digital kami membantu mitra bisnis mencatatkan pertumbuhan signifikan."
      />

      <div className="bg-brandDark text-white rounded-[35px] sm:rounded-[45px] p-6 sm:p-10 lg:p-12 reveal-on-scroll">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-700">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <div
              key={index}
              className={`${getPaddingClasses(index)} flex flex-col justify-between space-y-6`}
            >
              <p className="text-base text-gray-300 leading-relaxed">
                {item.description}
              </p>
              <a
                href={item.href}
                className="inline-flex items-center gap-2 text-brandLime hover:underline text-lg font-medium"
              >
                Lihat Studi Kasus ↗
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
