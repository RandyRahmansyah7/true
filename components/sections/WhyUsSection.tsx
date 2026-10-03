import SectionHeader from "@/components/common/SectionHeader";
import { WHY_US_ITEMS } from "@/data/landing-data";

export default function WhyUsSection() {
  const getDelayClass = (index: number) => {
    if (index === 1) return "reveal-delay-1";
    if (index === 2) return "reveal-delay-2";
    return "";
  };

  return (
    <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 scroll-mt-20">
      <SectionHeader
        title="Mengapa kami"
        description="Alasan mengapa brand ternama dan bisnis berkembang memercayakan strategi pertumbuhan digital mereka kepada tim profesional kami."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {WHY_US_ITEMS.map((item, index) => (
          <div
            key={item.number}
            className={`${
              item.isDark ? "bg-brandDark text-white" : "bg-brandGrey text-brandDark"
            } p-8 card-border-sm shadow-solid hover:shadow-solid-lg transition-all space-y-4 flex flex-col justify-start reveal-on-scroll ${getDelayClass(index)}`}
          >
            <div className="w-12 h-12 bg-brandLime text-brandDark rounded-xl border border-brandDark flex items-center justify-center font-bold text-2xl shrink-0">
              {item.number}
            </div>
            <h3 className={`text-2xl font-bold ${item.isDark ? "text-white" : "text-brandDark"}`}>
              {item.title}
            </h3>
            <p className={`leading-relaxed text-sm sm:text-base ${item.isDark ? "text-gray-300" : "text-gray-600"}`}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
