import { LiveOrder } from "../types";

interface LiveOrderPopupProps {
  liveOrders: LiveOrder[];
}

export default function LiveOrderPopup({ liveOrders }: LiveOrderPopupProps) {
  if (liveOrders.length === 0) return null;

  return (
    <div className="fixed bottom-24 left-5 z-[9999] flex flex-col gap-3 pointer-events-none">
      {liveOrders.map((order) => (
        <div
          key={order.id}
          className={`px-5 py-4 rounded-2xl bg-black/70 backdrop-blur-xl border border-white/10 shadow-2xl min-w-[220px] ${
            order.closing ? "animate-slideDown" : "animate-slideUp"
          }`}
        >
          <p className="text-white/60 text-xs">Baru saja order</p>
          <h3 className="font-bold text-white mt-1">☕ {order.name}</h3>
          <p className="text-[#49E46A] text-sm mt-1">{order.time}</p>
        </div>
      ))}
    </div>
  );
}
