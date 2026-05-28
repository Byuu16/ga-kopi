import Image from "next/image";
import { MenuItem, BulkItem } from "../types";

interface CheckoutModalProps {
  selectedItem: MenuItem;
  setSelectedItem: (item: MenuItem | null) => void;
  bulkItems: BulkItem[];
  paymentMethod: string;
  setPaymentMethod: (method: string) => void;
  deliveryMethod: string;
  setDeliveryMethod: (method: string) => void;
  address: string;
  setAddress: (address: string) => void;
  isWhatsappReady: boolean;
  handleCompleteOrder: () => void;
}

export default function CheckoutModal({
  selectedItem,
  setSelectedItem,
  bulkItems,
  paymentMethod,
  setPaymentMethod,
  deliveryMethod,
  setDeliveryMethod,
  address,
  setAddress,
  isWhatsappReady,
  handleCompleteOrder,
}: CheckoutModalProps) {
  return (
    <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-5">
      <div className=" w-full max-w-lg bg-[#101915] border border-white/10 rounded-[32px] p-8 pb-32 max-h-[90vh] overflow-y-auto">
        <h2 className="text-3xl font-black mb-2">Checkout</h2>
        <p className="text-white/70 mb-8">Selesaikan pesanan kamu</p>

        {/* ITEM */}
        <div className="bg-white/5 rounded-2xl p-5 mb-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold">{selectedItem.name}</h3>
              <p className="text-white/70">Harga: {selectedItem.price}</p>
            </div>

            {selectedItem.name.includes("Bulk Order") ? (
              <div className="flex flex-wrap gap-2 mt-3">
                {bulkItems
                  .filter((item) => item.qty > 0)
                  .map((item, index) => (
                    <div
                      key={index}
                      className="px-3 py-2 rounded-xl bg-[#49E46A]/10 border border-[#49E46A]/20 text-sm font-bold text-[#49E46A]"
                    >
                      {item.name} × {item.qty}
                    </div>
                  ))}
              </div>
            ) : (
              <div className="relative w-24 h-24 rounded-2xl overflow-hidden">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
            )}
          </div>
        </div>

        {/* PAYMENT */}
        <div className="mb-6">
          <p className="font-bold mb-3">Metode Pembayaran</p>
          <div className="flex gap-3">
            <button
              onClick={() => setPaymentMethod("QRIS")}
              className={`flex-1 py-3 rounded-full font-bold transition ${
                paymentMethod === "QRIS"
                  ? "bg-[#49E46A] text-black"
                  : "bg-white/5"
              }`}
            >
              QRIS
            </button>
            <button
              onClick={() => setPaymentMethod("Cash")}
              className={`flex-1 py-3 rounded-full font-bold transition ${
                paymentMethod === "Cash"
                  ? "bg-[#49E46A] text-black"
                  : "bg-white/5"
              }`}
            >
              Cash
            </button>
          </div>
        </div>

        {/* DELIVERY */}
        <div className="mb-6">
          <p className="font-bold mb-3">Metode Pengambilan</p>
          <div className="flex gap-3">
            <button
              onClick={() => setDeliveryMethod("Pickup")}
              className={`flex-1 py-3 rounded-full font-bold transition ${
                deliveryMethod === "Pickup"
                  ? "bg-[#49E46A] text-black"
                  : "bg-white/5"
              }`}
            >
              Ambil Di Tempat
            </button>
            <button
              onClick={() => setDeliveryMethod("Kurir")}
              className={`flex-1 py-3 rounded-full font-bold transition ${
                deliveryMethod === "Kurir"
                  ? "bg-[#49E46A] text-black"
                  : "bg-white/5"
              }`}
            >
              Kurir
            </button>
          </div>
        </div>

        {/* ADDRESS */}
        {deliveryMethod === "Kurir" && (
          <div className="mb-6 animate-slideUp">
            <p className="font-bold mb-2">Alamat Pengiriman</p>
            <textarea
              placeholder="Masukkan alamat lengkap pengiriman..."
              aria-label="Alamat Pengiriman"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className={`w-full h-28 rounded-2xl bg-white/5 border ${
                address.trim().length === 0 ? "border-red-500/50" : "border-white/10"
              } p-4 outline-none transition`}
            />
            {address.trim().length === 0 && (
              <p className="text-red-400 text-sm mt-1">Alamat wajib diisi untuk metode kurir.</p>
            )}
          </div>
        )}

        {/* QRIS PICKUP */}
        {paymentMethod === "QRIS" && deliveryMethod === "Pickup" && (
          <div className="bg-white rounded-2xl p-4 mb-6 text-center">
            <p className="text-black font-semibold">
              Silakan scan QRIS saat datang ke kasir
            </p>
          </div>
        )}

        {/* QRIS KURIR */}
        {paymentMethod === "QRIS" && deliveryMethod === "Kurir" && (
          <div className="bg-white rounded-2xl p-5 mb-6 text-center">
            <div className="relative w-64 h-64 mx-auto mb-4 rounded-2xl overflow-hidden">
              <Image src="/qris.jpg" alt="QRIS" fill className="object-cover" />
            </div>
            <p className="text-black font-bold mb-2">
              Scan QRIS Untuk Pembayaran
            </p>
            <p className="text-gray-600 text-sm">
              Setelah transfer, klik Order Sekarang untuk konfirmasi ke WhatsApp.
            </p>
          </div>
        )}

        {/* BUTTONS */}
        <div className="flex gap-3">
          <button
            onClick={() => setSelectedItem(null)}
            className="flex-1 py-4 rounded-full bg-white/5 font-bold hover:bg-white/10 transition"
          >
            Batal
          </button>

          {/* KURIR */}
          {deliveryMethod === "Kurir" ? (
            <a
              href={
                isWhatsappReady
                  ? `https://wa.me/6281234567890?text=${encodeURIComponent(
                      `Halo GA KOPI\n\nSaya ingin order:\nMenu: ${selectedItem.name}\nHarga: ${selectedItem.price}\n\nPembayaran: ${paymentMethod}\nMetode: ${deliveryMethod}\nAlamat:\n${address}\n\nTerima kasih.`
                    )}`
                  : "#"
              }
              target={isWhatsappReady ? "_blank" : "_self"}
              rel="noreferrer"
              className={`flex-1 py-4 rounded-full font-black text-center transition ${
                isWhatsappReady
                  ? "bg-[#49E46A] text-black hover:scale-105"
                  : "bg-gray-600 text-gray-400 cursor-not-allowed"
              }`}
              onClick={(e) => {
                if (!isWhatsappReady) {
                  e.preventDefault();
                } else {
                  handleCompleteOrder();
                }
              }}
            >
              Order Sekarang
            </a>
          ) : (
            <button
              onClick={handleCompleteOrder}
              className="flex-1 py-4 rounded-full bg-[#49E46A] text-black font-black hover:scale-105 transition"
            >
              Complete Order
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
