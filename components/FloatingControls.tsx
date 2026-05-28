interface FloatingControlsProps {
  isPlaying: boolean;
  toggleMusic: () => void;
}

export default function FloatingControls({ isPlaying, toggleMusic }: FloatingControlsProps) {
  return (
    <div className="fixed bottom-5 right-5 z-[999] flex flex-col items-center gap-3">
      {/* MUSIC */}
      <button
        onClick={toggleMusic}
        aria-label={isPlaying ? "Matikan Musik" : "Nyalakan Musik"}
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
              <span className="w-[4px] rounded-full bg-[#49E46A] animate-[equalizer1_0.8s_ease-in-out_infinite]" />
              <span className="w-[4px] rounded-full bg-[#49E46A] animate-[equalizer2_1s_ease-in-out_infinite]" />
              <span className="w-[4px] rounded-full bg-[#49E46A] animate-[equalizer3_0.6s_ease-in-out_infinite]" />
            </div>
          )}
        </div>
      </button>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noreferrer"
        aria-label="Hubungi via WhatsApp"
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
  );
}
