interface LokasiProps {
  setActiveSection: (section: string) => void;
}

export default function Lokasi({ setActiveSection }: LokasiProps) {
  return (
    <section className="relative z-10 min-h-screen flex items-center px-5 py-32 lg:px-10">
      <div className="max-w-5xl mx-auto w-full text-center">
        <p className="uppercase tracking-[0.3em] text-[#49E46A] font-bold mb-4">
          LOKASI
        </p>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
          Nongkrong Santai
        </h2>

        <p className="text-white/80 max-w-2xl mx-auto mb-14 text-sm sm:text-base">
          Temukan tempat nongkrong favoritmu di Palaran. Suasana nyaman,
          kopi mantap, dan cocok buat santai malam.
        </p>

        <div className="rounded-[32px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm p-5">
          <iframe
            title="Google Maps Lokasi"
            src="https://maps.google.com/maps?q=samarinda&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="450"
            loading="lazy"
            className="rounded-[24px]"
          ></iframe>
        </div>

        <div className="flex justify-center mt-16">
          <button
            onClick={() => setActiveSection("home")}
            className="px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-[#49E46A] hover:text-black transition"
          >
            ← Kembali Home
          </button>
        </div>
      </div>
    </section>
  );
}
