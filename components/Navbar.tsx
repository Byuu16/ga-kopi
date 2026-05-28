import Image from "next/image";

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-3 sm:px-5 lg:px-10 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-between gap-3">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 border border-white/10 bg-white p-1 rounded-full overflow-hidden">
            <Image
              src="/ga-kopi.jpeg"
              alt="GA Kopi"
              fill
              className="object-cover rounded-full p-1"
              sizes="48px"
            />
          </div>

          <h1 className="text-lg sm:text-2xl font-black tracking-widest uppercase leading-none">
            GA <span className="text-[#39FF6A]">KOPI</span>
          </h1>
        </div>

        {/* NAV */}
        <nav className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setActiveSection("home")}
            className={`px-3 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
              activeSection === "home"
                ? "bg-[#49E46A] text-black"
                : "text-white/70 hover:text-white"
            }`}
          >
            Home
          </button>

          <button
            onClick={() => setActiveSection("menu")}
            className={`px-3 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
              activeSection === "menu"
                ? "bg-[#49E46A] text-black"
                : "text-white/70 hover:text-white"
            }`}
          >
            Menu
          </button>

          <button
            onClick={() => setActiveSection("lokasi")}
            className={`px-3 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
              activeSection === "lokasi"
                ? "bg-[#49E46A] text-black"
                : "text-white/70 hover:text-white"
            }`}
          >
            Lokasi
          </button>
        </nav>
      </div>
    </header>
  );
}
