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
        <div className="flex items-start justify-between mb-8 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black leading-tight">Pesan Banyak</h2>
            <p className="text-white/70 mt-2 text-sm sm:text-base">Pilih beberapa menu sekaligus</p>
          </div>
          <button
            onClick={() => setBulkOrderOpen(false)}
            aria-label="Tutup Keranjang"
            className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-white/10 hover:bg-red-500 hover:text-white transition"
          >
            ✕
          </button>
        </div>

        {/* MENU LIST */}
        <div className="space-y-4">
          {bulkItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-5"
            >
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <div className="relative w-16 h-16 min-w-[64px] rounded-2xl overflow-hidden bg-black/20">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-black text-base sm:text-lg leading-tight line-clamp-2">
                    {item.name}
                  </h3>
                  <p className="text-[#49E46A] font-bold mt-1">{item.price}</p>
                </div>
              </div>

              {/* QTY */}
              <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto mt-1 sm:mt-0 pt-3 sm:pt-0 border-t sm:border-none border-white/10">
                <span className="text-white/50 text-sm font-semibold sm:hidden">Kuantitas:</span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => decreaseQty(item.name)}
                    aria-label={`Kurangi kuantitas ${item.name}`}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition text-lg"
                  >
                    −
                  </button>
                  <span className="w-8 text-center font-black">{item.qty}</span>
                  <button
                    onClick={() => increaseQty(item.name)}
                    aria-label={`Tambah kuantitas ${item.name}`}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#49E46A] text-black hover:scale-105 transition text-lg"
                  >
                    +
                  </button>
                </div>
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
