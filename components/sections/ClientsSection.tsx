import { CLIENT_LOGOS } from "@/data/landing-data";

export default function ClientsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 reveal-on-scroll">
      <div className="flex flex-wrap items-center justify-center sm:justify-between gap-6 sm:gap-8 opacity-80 grayscale hover:grayscale-0 transition-all duration-300">
        {CLIENT_LOGOS.map((client) => (
          <span key={client.name} className={`text-xl sm:text-2xl font-bold ${client.className}`}>
            {client.name}
          </span>
        ))}
      </div>
    </section>
  );
}
