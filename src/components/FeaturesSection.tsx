import React from 'react';
import { FEATURES, IMAGES } from '../data/ramenData';
import { COLORS, FONTS } from '../constants/theme';

export const FeaturesSection: React.FC = () => {
  return (
    <section id="製品の特長" className="py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-4 mb-16">
          <span
            className="text-xs tracking-[0.4em]"
            style={{ fontFamily: FONTS.mono, color: COLORS.primary }}
          >
            03 / FEATURES
          </span>
          <div className="flex-1 h-px bg-amber-600/20" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <h2
              className="text-4xl lg:text-5xl font-bold mb-4 tracking-[0.08em]"
              style={{ fontFamily: FONTS.serif }}
            >
              製品の
              <br />
              <span style={{ color: COLORS.primary }}>特長</span>
            </h2>
            <p className="text-sm leading-loose mb-12 font-light" style={{ color: COLORS.textMuted }}>
              久臨 御茶ノ水店だけの、三つの挑戦。
            </p>

            <div className="space-y-0">
              {FEATURES.map((step, i) => (
                <div
                  key={step.num}
                  className="flex gap-6 py-8"
                  style={{
                    borderBottom:
                      i < FEATURES.length - 1 ? '1px solid rgba(200,146,42,0.12)' : 'none',
                  }}
                >
                  <span
                    className="text-4xl font-bold shrink-0 leading-none mt-1 text-amber-600/25"
                    style={{ fontFamily: FONTS.mono }}
                  >
                    {step.num}
                  </span>
                  <div>
                    <h3
                      className="text-lg font-bold mb-3 tracking-wide"
                      style={{ fontFamily: FONTS.serif }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed font-light" style={{ color: COLORS.textMuted }}>
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-28">
            <div className="relative">
              <div className="absolute -bottom-4 -right-4 left-8 top-8 border border-amber-600/20 rounded-sm pointer-events-none" />
              <img
                src={IMAGES.interior}
                alt="店内の様子"
                className="relative w-full aspect-[3/2] object-cover brightness-[0.75] sepia-[0.1] rounded-sm shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0C0906] to-transparent">
                <p
                  className="text-xs tracking-[0.35em] uppercase font-semibold"
                  style={{ fontFamily: FONTS.mono, color: COLORS.primary }}
                >
                  エキュートエディション御茶ノ水本店 / INTERIOR
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};