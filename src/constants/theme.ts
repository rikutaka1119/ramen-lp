import React from 'react';

export const COLORS = {
  primary: '#C8922A',
  primaryDark: '#A07020',
  bgDark: '#0C0906',
  bgWood: '#3B2210',
  bgLight: '#E8E0D0',
  textMuted: '#D4C5B0',
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
  backgroundColor: '#2B1608', // より深みのある濃い木目ベース色
  backgroundImage: `
    repeating-linear-gradient(
      90deg,
      transparent 0px,
      transparent 12px,
      rgba(200, 130, 60, 0.05) 12px,
      rgba(200, 130, 60, 0.05) 14px,
      transparent 14px,
      transparent 28px,
      rgba(0, 0, 0, 0.15) 28px,
      rgba(0, 0, 0, 0.15) 31px
    ),
    repeating-linear-gradient(
      88deg,
      transparent 0px,
      rgba(255, 180, 90, 0.04) 4px,
      transparent 8px,
      transparent 45px,
      rgba(0, 0, 0, 0.08) 46px,
      transparent 50px
    ),
    repeating-linear-gradient(
      92deg,
      transparent 0px,
      transparent 6px,
      rgba(160, 90, 30, 0.06) 6px,
      rgba(160, 90, 30, 0.06) 8px,
      transparent 8px
    ),
    linear-gradient(180deg, #241105 0%, #381E0B 50%, #200E04 100%)
  `,
};