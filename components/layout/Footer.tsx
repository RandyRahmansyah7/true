import Logo from "@/components/common/Logo";
import { NAV_LINKS } from "@/data/landing-data";

export default function Footer() {
  return (
    <footer className="bg-brandDark text-white mt-16 rounded-t-[45px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-gray-700 pb-8">
          <Logo textColor="text-white" />
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-brandLime transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="text-center md:text-left text-sm text-gray-400">
          &copy; 2026 Truegrid Digital Agency. Hak Cipta Dilindungi Undang-Undang.
        </div>
      </div>
    </footer>
  );
}
