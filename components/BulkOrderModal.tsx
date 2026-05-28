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
    <div
      className="
        fixed inset-0 z-[999]
        bg-black/70 backdrop-blur-sm
        flex items-end sm:items-center
        justify-center
        p-0 sm:p-4
      "
    >
      <div
        className="
          w-full max-w-2xl
          rounded-t-[32px] sm:rounded-[32px]
          border border-white/10
          bg-[#07110B]
          p-4 sm:p-6
          max-h-[92vh]
          overflow-y-auto
        "
      >
        {/* HEADER */}
        <div className="flex items-start justify-between mb-6 gap-4">
          <div>
            <h2 className="text-2xl sm:text-4xl font-black leading-tight">
              Pesan Banyak
            </h2>

            <p className="text-white/70 mt-1 text-sm sm:text-base">
              Pilih beberapa menu sekaligus
            </p>
          </div>

          <button
            onClick={() => setBulkOrderOpen(false)}
            aria-label="Tutup"
            className="
              w-10 h-10 sm:w-12 sm:h-12
              flex items-center justify-center
              rounded-full
              bg-white/10
              hover:bg-red-500
              hover:text-white
              transition
              shrink-0
            "
          >
            ✕
          </button>
        </div>

        {/* MENU LIST */}
        <div className="space-y-3 sm:space-y-4">
          {bulkItems.map((item, index) => (
            <div
              key={index}
              className="
                flex items-center
                gap-3
                rounded-3xl
                border border-white/10
                bg-white/5
                p-3 sm:p-5
              "
            >
              {/* IMAGE */}
              <div
                className="
                  relative
                  w-20 h-20
                  sm:w-24 sm:h-24
                  rounded-2xl
                  overflow-hidden
                  shrink-0
                "
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 80px, 96px"
                />
              </div>

              {/* CONTENT */}
              <div className="flex-1 min-w-0">
                <h3
                  className="
                    font-black
                    text-base sm:text-xl
                    leading-tight
                    break-words
                  "
                >
                  {item.name}
                </h3>

                <p
                  className="
                    text-[#49E46A]
                    font-black
                    mt-1
                    text-lg sm:text-2xl
                  "
                >
                  {item.price}
                </p>
              </div>

              {/* QTY */}
              <div
                className="
                  flex items-center
                  gap-2 sm:gap-3
                  ml-auto
                  shrink-0
                "
              >
                <button
                  onClick={() => decreaseQty(item.name)}
                  aria-label={`Kurangi ${item.name}`}
                  className="
                    w-9 h-9
                    sm:w-10 sm:h-10
                    rounded-full
                    bg-white/10
                    hover:bg-white/20
                    transition
                    flex items-center justify-center
                    text-lg
                    shrink-0
                  "
                >
                  −
                </button>

                <span
                  className="
                    w-6
                    text-center
                    font-black
                    text-sm sm:text-base
                  "
                >
                  {item.qty}
                </span>

                <button
                  onClick={() => increaseQty(item.name)}
                  aria-label={`Tambah ${item.name}`}
                  className="
                    w-9 h-9
                    sm:w-10 sm:h-10
                    rounded-full
                    bg-[#49E46A]
                    text-black
                    hover:scale-105
                    transition
                    flex items-center justify-center
                    text-lg
                    font-black
                    shrink-0
                  "
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="mt-6 border-t border-white/10 pt-5 pb-2 sm:pb-0">
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="text-white/60 text-sm sm:text-base">
                Total Item
              </p>

              <h3 className="text-xl sm:text-2xl font-black">
                {totalBulkItems} Item
              </h3>
            </div>

            <div className="text-right">
              <p className="text-white/60 text-sm sm:text-base">
                Total
              </p>

              <h3
                className="
                  text-2xl sm:text-4xl
                  font-black
                  text-[#49E46A]
                "
              >
                {totalBulkPrice}K
              </h3>
            </div>
          </div>

          <button
            onClick={() => {
              const selectedBulkItems = bulkItems.filter(
                (item) => item.qty > 0
              );

              if (selectedBulkItems.length === 0) return;

              setBulkOrderOpen(false);

              setSelectedItem({
                name: `Bulk Order (${totalBulkItems} Item)`,
                price: `${totalBulkPrice}K`,
                image: "/ga-kopi.jpeg",
              });
            }}
            className={`
              w-full
              py-4 sm:py-5
              rounded-2xl
              font-black
              text-base sm:text-lg
              transition-all duration-300
              ${
                totalBulkItems > 0
                  ? "bg-[#49E46A] text-black hover:scale-[1.02]"
                  : "bg-gray-700 text-gray-500 cursor-not-allowed"
              }
            `}
            disabled={totalBulkItems === 0}
          >
            Checkout Sekarang
          </button>
        </div>
      </div>
    </div>
  );
}