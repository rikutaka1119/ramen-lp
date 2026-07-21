import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';
import { BUSINESS_HOURS } from '../data/ramenData';
import { COLORS, FONTS } from '../constants/theme';

export const AccessSection: React.FC = () => {
  return (
    <section
      id="店舗情報"
      className="py-32 lg:py-40"
      style={{ backgroundColor: COLORS.bgLight }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-4 mb-16">
          <span
            className="text-xs tracking-[0.4em] font-semibold"
            style={{ fontFamily: FONTS.mono, color: COLORS.primaryDark }}
          >
            04 / ACCESS
          </span>
          <div className="flex-1 h-px bg-amber-800/25" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2
              className="text-4xl lg:text-5xl font-bold mb-3 tracking-[0.08em]"
              style={{ fontFamily: FONTS.serif, color: COLORS.textDark }}
            >
              店舗情報
            </h2>
            <p className="text-sm mb-12 text-stone-600 font-medium">
              久臨 エキュートエディション御茶ノ水店
            </p>

            <div className="space-y-10">
              <div className="flex gap-5">
                <MapPin size={20} className="shrink-0 mt-0.5" style={{ color: COLORS.primaryDark }} />
                <div>
                  <p
                    className="text-xs tracking-widest mb-1 font-semibold"
                    style={{ fontFamily: FONTS.mono, color: COLORS.primaryDark }}
                  >
                    ADDRESS
                  </p>
                  <p className="font-medium" style={{ color: COLORS.textDark }}>東京都千代田区神田駿河台2丁目</p>
                  <p
                    className="text-xs mt-1 text-stone-600"
                    style={{ fontFamily: FONTS.mono }}
                  >
                    JR御茶ノ水駅改札内「エキュートエディション御茶ノ水」
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <Clock size={20} className="shrink-0 mt-0.5" style={{ color: COLORS.primaryDark }} />
                <div>
                  <p
                    className="text-xs tracking-widest mb-3 font-semibold"
                    style={{ fontFamily: FONTS.mono, color: COLORS.primaryDark }}
                  >
                    HOURS
                  </p>
                  <div className="space-y-2">
                    {BUSINESS_HOURS.map(({ day, time }) => (
                      <div key={day} className="flex gap-6">
                        <span className="text-sm w-16 shrink-0 text-stone-600 font-medium">{day}</span>
                        <span
                          className="text-sm font-semibold"
                          style={{ color: COLORS.textDark, fontFamily: FONTS.mono }}
                        >
                          {time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-5">
                <Phone size={20} className="shrink-0 mt-0.5" style={{ color: COLORS.primaryDark }} />
                <div>
                  <p
                    className="text-xs tracking-widest mb-1 font-semibold"
                    style={{ fontFamily: FONTS.mono, color: COLORS.primaryDark }}
                  >
                    PHONE
                  </p>
                  <a
                    href="tel:0000000000"
                    className="text-base font-bold transition-colors hover:text-amber-800"
                    style={{ color: COLORS.textDark, fontFamily: FONTS.mono }}
                  >
                    000-0000-0000
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-amber-800/25 rounded-sm overflow-hidden shadow-md">
            <iframe
              title="久臨 エキュートエディション御茶ノ水店"
              src="https://maps.google.com/maps?q=35.6996631,139.7648837&z=17&hl=ja&output=embed"
              width="100%"
              height="500"
              style={{ border: 0, display: 'block', filter: 'sepia(0.15) contrast(0.95)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};