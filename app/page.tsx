"use client";

import { useState, useRef } from "react";

export default function GAKopiLandingPage() {
  const [activeSection, setActiveSection] = useState("home");

  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [paymentMethod, setPaymentMethod] = useState("QRIS");
  const [deliveryMethod, setDeliveryMethod] = useState("Pickup");
  const [address, setAddress] = useState("");
  const [orderComplete, setOrderComplete] = useState(false);

  const [liveOrders, setLiveOrders] = useState<any[]>([]);

  // MUSIC
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const menuItems = [
    {
      name: "Americano",
      price: "8K",
      image:
        "/americano.jpeg",
    },
    {
      name: "Kopi Krim",
      price: "10K",
      image: "/Krim.jpeg",
    },
    {
      name: "Kopi Aren",
      price: "12K",
      image: "/aren.jpeg",
    },
    {
      name: "Kopi Pandan",
      price: "10K",
      image: "/pandan.jpeg",
    },
    {
      name: "Butterscotch Latte",
      price: "12K",
      image: "/butterscoth.jpeg",
    },
  ];

  // COMPLETE ORDER
  // COMPLETE ORDER
  const handleCompleteOrder = () => {

    // LIVE ORDER
    const newOrder = {
      id: Date.now(),
      name: selectedItem?.name,
      time: "baru saja",
      closing: false,
    };

    setLiveOrders((prev) => [...prev, newOrder]);

    setTimeout(() => {

      // PLAY EXIT ANIMATION
      setLiveOrders((prev) =>
        prev.map((o) =>
          o.id === newOrder.id
            ? { ...o, closing: true }
            : o
        )
      );

      // REMOVE AFTER ANIMATION
      setTimeout(() => {
        setLiveOrders((prev) =>
          prev.filter((o) => o.id !== newOrder.id)
        );
      }, 500);

    }, 4000);

    // CLOSE POPUP
    setSelectedItem(null);

    // SUCCESS STATE
    setOrderComplete(true);

    setTimeout(() => {
      setOrderComplete(false);
    }, 3000);
  };

  // MUSIC TOGGLE
  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.volume = 0.2;
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <main className="min-h-screen bg-[#07150F] text-white overflow-hidden relative">

      {/* BACKGROUND */}
      <img
        src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-15"
      />

      <div className="absolute inset-0 bg-black/70 backdrop-blur-[3px]" />

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 px-3 sm:px-5 lg:px-10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-between gap-3">

          {/* LOGO */}
          <h1 className="text-lg sm:text-2xl font-black tracking-widest uppercase leading-none">
            GA KOPI
          </h1>

          {/* NAV */}
          <nav className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setActiveSection("home")}
              className={`px-3 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${activeSection === "home"
                ? "bg-[#49E46A] text-black"
                : "text-white/70 hover:text-white"
                }`}
            >
              Home
            </button>

            <button
              onClick={() => setActiveSection("menu")}
              className={`px-3 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${activeSection === "menu"
                ? "bg-[#49E46A] text-black"
                : "text-white/70 hover:text-white"
                }`}
            >
              Menu
            </button>

            <button
              onClick={() => setActiveSection("lokasi")}
              className={`px-3 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${activeSection === "lokasi"
                ? "bg-[#49E46A] text-black"
                : "text-white/70 hover:text-white"
                }`}
            >
              Lokasi
            </button>
          </nav>
        </div>
      </header>

      {/* HOME */}
      {activeSection === "home" && (
        <section className="relative z-10 min-h-screen flex items-start px-5 pt-32 pb-16 lg:px-10">
          <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">

            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#49E46A]/30 bg-[#49E46A]/10 text-[#49E46A] text-xs sm:text-sm font-bold uppercase tracking-wider mb-8">
                ☕ Street Coffee • Palaran
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-8 uppercase tracking-tight">
                GA
                <span className="block text-[#49E46A]">
                  KOPI
                </span>
              </h1>

              <p className="text-white/75 text-base sm:text-lg leading-relaxed max-w-xl mb-10">
                Rasanya mantap, bikin nongkrong makin nyaman.
                Tempat santai untuk menikmati kopi,
                cerita, dan malam di Palaran.
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
            <div className="relative">
              <img
                src="/homekopi.jpeg"
                alt="Coffee"
                className="rounded-[32px] shadow-lg h-[300px] sm:h-[420px] lg:h-[560px] w-full object-cover"
              />
            </div>
          </div>
        </section>
      )}

      {/* MENU */}
      {activeSection === "menu" && (
        <section className="relative z-10 min-h-screen flex items-center px-5 py-32 lg:px-10">
          <div className="max-w-7xl mx-auto w-full">

            <div className="mb-16 text-center">
              <p className="uppercase tracking-[0.3em] text-[#49E46A] font-bold mb-4">
                MENU KAMI
              </p>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-5">
                Kopi Favorit
              </h2>

              <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base">
                Pilihan kopi terbaik untuk menemani
                nongkrong santai dan obrolan malam.
              </p>
            </div>

            {/* MENU GRID */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-[28px] overflow-hidden border border-white/10 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-all duration-300"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 object-cover"
                  />

                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="font-black text-lg">
                        {item.name}
                      </h3>

                      <span className="bg-[#49E46A] text-black px-4 py-1 rounded-full text-sm font-bold">
                        {item.price}
                      </span>
                    </div>

                    {/* ORDER BUTTON */}
                    <button
                      onClick={() => {

                        setSelectedItem(item);

                      }}
                      className="w-full mt-5 bg-[#49E46A] text-black py-3 rounded-full font-bold hover:scale-105 transition"
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
      )}

      {/* LOKASI */}
      {activeSection === "lokasi" && (
        <section className="relative z-10 min-h-screen flex items-center px-5 py-32 lg:px-10">
          <div className="max-w-5xl mx-auto w-full text-center">

            <p className="uppercase tracking-[0.3em] text-[#49E46A] font-bold mb-4">
              LOKASI
            </p>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
              Nongkrong Santai
            </h2>

            <p className="text-white/70 max-w-2xl mx-auto mb-14 text-sm sm:text-base">
              Temukan tempat nongkrong favoritmu di
              Palaran. Suasana nyaman, kopi mantap,
              dan cocok buat santai malam.
            </p>

            <div className="rounded-[32px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm p-5">
              <iframe
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
      )}

      {/* CHECKOUT POPUP */}
      {selectedItem && (
        <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-5">

          <div className=" w-full max-w-lg bg-[#101915] border border-white/10 rounded-[32px] p-8 pb-32 max-h-[90vh] overflow-y-auto">

            <h2 className="text-3xl font-black mb-2">
              Checkout
            </h2>

            <p className="text-white/60 mb-8">
              Selesaikan pesanan kamu
            </p>

            {/* ITEM */}
            <div className="bg-white/5 rounded-2xl p-5 mb-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold">
                    {selectedItem.name}
                  </h3>

                  <p className="text-white/60">
                    Harga: {selectedItem.price}
                  </p>
                </div>

                <img
                  src={selectedItem.image}
                  alt=""
                  className="w-20 h-20 rounded-2xl object-cover"
                />
              </div>
            </div>

            {/* PAYMENT */}
            <div className="mb-6">
              <p className="font-bold mb-3">
                Metode Pembayaran
              </p>

              <div className="flex gap-3">
                <button
                  onClick={() => setPaymentMethod("QRIS")}
                  className={`flex-1 py-3 rounded-full font-bold transition ${paymentMethod === "QRIS"
                    ? "bg-[#49E46A] text-black"
                    : "bg-white/5"
                    }`}
                >
                  QRIS
                </button>

                <button
                  onClick={() => setPaymentMethod("Cash")}
                  className={`flex-1 py-3 rounded-full font-bold transition ${paymentMethod === "Cash"
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
              <p className="font-bold mb-3">
                Metode Pengambilan
              </p>

              <div className="flex gap-3">
                <button
                  onClick={() => setDeliveryMethod("Pickup")}
                  className={`flex-1 py-3 rounded-full font-bold transition ${deliveryMethod === "Pickup"
                    ? "bg-[#49E46A] text-black"
                    : "bg-white/5"
                    }`}
                >
                  Ambil Di Tempat
                </button>

                <button
                  onClick={() => setDeliveryMethod("Kurir")}
                  className={`flex-1 py-3 rounded-full font-bold transition ${deliveryMethod === "Kurir"
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
              <textarea
                placeholder="Masukkan alamat lengkap..."
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full h-28 rounded-2xl bg-white/5 border border-white/10 p-4 outline-none mb-6"
              />
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

                <img
                  src="/qris.jpg"
                  alt="QRIS"
                  className="w-64 mx-auto rounded-2xl mb-4"
                />

                <p className="text-black font-bold mb-2">
                  Scan QRIS Untuk Pembayaran
                </p>

                <p className="text-gray-600 text-sm">
                  Setelah transfer, klik Order Sekarang
                  untuk konfirmasi ke WhatsApp.
                </p>
              </div>
            )}

            {/* BUTTONS */}
            <div className="flex gap-3">

              <button
                onClick={() => setSelectedItem(null)}
                className="flex-1 py-4 rounded-full bg-white/5 font-bold"
              >
                Batal
              </button>

              {/* KURIR */}
              {deliveryMethod === "Kurir" ? (
                <a
                  href={`https://wa.me/6281234567890?text=${encodeURIComponent(
                    `Halo GA KOPI

                      Saya ingin order:

                      Menu: ${selectedItem.name}
                      Harga: ${selectedItem.price}

                      Pembayaran: ${paymentMethod}

                      Metode: ${deliveryMethod}

                      Alamat:
                      ${address || "-"}

                      Terima kasih.`
                  )}`}
                  target="_blank"
                  className="flex-1 py-4 rounded-full bg-[#49E46A] text-black font-black text-center"
                >
                  Order Sekarang
                </a>
              ) : (
                <button
                  onClick={handleCompleteOrder}
                  className="flex-1 py-4 rounded-full bg-[#49E46A] text-black font-black"
                >
                  Complete Order
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* SUCCESS POPUP */}
      {orderComplete && (
        <div className="fixed top-10 left-1/2 -translate-x-1/2 z-[200]">
          <div className="bg-[#49E46A] text-black px-8 py-5 rounded-2xl shadow-lg text-center font-bold">
            ✅ Order Berhasil
            <p className="text-sm mt-1">
              Silakan datang ke GA KOPI
            </p>
          </div>
        </div>
      )}

      {/* FLOATING CONTROLS */}
      <div className="fixed bottom-5 right-5 z-[999] flex flex-col items-center gap-3">

        {/* MUSIC */}
        <button
          onClick={toggleMusic}
          className="group"
        >
          <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-2xl border border-white/10 flex items-center justify-center shadow-lg hover:bg-[#49E46A]/10 hover:border-[#49E46A]/40 transition-all duration-300">

            {/* OFF STATE */}
            {!isPlaying ? (
              <div className="relative flex items-center justify-center">

                {/* OUTER DISC */}
                <div className="w-7 h-7 rounded-full border-2 border-[#49E46A] flex items-center justify-center">

                  {/* INNER DOT */}
                  <div className="w-2 h-2 rounded-full bg-[#49E46A]" />
                </div>

                {/* MUSIC NOTE */}
                <div className="absolute -right-1 -top-1 text-[#49E46A] text-[10px]">
                  ♪
                </div>
              </div>
            ) : (

              /* ON STATE - EQUALIZER */
              <div className="relative flex items-end gap-[3px] h-5">

                <span
                  className="w-[4px] rounded-full bg-[#49E46A] animate-[equalizer1_0.8s_ease-in-out_infinite]"
                />

                <span
                  className="w-[4px] rounded-full bg-[#49E46A] animate-[equalizer2_1s_ease-in-out_infinite]"
                />

                <span
                  className="w-[4px] rounded-full bg-[#49E46A] animate-[equalizer3_0.6s_ease-in-out_infinite]"
                />
              </div>
            )}
          </div>
        </button>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          className="group"
        >
          <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.35)] hover:scale-110 transition-all duration-300">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="white"
              className="w-6 h-6"
            >
              <path d="M19.11 17.34c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.48-.88-.78-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.23 5.14 4.53.72.3 1.28.48 1.72.62.72.23 1.37.2 1.88.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
              <path d="M16.02 3C8.83 3 3 8.82 3 16c0 2.82.9 5.43 2.43 7.56L3.1 29l5.6-2.26A12.94 12.94 0 0016.02 29C23.2 29 29 23.18 29 16S23.2 3 16.02 3zm0 23.67c-2.2 0-4.24-.65-5.95-1.78l-.42-.27-3.32 1.34 1.4-3.23-.28-.44A10.6 10.6 0 015.33 16c0-5.9 4.8-10.69 10.7-10.69 5.88 0 10.67 4.8 10.67 10.69 0 5.9-4.8 10.67-10.68 10.67z" />
            </svg>
          </div>
        </a>
      </div>

      {/* AUDIO */}
      <audio ref={audioRef} loop>
        <source src="/Naruto - Afternoon of Konoha.mp3" type="audio/mpeg" />
      </audio>
      
      {/* LIVE ORDER POPUP */}
        <div className="fixed bottom-24 left-5 z-[9999] flex flex-col gap-3">
          {liveOrders.map((order) => (
            <div
              key={order.id}
              className={`
        px-5 py-4
        rounded-2xl
        bg-black/70
        backdrop-blur-xl
        border border-white/10
        shadow-2xl
        min-w-[220px]
        ${order.closing
                  ? "animate-slideDown"
                  : "animate-slideUp"
                }
      `}
            >
              <p className="text-white/60 text-xs">
                Baru saja order
              </p>

              <h3 className="font-bold text-white mt-1">
                ☕ {order.name}
              </h3>

              <p className="text-[#49E46A] text-sm mt-1">
                {order.time}
              </p>
            </div>
          ))}
        </div>
    </main>
  );
}