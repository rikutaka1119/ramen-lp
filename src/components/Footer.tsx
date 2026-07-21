import React from 'react';
import { COLORS, FONTS } from '../constants/theme';

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 border-t border-amber-600/20 bg-[#080604] pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p
            className="text-xl font-bold tracking-[0.2em]"
            style={{ fontFamily: FONTS.serif }}
          >
            久臨
          </p>
          <p
            className="text-[10px] tracking-[0.3em] mt-1 opacity-60"
            style={{ fontFamily: FONTS.mono, color: COLORS.primary }}
          >
            KYURIN — OCHANOMIZU
          </p>
        </div>
        <p
          className="text-xs opacity-50"
          style={{ fontFamily: FONTS.mono, color: COLORS.textMuted }}
        >
          © 2026 KYURIN. All rights reserved.
        </p>
      </div>
    </footer>
  );
};