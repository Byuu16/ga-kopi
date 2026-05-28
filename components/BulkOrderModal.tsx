import Image from "next/image";
import { BulkItem, MenuItem } from "../types";

interface BulkOrderModalProps {
  bulkOrderOpen: boolean;
  setBulkOrderOpen: (open: boolean) => void;
  bulkItems: BulkItem[];
  increaseQty: (name: string) => void;
  decreaseQty: (name: string) => void;
  totalBulkItems: number;
  totalBulkPrice: number;
  setSelectedItem: (item: MenuItem) => void;
}

export default function BulkOrderModal({
  bulkOrderOpen,
  setBulkOrderOpen,
  bulkItems,
  increaseQty,
  decreaseQty,
  totalBulkItems,
  totalBulkPrice,
  setSelectedItem,
}: BulkOrderModalProps) {
  if (!bulkOrderOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="w-full max-w-2xl rounded-[32px] border border-white/10 bg-[#07110B] p-6 max-h-[90vh] overflow-y-auto">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-4xl font-black">Pesan Banyak</h2>
            <p className="text-white/70 mt-2">Pilih beberapa menu sekaligus</p>
          </div>
          <button
            onClick={() => setBulkOrderOpen(false)}
            aria-label="Tutup Keranjang"
            className="w-12 h-12 rounded-full bg-white/10 hover:bg-red-500 hover:text-white transition"
          >
            ✕
          </button>
        </div>

        {/* MENU LIST */}
        <div className="space-y-4">
          {bulkItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 p-4"
            >
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 min-w-[64px] rounded-2xl overflow-hidden bg-black/20">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-black text-sm sm:text-lg leading-tight line-clamp-2">
                      {item.name}
                    </h3>
                    <p className="text-[#49E46A] font-bold">{item.price}</p>
                  </div>
                </div>
              </div>

              {/* QTY */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => decreaseQty(item.name)}
                  aria-label={`Kurangi kuantitas ${item.name}`}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition"
                >
                  −
                </button>
                <span className="w-8 text-center font-black">{item.qty}</span>
                <button
                  onClick={() => increaseQty(item.name)}
                  aria-label={`Tambah kuantitas ${item.name}`}
                  className="w-10 h-10 rounded-full bg-[#49E46A] text-black hover:scale-105 transition"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="mt-8 border-t border-white/10 pt-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-white/70">Total Item</p>
              <h3 className="text-2xl font-black">{totalBulkItems} Item</h3>
            </div>
            <div className="text-right">
              <p className="text-white/70">Total</p>
              <h3 className="text-4xl font-black text-[#49E46A]">{totalBulkPrice}K</h3>
            </div>
          </div>

          <button
            onClick={() => {
              const selectedBulkItems = bulkItems.filter((item) => item.qty > 0);
              if (selectedBulkItems.length === 0) return;

              setBulkOrderOpen(false);
              setSelectedItem({
                name: `Bulk Order (${totalBulkItems} Item)`,
                price: `${totalBulkPrice}K`,
                image: "/ga-kopi.jpeg",
              });
            }}
            className={`w-full py-5 rounded-2xl font-black text-lg transition-all duration-300 ${
              totalBulkItems > 0
                ? "bg-[#49E46A] text-black hover:scale-[1.02]"
                : "bg-gray-700 text-gray-500 cursor-not-allowed"
            }`}
            disabled={totalBulkItems === 0}
          >
            Checkout Sekarang
          </button>
        </div>
      </div>
    </div>
  );
}
