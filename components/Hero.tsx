import Image from "next/image";

interface HeroProps {
  setActiveSection: (section: string) => void;
}

export default function Hero({ setActiveSection }: HeroProps) {
  return (
    <section className="relative z-10 min-h-screen flex items-start px-5 pt-32 pb-16 lg:px-10">
      <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        {/* LEFT */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#49E46A]/30 bg-[#49E46A]/10 text-[#49E46A] text-xs sm:text-sm font-bold uppercase tracking-wider mb-8">
            ☕ Street Coffee • Palaran
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-8 uppercase tracking-tight">
            GA
            <span className="block text-[#49E46A]">KOPI</span>
          </h1>

          <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-xl mb-10">
            Rasanya mantap, bikin nongkrong makin nyaman. Tempat santai
            untuk menikmati kopi, cerita, dan malam di Palaran.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setActiveSection("menu")}
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white text-black font-bold hover:scale-105 transition text-sm sm:text-base"
            >
              LIHAT MENU
            </button>

            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noreferrer"
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-[#49E46A] text-black font-bold hover:scale-105 transition text-sm sm:text-base"
            >
              ORDER WHATSAPP
            </a>
          </div>

          {/* EXTRA BUTTON */}
          <div className="flex flex-wrap gap-4 mt-10">
            <button
              onClick={() => setActiveSection("menu")}
              className="px-4 sm:px-5 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-[#49E46A] hover:text-black transition text-sm"
            >
              ☕ Menu Kopi
            </button>

            <button
              onClick={() => setActiveSection("lokasi")}
              className="px-4 sm:px-5 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-[#49E46A] hover:text-black transition text-sm"
            >
              📍 Lokasi Cafe
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative h-[300px] sm:h-[420px] lg:h-[560px] w-full rounded-[32px] shadow-lg overflow-hidden">
          <Image
            src="/homekopi.jpeg"
            alt="Coffee"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
