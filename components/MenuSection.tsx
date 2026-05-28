import Image from "next/image";
import { MenuItem } from "../types";

interface MenuSectionProps {
  menuItems: MenuItem[];
  setSelectedItem: (item: MenuItem) => void;
  setActiveSection: (section: string) => void;
}

export default function MenuSection({ menuItems, setSelectedItem, setActiveSection }: MenuSectionProps) {
  return (
    <section className="relative z-10 min-h-screen flex items-center px-5 py-32 lg:px-10">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-16 text-center">
          <p className="uppercase tracking-[0.3em] text-[#49E46A] font-bold mb-4">
            MENU KAMI
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-5">
            Kopi Favorit
          </h2>
        </div>

        {/* MENU GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-[28px] overflow-hidden border border-white/10 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-all duration-300"
            >
              <div className="relative w-full h-64">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-black text-lg">{item.name}</h3>

                  <span className="bg-[#49E46A] text-black px-4 py-1 rounded-full text-sm font-bold">
                    {item.price}
                  </span>
                </div>

                {/* ORDER BUTTON */}
                <button
                  onClick={() => setSelectedItem(item)}
                  className="w-full mt-5 bg-[#49E46A] text-black py-4 rounded-full font-black hover:scale-105 transition-all duration-300"
                >
                  Order Sekarang
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* BACK BUTTON */}
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
