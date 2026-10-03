import SectionHeader from "@/components/common/SectionHeader";
import { PRICING_PLANS } from "@/data/landing-data";

export default function PricingSection() {
  const getDelayClass = (index: number) => {
    if (index === 1) return "reveal-delay-1";
    if (index === 2) return "reveal-delay-2";
    return "";
  };

  return (
    <section id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 scroll-mt-20">
      <SectionHeader
        title="Harga"
        description="Investasi sekali bayar yang transparan — tanpa langganan bulanan, tanpa biaya tersembunyi."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
        {PRICING_PLANS.map((plan, index) => {
          const delayClass = getDelayClass(index);

          /* ─── Theme: Lime (Popular / Website) ─── */
          if (plan.theme === "lime") {
            return (
              <div
                key={plan.name}
                className={`bg-brandLime p-8 sm:p-10 card-border shadow-solid flex flex-col justify-between relative reveal-on-scroll ${delayClass}`}
              >
                <div className="absolute -top-4 right-8 bg-brandDark text-brandLime text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full border border-brandDark shadow-sm">
                  {plan.badge}
                </div>
                <div>
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-brandDark">{plan.name}</h3>
                    <p className="text-xs font-semibold uppercase tracking-wider text-brandDark/60 mt-1">
                      {plan.targetAudience}
                    </p>
                  </div>
                  <p className="text-brandDark/80 text-sm mb-6">{plan.description}</p>

                  {/* Price Block */}
                  <div className="mb-2">
                    {plan.pricePrefix && (
                      <span className="text-sm font-medium text-brandDark/70 block mb-0.5">
                        {plan.pricePrefix}
                      </span>
                    )}
                    <span className="text-4xl font-bold text-brandDark">{plan.price}</span>
                  </div>
                  <div className="mb-6 space-y-0.5">
                    <span className="text-sm font-semibold text-brandDark block">{plan.period}</span>
                    {plan.paymentHighlight && (
                      <span className="text-xs font-medium text-brandDark/60 block">
                        {plan.paymentHighlight}
                      </span>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3.5 text-sm text-brandDark font-semibold mb-6">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-brandDark text-brandLime flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Note */}
                  {plan.note && (
                    <p className="text-xs text-brandDark/50 mb-6 leading-relaxed">{plan.note}</p>
                  )}
                </div>
                <a
                  href={plan.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-4 bg-brandDark text-brandLime font-medium rounded-2xl hover:bg-gray-800 transition-colors shadow-md block"
                >
                  {plan.ctaText}
                </a>
              </div>
            );
          }

          /* ─── Theme: Dark (Software / Custom) ─── */
          if (plan.theme === "dark") {
            return (
              <div
                key={plan.name}
                className={`bg-brandDark p-8 sm:p-10 card-border shadow-solid flex flex-col justify-between reveal-on-scroll ${delayClass}`}
              >
                <div>
                  {/* Header */}
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mt-1">
                        {plan.targetAudience}
                      </p>
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-brandLime bg-white/10 px-3 py-1 rounded-full border border-brandLime shrink-0">
                      {plan.badge}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

                  {/* Price Block */}
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                  </div>
                  <div className="mb-6 space-y-0.5">
                    <span className="text-sm font-semibold text-gray-300 block">{plan.period}</span>
                    {plan.paymentHighlight && (
                      <span className="text-xs font-medium text-gray-500 block">
                        {plan.paymentHighlight}
                      </span>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3.5 text-sm text-gray-200 font-medium mb-6">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-brandLime text-brandDark flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Note */}
                  {plan.note && (
                    <p className="text-xs text-gray-500 mb-6 leading-relaxed">{plan.note}</p>
                  )}
                </div>
                <a
                  href={plan.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-4 bg-brandLime text-brandDark font-medium rounded-2xl hover:bg-lime-400 transition-colors shadow-md block"
                >
                  {plan.ctaText}
                </a>
              </div>
            );
          }

          /* ─── Theme: Grey (Landing Page / Default) ─── */
          return (
            <div
              key={plan.name}
              className={`bg-brandGrey p-8 sm:p-10 card-border shadow-solid flex flex-col justify-between reveal-on-scroll ${delayClass}`}
            >
              <div>
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-brandDark">{plan.name}</h3>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mt-1">
                      {plan.targetAudience}
                    </p>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-brandDark bg-white px-3 py-1 rounded-full border border-brandDark shrink-0">
                    {plan.badge}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-6">{plan.description}</p>

                {/* Price Block */}
                <div className="mb-2">
                  {plan.pricePrefix && (
                    <span className="text-sm font-medium text-gray-500 block mb-0.5">
                      {plan.pricePrefix}
                    </span>
                  )}
                  <span className="text-4xl font-bold text-brandDark">{plan.price}</span>
                </div>
                <div className="mb-6 space-y-0.5">
                  <span className="text-sm font-semibold text-brandDark block">{plan.period}</span>
                  {plan.paymentHighlight && (
                    <span className="text-xs font-medium text-gray-500 block">
                      {plan.paymentHighlight}
                    </span>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3.5 text-sm text-brandDark font-medium mb-6">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-brandLime flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Note */}
                {plan.note && (
                  <p className="text-xs text-gray-400 mb-6 leading-relaxed">{plan.note}</p>
                )}
              </div>
              <a
                href={plan.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-4 bg-brandDark text-white font-medium rounded-2xl hover:bg-gray-800 transition-colors shadow-md block"
              >
                {plan.ctaText}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
