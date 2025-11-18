import React from "react";

const LegalModal = ({ open, onClose, title, children }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[9999]">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl p-6 relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-3 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-zenfoo-dark mb-4">{title}</h2>

        <div className="text-zenfoo-muted leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
          {children}
        </div>

      </div>
    </div>
  );
};

export default LegalModal;
