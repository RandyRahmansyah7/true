"use client";

import { useState } from "react";
import { WHATSAPP_CONFIG } from "@/data/landing-data";

export default function ConsultationSection() {
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waText = `Halo WizardZ, nama saya ${name} (${business}). ${message}`;
    const url = WHATSAPP_CONFIG.createWhatsAppUrl(waText);
    window.open(url, "_blank");
  };

  return (
    <section id="quote" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 scroll-mt-20">
      <div className="bg-brandGrey rounded-[35px] sm:rounded-[45px] border border-brandDark p-6 sm:p-10 lg:p-14 shadow-solid relative overflow-hidden reveal-on-scroll">
        <div className="max-w-2xl space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-brandDark">Konsultasi Gratis Sekarang</h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Kirimkan pesan Anda secara langsung atau klik tombol WhatsApp di bawah untuk berdiskusi langsung dengan konsultan tim truegrid
          </p>

          <form id="consult-form" onSubmit={handleSubmit} className="space-y-4 pt-2">
            <div>
              <label className="block text-sm font-bold text-brandDark mb-2">Nama Lengkap</label>
              <input
                type="text"
                required
                id="form-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Masukkan nama Anda"
                className="w-full px-5 py-3.5 sm:py-4 rounded-xl border border-brandDark focus:outline-none focus:ring-2 focus:ring-brandLime bg-white transition-shadow"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-brandDark mb-2">Nama Bisnis / Website</label>
              <input
                type="text"
                id="form-business"
                value={business}
                onChange={(e) => setBusiness(e.target.value)}
                placeholder="Contoh: Toko Saya / tokosaya.com"
                className="w-full px-5 py-3.5 sm:py-4 rounded-xl border border-brandDark focus:outline-none focus:ring-2 focus:ring-brandLime bg-white transition-shadow"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-brandDark mb-2">Pesan Singkat</label>
              <textarea
                id="form-message"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Jelaskan kebutuhan pemasaran bisnis Anda..."
                className="w-full px-5 py-3.5 sm:py-4 rounded-xl border border-brandDark focus:outline-none focus:ring-2 focus:ring-brandLime bg-white transition-shadow resize-y"
              ></textarea>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                type="submit"
                className="px-8 py-4 bg-brandDark text-brandLime font-bold rounded-xl hover:bg-gray-800 transition-all text-center cursor-pointer shadow-md hover:shadow-lg active:scale-95"
              >
                Kirim Pesan VIA WA ↗
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
