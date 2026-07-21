import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { MENUS } from '../data/ramenData';
import { COLORS, FONTS, WOOD_BG_STYLE } from '../constants/theme';

export const MenuSection: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const mq1 = window.matchMedia('(min-width: 1024px)');
    const mq2 = window.matchMedia('(min-width: 640px)');
    const update = () => {
      if (mq1.matches) setVisibleCount(3);
      else if (mq2.matches) setVisibleCount(2);
      else setVisibleCount(1);
    };
    update();
    mq1.addEventListener('change', update);
    mq2.addEventListener('change', update);
    return () => {
      mq1.removeEventListener('change', update);
      mq2.removeEventListener('change', update);
    };
  }, []);

  const maxIndex = Math.max(0, MENUS.length - visibleCount);

  useEffect(() => {
    setSlideIndex((i) => Math.min(i, maxIndex));
  }, [visibleCount, maxIndex]);

  const prev = () => setSlideIndex((i) => Math.max(0, i - 1));
  const next = () => setSlideIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <section id="メニュー" className="py-32 lg:py-40 relative overflow-hidden" style={WOOD_BG_STYLE}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 50% 0%, rgba(200,146,42,0.08) 0%, transparent 75%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-end justify-between mb-16 gap-6 flex-wrap">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <span
                className="text-xs tracking-[0.4em]"
                style={{ fontFamily: FONTS.mono, color: COLORS.primary }}
              >
                02 / MENU
              </span>
              <div className="w-16 h-px bg-amber-600/30" />
            </div>
            <h2
              className="text-4xl lg:text-5xl font-bold tracking-[0.08em]"
              style={{ fontFamily: FONTS.serif, color: COLORS.textLight }}
            >
              看板の一杯
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span
              className="text-xs tracking-[0.3em] mr-3 hidden sm:block opacity-60"
              style={{ fontFamily: FONTS.mono, color: COLORS.primary }}
            >
              {slideIndex + 1} — {Math.min(slideIndex + visibleCount, MENUS.length)} / {MENUS.length}
            </span>
            <button
              onClick={prev}
              disabled={slideIndex === 0}
              className="w-12 h-12 flex items-center justify-center border transition-all duration-200 disabled:opacity-20 hover:bg-amber-600 hover:border-amber-600 hover:text-black border-amber-600/40 text-amber-500 rounded-sm"
              aria-label="前のメニューへ"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              disabled={slideIndex >= maxIndex}
              className="w-12 h-12 flex items-center justify-center border transition-all duration-200 disabled:opacity-20 hover:bg-amber-600 hover:border-amber-600 hover:text-black border-amber-600/40 text-amber-500 rounded-sm"
              aria-label="次のメニューへ"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-6"
            style={{
              transform: `translateX(calc(-${slideIndex} * (100% / ${visibleCount} + 24px / ${visibleCount})))`,
            }}
          >
            {MENUS.map((item) => (
              <div
                key={item.id}
                className="group flex-shrink-0 cursor-pointer bg-[#180E07]/80 border border-amber-600/20 rounded-sm overflow-hidden transition-all duration-300 hover:border-amber-600/50 hover:translate-y-[-4px]"
                style={{ width: `calc((100% - (24px * ${visibleCount - 1})) / ${visibleCount})` }}
              >
                {/* 統一されたアスペクト比の写真 */}
                <div className="relative overflow-hidden aspect-[4/3] bg-[#140D06]">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-[0.8] saturate-[0.9]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#180E07] via-transparent to-transparent" />
                  <span
                    className="absolute top-4 left-4 px-2.5 py-1 text-[9px] font-bold tracking-[0.25em]"
                    style={{
                      fontFamily: FONTS.mono,
                      backgroundColor: COLORS.primary,
                      color: COLORS.bgDark,
                    }}
                  >
                    {item.tag}
                  </span>
                  <span
                    className="absolute bottom-2 right-4 text-4xl font-bold leading-none text-amber-600/15"
                    style={{ fontFamily: FONTS.mono }}
                  >
                    {item.id}
                  </span>
                </div>

                <div className="p-6 lg:p-7">
                  <div className="flex items-center justify-between mb-3">
                    <p
                      className="text-sm tracking-[0.3em] opacity-60"
                      style={{ fontFamily: FONTS.mono, color: COLORS.primary }}
                    >
                      {item.reading}
                    </p>
                    <span
                      className="text-lg font-bold"
                      style={{ fontFamily: FONTS.mono, color: COLORS.primary }}
                    >
                      {item.price}
                    </span>
                  </div>
                  <h3
                    className="text-xl lg:text-2xl font-bold mb-3 tracking-[0.08em]"
                    style={{ fontFamily: FONTS.serif, color: COLORS.textLight }}
                  >
                    {item.name}
                  </h3>
                  <p className="text-xs leading-loose font-light" style={{ color: COLORS.textMuted }}>
                    {item.desc}
                  </p>
                </div>

                <div className="h-[2px] transition-all duration-300 group-hover:opacity-100 opacity-0 bg-amber-600" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-12">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setSlideIndex(i)}
              className="transition-all duration-300 h-[3px] rounded-full"
              style={{
                width: slideIndex === i ? '32px' : '8px',
                backgroundColor: slideIndex === i ? COLORS.primary : 'rgba(200,146,42,0.3)',
              }}
              aria-label={`スライド ${i + 1}`}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <p
            className="text-base tracking-widest opacity-60"
            style={{ fontFamily: FONTS.mono, color: COLORS.textMuted }}
          >
            ＊ 麺の量は「小：200g」「中：300g」「大：400g」
          </p>
        </div>
      </div>
    </section>
  );
};