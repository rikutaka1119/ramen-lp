import React from 'react';
import { IMAGES } from '../data/ramenData';
import { COLORS, FONTS } from '../constants/theme';

export const Philosophy: React.FC = () => {
  return (
    <section id="こだわり" className="py-32 lg:py-40 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span
                className="text-xs tracking-[0.4em]"
                style={{ fontFamily: FONTS.mono, color: COLORS.primary }}
              >
                01 / PHILOSOPHY
              </span>
              <div className="flex-1 h-px bg-amber-600/20" />
            </div>

            <h2
              className="text-4xl lg:text-5xl font-bold mb-8 leading-tight tracking-[0.08em]"
              style={{ fontFamily: FONTS.serif }}
            >
              新たな挑戦が
              <br />
              <span style={{ color: COLORS.primary }}>ここにある</span>
            </h2>

            <div className="space-y-6 leading-[2.1] font-light" style={{ color: COLORS.textMuted }}>
              <p>
                本店舗は、つけめん界を牽引し続ける六厘舎創業者・三田遼斉が、さらなる旨さの高みを目指して取り組んだ「新たな挑戦」の結晶です。
              </p>
              <p>
                既存の枠組みに捉われず、動物系食材の厚みを限界まで引き出した重厚なスープを開発。御茶ノ水店限定の、器を覆い尽くすチャーシューや極太メンマとともに、本能を揺さぶる一杯をお届けします。
              </p>
            </div>

            <div
              className="mt-12 pl-6 py-4 relative"
              style={{ borderLeft: `2px solid ${COLORS.primary}` }}
            >
              <p
                className="text-xl italic leading-relaxed"
                style={{ fontFamily: FONTS.display, color: COLORS.textLight }}
              >
                "既存の枠組みに捉われず、
                <br />
                本能を揺さぶる一杯を。"
              </p>
              <p
                className="mt-4 text-xs tracking-[0.2em]"
                style={{ color: COLORS.primary, fontFamily: FONTS.mono }}
              >
                — 六厘舎創業者・三田 遼斉
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-4 -left-4 right-8 bottom-8 border border-amber-600/20 rounded-sm pointer-events-none" />
            <img
              src={IMAGES.chef}
              alt="厨房で働く職人"
              className="relative w-full aspect-[4/3] object-cover brightness-[0.85] contrast-[1.05] rounded-sm shadow-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0C0906] to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};