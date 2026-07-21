import React from 'react';
import { ChevronDown, MapPin } from 'lucide-react';
import { IMAGES } from '../data/ramenData';
import { COLORS, FONTS } from '../constants/theme';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[680px] flex flex-col justify-end overflow-hidden">
      {/* 背景画像＋コントラストを高めるオーバーレイ */}
      <div className="absolute inset-0 bg-black">
        <img
          src={IMAGES.hero}
          alt="久臨の看板ラーメン"
          className="w-full h-full object-cover opacity-50 object-[center_40%] scale-105 transition-transform duration-1000"
        />
      </div>
      
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(12,9,6,0.4) 0%, rgba(12,9,6,0.7) 60%, #0C0906 100%)',
        }}
      />

      {/* サイドテキスト */}
      <div className="absolute top-1/2 right-8 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3 [writing-mode:vertical-rl]">
        <span
          className="text-base tracking-[0.4em] uppercase opacity-70"
          style={{ fontFamily: FONTS.mono, color: COLORS.primary }}
        >
          御茶ノ水 / TOKYO
        </span>
        <div className="w-px h-24 bg-amber-600/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-28 lg:pb-36 w-full">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-px bg-amber-600" />
          <span
            className="text-xs tracking-[0.4em] uppercase font-semibold"
            style={{ fontFamily: FONTS.mono, color: COLORS.primary }}
          >
            AUTHENTIC JAPANESE TSUKEMEN
          </span>
        </div>

        <h1
          className="text-6xl sm:text-8xl lg:text-9xl font-bold leading-none mb-6 text-foreground tracking-[0.08em] drop-shadow-lg"
          style={{ fontFamily: FONTS.serif }}
        >
          一杯入魂
        </h1>
        
        <p
          className="text-lg lg:text-xl mb-10 max-w-lg leading-relaxed font-light drop-shadow"
          style={{ color: COLORS.textLight, opacity: 0.9 }}
        >
          つけめんの新境地。動物系を極限まで強化したスープと、
          <br className="hidden sm:block" />
          器から溢れる圧倒的なボリュームで、つけめんの常識を塗り替える。
        </p>

        {/* FV直下の導線ボタン */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#メニュー"
            className="px-8 py-3.5 text-sm font-bold tracking-[0.2em] text-black bg-amber-600 rounded-sm transition-all duration-300 hover:bg-amber-500 hover:scale-105"
            style={{ fontFamily: FONTS.sans }}
          >
            メニューを見る
          </a>
          <a
            href="#店舗情報"
            className="flex items-center gap-2 px-8 py-3.5 text-sm font-bold tracking-[0.2em] text-amber-500 border border-amber-600/50 rounded-sm transition-all duration-300 hover:bg-amber-600/10 hover:border-amber-600"
            style={{ fontFamily: FONTS.sans }}
          >
            <MapPin size={14} />
            店舗案内
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span
          className="text-xs tracking-[0.3em]"
          style={{ fontFamily: FONTS.mono, color: COLORS.textMuted }}
        >
          SCROLL
        </span>
        <ChevronDown size={14} style={{ color: COLORS.primary }} className="animate-bounce" />
      </div>
    </section>
  );
};