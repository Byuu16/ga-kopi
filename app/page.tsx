"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { MenuItem, BulkItem, LiveOrder } from "../types";
import { menuItems } from "../data/menu";

// Components
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MenuSection from "../components/MenuSection";
import Lokasi from "../components/Lokasi";
import CheckoutModal from "../components/CheckoutModal";
import BulkOrderModal from "../components/BulkOrderModal";
import FloatingControls from "../components/FloatingControls";
import LiveOrderPopup from "../components/LiveOrderPopup";

export default function GAKopiLandingPage() {
  const [activeSection, setActiveSection] = useState("home");

  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [bulkOrderOpen, setBulkOrderOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("QRIS");
  const [deliveryMethod, setDeliveryMethod] = useState("Pickup");
  const [address, setAddress] = useState("");
  const [orderComplete, setOrderComplete] = useState(false);

  const [liveOrders, setLiveOrders] = useState<LiveOrder[]>([]);

  // MUSIC
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const [bulkItems, setBulkItems] = useState<BulkItem[]>(
    menuItems.map((item) => ({ ...item, qty: 0 }))
  );

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
        prev.map((o) => (o.id === newOrder.id ? { ...o, closing: true } : o))
      );

      // REMOVE AFTER ANIMATION
      setTimeout(() => {
        setLiveOrders((prev) => prev.filter((o) => o.id !== newOrder.id));
      }, 500);
    }, 4000);

    // CLOSE POPUP
    setSelectedItem(null);
    setAddress(""); // Reset address

    // SUCCESS STATE
    setOrderComplete(true);

    // RESET BULK ITEMS
    setBulkItems(menuItems.map((item) => ({ ...item, qty: 0 })));

    // HIDE SUCCESS ALERT
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

  // INCREASE
  const increaseQty = (name: string) => {
    setBulkItems((prev) =>
      prev.map((item) =>
        item.name === name ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  // DECREASE
  const decreaseQty = (name: string) => {
    setBulkItems((prev) =>
      prev.map((item) =>
        item.name === name && item.qty > 0
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  // TOTAL
  const totalBulkPrice = bulkItems.reduce(
    (total, item) => total + parseInt(item.price.replace("K", "")) * item.qty,
    0
  );

  // TOTAL ITEM
  const totalBulkItems = bulkItems.reduce((total, item) => total + item.qty, 0);

  // Validasi apakah tombol WhatsApp aktif
  const isWhatsappReady =
    deliveryMethod === "Pickup" || (deliveryMethod === "Kurir" && address.trim().length > 0);

  return (
    <main className="min-h-screen bg-[#07150F] text-white overflow-hidden relative">
      {/* BACKGROUND */}
      <Image
        src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop"
        alt="Background"
        fill
        className="absolute inset-0 object-cover opacity-15"
        priority
      />

      <div className="absolute inset-0 bg-black/70 backdrop-blur-[3px]" />

      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {activeSection === "home" && <Hero setActiveSection={setActiveSection} />}

      {activeSection === "menu" && (
        <MenuSection
          menuItems={menuItems}
          setSelectedItem={setSelectedItem}
          setActiveSection={setActiveSection}
        />
      )}

      {activeSection === "lokasi" && <Lokasi setActiveSection={setActiveSection} />}

      {selectedItem && (
        <CheckoutModal
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          bulkItems={bulkItems}
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
          deliveryMethod={deliveryMethod}
          setDeliveryMethod={setDeliveryMethod}
          address={address}
          setAddress={setAddress}
          isWhatsappReady={isWhatsappReady}
          handleCompleteOrder={handleCompleteOrder}
        />
      )}

      {/* SUCCESS POPUP */}
      {orderComplete && (
        <div className="fixed top-10 left-1/2 -translate-x-1/2 z-[200]">
          <div className="bg-[#49E46A] text-black px-8 py-5 rounded-2xl shadow-lg text-center font-bold">
            ✅ Order Berhasil Terkirim
            <p className="text-sm mt-1">
              Silakan datang ke GA KOPI atau tunggu kurir kami.
            </p>
          </div>
        </div>
      )}

      <FloatingControls isPlaying={isPlaying} toggleMusic={toggleMusic} />

      {/* AUDIO */}
      <audio ref={audioRef} loop>
        <source src="/Naruto - Afternoon of Konoha.mp3" type="audio/mpeg" />
      </audio>

      <LiveOrderPopup liveOrders={liveOrders} />

      {/* BULK ORDER BUTTON */}
      {activeSection === "menu" && (
        <button
          onClick={() => setBulkOrderOpen(true)}
          aria-label="Buka Keranjang Pesanan"
          className="fixed bottom-38 right-4 z-50 w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 hover:border-[#49E46A]/50 hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-[0_0_25px_rgba(73,228,106,0.15)]"
        >
          <div className="relative">
            <span className="text-2xl">🛒</span>
            <div className="absolute -top-2 -right-2 min-w-[20px] h-5 px-1 rounded-full bg-[#49E46A] text-black text-[10px] font-black flex items-center justify-center">
              {bulkItems.filter((item) => item.qty > 0).length}
            </div>
          </div>
        </button>
      )}

      <BulkOrderModal
        bulkOrderOpen={bulkOrderOpen}
        setBulkOrderOpen={setBulkOrderOpen}
        bulkItems={bulkItems}
        increaseQty={increaseQty}
        decreaseQty={decreaseQty}
        totalBulkItems={totalBulkItems}
        totalBulkPrice={totalBulkPrice}
        setSelectedItem={setSelectedItem}
      />
    </main>
  );
}
