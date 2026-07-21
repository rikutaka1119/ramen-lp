import React from 'react';

export const COLORS = {
  primary: '#C8922A',
  primaryDark: '#A07020',
  bgDark: '#0C0906',
  bgWood: '#3B2210',
  bgLight: '#E8E0D0',
  textMuted: '#9E8E7A',
  textLight: '#F0E8D8',
  textDark: '#1A1208',
} as const;

export const FONTS = {
  serif: "'Shippori Mincho B1', serif",
  sans: "'Noto Sans JP', sans-serif",
  mono: "'JetBrains Mono', monospace",
  display: "'Playfair Display', serif",
} as const;

export const WOOD_BG_STYLE: React.CSSProperties = {
  backgroundColor: COLORS.bgWood,
  backgroundImage: `
    repeating-linear-gradient(
      88deg,
      transparent 0px,
      transparent 18px,
      rgba(255,210,130,0.045) 18px,
      rgba(255,210,130,0.045) 19px,
      transparent 19px,
      transparent 34px,
      rgba(0,0,0,0.07) 34px,
      rgba(0,0,0,0.07) 36px
    ),
    linear-gradient(180deg, #3B2210 0%, #44280E 40%, #38200C 100%)
  `,
};