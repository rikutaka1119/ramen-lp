import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { COLORS, FONTS } from '../constants/theme';

export const StickyCTA: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0C0906]/95 border-t border-amber-600/30 backdrop-blur-md p-3 flex items-center gap-3">
      <a
        href="tel:0000000000"
        className="flex-1 flex items-center justify-center gap-2 py-3 text-xs font-bold text-amber-500 border border-amber-600/50 rounded-sm"
        style={{ fontFamily: FONTS.sans }}
      >
        <Phone size={14} />
        電話予約
      </a>
      <a
        href="#店舗情報"
        className="flex-1 flex items-center justify-center gap-2 py-3 text-xs font-bold text-black bg-amber-600 rounded-sm shadow-lg"
        style={{ fontFamily: FONTS.sans }}
      >
        <Calendar size={14} />
        WEB予約
      </a>
    </div>
  );
};