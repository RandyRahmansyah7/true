"use client";

import { useState } from "react";
import SectionHeader from "@/components/common/SectionHeader";
import { FAQ_ITEMS } from "@/data/landing-data";

export default function FaqSection() {
  const [openFaqs, setOpenFaqs] = useState<{ [key: number]: boolean }>({});

  const toggleFaq = (id: number) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="faq" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 scroll-mt-20">
      <SectionHeader
        title="FAQ"
        description="Pertanyaan yang sering diajukan seputar proses pengerjaan, garansi teknis, fleksibilitas perubahan, dan pemilihan solusi terbaik untuk bisnis Anda."
      />

      <div className="space-y-4 sm:space-y-5">
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = !!openFaqs[item.id];
          const delayClass =
            index % 3 === 1 ? "reveal-delay-1" : index % 3 === 2 ? "reveal-delay-2" : "";
          const itemNumber = String(index + 1).padStart(2, "0");

          return (
            <div
              key={item.id}
              className={`bg-brandGrey border border-brandDark rounded-[24px] sm:rounded-[30px] p-6 sm:p-8 shadow-solid transition-all reveal-on-scroll ${delayClass}`}
            >
              <button
                onClick={() => toggleFaq(item.id)}
                className="faq-toggle flex justify-between items-center w-full text-left font-bold text-lg sm:text-xl md:text-2xl text-brandDark cursor-pointer gap-4"
              >
                <div className="flex items-center gap-4 sm:gap-6">
                  <span className="text-sm sm:text-base font-bold text-brandDark/40 font-mono shrink-0">
                    {itemNumber}
                  </span>
                  <span>{item.question}</span>
                </div>
                <span className="faq-icon text-2xl sm:text-3xl font-mono shrink-0 select-none">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              <div
                className={`faq-content ${
                  isOpen ? "block" : "hidden"
                } mt-4 text-gray-700 leading-relaxed border-t border-gray-300 pt-4 text-sm sm:text-base sm:pl-12`}
              >
                {item.answer}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
