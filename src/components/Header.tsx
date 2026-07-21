import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import logoImg from '../assets/google.png';
import { NAV_ITEMS } from '../data/ramenData';
import { COLORS, FONTS } from '../constants/theme';

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? 'rgba(12,9,6,0.96)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(200,146,42,0.2)' : 'none',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img src={logoImg} alt="久臨 ロゴ" className="h-10 w-auto object-contain" />
        </a>

        <div className="hidden md:flex items-center gap-10">
          <nav className="flex items-center gap-8">
            {NAV_ITEMS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-base tracking-[0.15em] transition-colors duration-200 hover:text-amber-500"
                style={{ fontFamily: FONTS.sans, color: COLORS.textMuted }}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="メニュー開閉"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* モバイルメニュー */}
      <div
        className="md:hidden transition-all duration-300 overflow-hidden"
        style={{
          maxHeight: menuOpen ? '360px' : '0',
          backgroundColor: 'rgba(12,9,6,0.98)',
        }}
      >
        <div className="px-6 py-6 flex flex-col gap-6 border-t border-amber-900/30">
          {NAV_ITEMS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm tracking-widest"
              style={{ color: COLORS.textMuted }}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};