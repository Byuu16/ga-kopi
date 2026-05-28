import Image from "next/image";

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navbar({
  activeSection,
  setActiveSection,
}: NavbarProps) {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-2 sm:px-5 lg:px-10 py-4">
      <div
        className="
          max-w-7xl mx-auto
          px-3 sm:px-6
          py-3
          rounded-full
          border border-white/10
          bg-white/5
          backdrop-blur-sm
          flex items-center justify-between
          overflow-hidden
        "
      >
        {/* LEFT */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {/* LOGO */}
          <div
            className="
              w-[44px] h-[44px]
              sm:w-[52px] sm:h-[52px]
              min-w-[44px]
              min-h-[44px]
              rounded-full
              overflow-hidden
              bg-white
              border border-white/10
              flex-shrink-0
            "
          >
            <Image
              src="/ga-kopi.jpeg"
              alt="GA Kopi"
              width={52}
              height={52}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* TEXT */}
          <h1
            className="
              text-base sm:text-2xl
              font-black
              uppercase
              leading-none
              whitespace-nowrap
            "
          >
            GA <span className="text-[#39FF6A]">KOPI</span>
          </h1>
        </div>

        {/* RIGHT */}
        <nav className="flex items-center gap-1 sm:gap-3 ml-2">
          <button
            onClick={() => setActiveSection("home")}
            className={`
              px-3 sm:px-5
              py-2
              rounded-full
              text-[11px] sm:text-sm
              font-semibold
              transition-all duration-300
              whitespace-nowrap
              ${
                activeSection === "home"
                  ? "bg-[#49E46A] text-black"
                  : "text-white/70 hover:text-white"
              }
            `}
          >
            Home
          </button>

          <button
            onClick={() => setActiveSection("menu")}
            className={`
              px-3 sm:px-5
              py-2
              rounded-full
              text-[11px] sm:text-sm
              font-semibold
              transition-all duration-300
              whitespace-nowrap
              ${
                activeSection === "menu"
                  ? "bg-[#49E46A] text-black"
                  : "text-white/70 hover:text-white"
              }
            `}
          >
            Menu
          </button>

          <button
            onClick={() => setActiveSection("lokasi")}
            className={`
              px-3 sm:px-5
              py-2
              rounded-full
              text-[11px] sm:text-sm
              font-semibold
              transition-all duration-300
              whitespace-nowrap
              ${
                activeSection === "lokasi"
                  ? "bg-[#49E46A] text-black"
                  : "text-white/70 hover:text-white"
              }
            `}
          >
            Lokasi
          </button>
        </nav>
      </div>
    </header>
  );
}