import SectionHeader from "@/components/common/SectionHeader";
import { SERVICES_ITEMS } from "@/data/landing-data";

export default function ServicesSection() {
  const getDelayClass = (index: number) => {
    if (index % 2 === 1) return "reveal-delay-1";
    return "";
  };

  return (
    <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 scroll-mt-20">
      <SectionHeader
        title="Layanan"
        description="Layanan digital marketing komprehensif yang dirancang untuk memperluas jangkauan pasar dan meningkatkan penjualan bisnis Anda."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
        {SERVICES_ITEMS.map((service, index) => {
          const isDark = service.theme === "dark";
          return (
            <div
              key={index}
              className={`${
                isDark ? "bg-brandDark" : "bg-brandGrey"
              } p-8 sm:p-12 card-border shadow-solid hover:shadow-solid-lg transition-all flex flex-col justify-between reveal-on-scroll ${getDelayClass(index)}`}
            >
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <span
                    className={`${
                      isDark ? "bg-white text-brandDark" : "bg-brandLime text-brandDark"
                    } text-2xl sm:text-3xl font-medium px-2 py-0.5 rounded-md inline-block`}
                  >
                    {service.titleLine1}
                  </span>
                  <br />
                  <span
                    className={`${
                      isDark ? "bg-white text-brandDark" : "bg-brandLime text-brandDark"
                    } text-2xl sm:text-3xl font-medium px-2 py-0.5 rounded-md inline-block`}
                  >
                    {service.titleLine2}
                  </span>
                </div>
              </div>
              <p className={`${isDark ? "text-gray-300" : "text-gray-600"} my-6 text-base leading-relaxed`}>
                {service.description}
              </p>
              <div className="flex items-center gap-4 pt-2">
                <a
                  href={service.href}
                  className={`w-10 h-10 rounded-full ${
                    isDark ? "bg-white text-brandDark" : "bg-brandDark text-brandLime"
                  } flex items-center justify-center hover:scale-110 transition-transform`}
                >
                  ↗
                </a>
                <span className={`text-lg font-medium ${isDark ? "text-white" : "text-brandDark"}`}>
                  Pelajari Selengkapnya
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
