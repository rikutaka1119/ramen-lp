import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  MapPin,
  Clock,
  Phone,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import logoImg from "../assets/google.png";
import hero from "../assets/ramentop.jpg";
import ramen from "../assets/ramen.jpg";
import shef from "../assets/shef.png";
import interior from "../assets/interior.jpg";


const RAMEN_HERO = hero;
const RAMEN_BOWL_1 = ramen;
const RAMEN_BOWL_2 = ramen;
const RAMEN_BOWL_3 = ramen;
const RAMEN_BOWL_4 = ramen;
const RAMEN_BOWL_5 = ramen;
const RAMEN_BOWL_6 = ramen;
const CHEF_IMG = shef;
const INTERIOR_IMG = interior;

const WOOD_BG: React.CSSProperties = {
  backgroundColor: "#3B2210",
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
    repeating-linear-gradient(
      91deg,
      transparent 0px,
      rgba(255,180,80,0.032) 3px,
      transparent 6px,
      transparent 40px,
      rgba(0,0,0,0.05) 41px,
      transparent 44px
    ),
    repeating-linear-gradient(
      89.5deg,
      transparent 0px,
      transparent 8px,
      rgba(180,110,40,0.055) 8px,
      rgba(180,110,40,0.055) 9px,
      transparent 9px
    ),
    linear-gradient(180deg, #3B2210 0%, #44280E 40%, #38200C 100%)
  `,
};

const menus = [
  {
    id: "01",
    name: "チャーシューつけめん",
    reading: "CHASHU TSUKEMEN",
    desc: "肉の壁を突破して麺に辿り着く、御茶ノ水店の象徴。器を覆い尽くすチャーシューと重厚なつけスープの競演。",
    price: "¥1,000",
    tag: "SIGNATURE",
    img: RAMEN_BOWL_1,
  },
  {
    id: "02",
    name: "チャーシューめん",
    reading: "CHASHU MEN",
    desc: "肉の壁を突破して麺に辿り着く、御茶ノ水店の象徴。豪快なチャーシューと濃厚スープが一体となった一杯。",
    price: "¥1,000",
    tag: "SIGNATURE",
    img: RAMEN_BOWL_4,
  },
  {
    id: "03",
    name: "メンマつけめん",
    reading: "MENMA TSUKEMEN",
    desc: "極太メンマが山を成す、新感覚のトッピング体験。コリコリとした食感と溢れる旨味が重厚なスープと調和する。",
    price: "¥1,000",
    tag: "POPULAR",
    img: RAMEN_BOWL_2,
  },
  {
    id: "04",
    name: "メンマらーめん",
    reading: "MENMA RAMEN",
    desc: "極太メンマが山を成す、新感覚のトッピング体験。圧巻の見た目と食べ応えが、重厚なスープと絶妙に調和します。",
    price: "¥1,000",
    tag: "POPULAR",
    img: RAMEN_BOWL_5,
  },
  {
    id: "05",
    name: "つけめん",
    reading: "TSUKEMEN",
    desc: "動物系を強化した重厚なスープと麺をシンプルに味わう。力強く濃厚でパンチのある味わいを純粋に堪能できる一杯。",
    price: "¥1,000",
    tag: "CLASSIC",
    img: RAMEN_BOWL_3,
  },
  {
    id: "06",
    name: "らーめん",
    reading: "RAMEN",
    desc: "動物系を強化した重厚なスープと麺をシンプルに味わう。久臨の本質が詰まった、原点にして頂点の一杯。",
    price: "¥1,000",
    tag: "CLASSIC",
    img: RAMEN_BOWL_6,
  },
];

const steps = [
  {
    num: "01",
    title:
      "肉の衝撃。麺がスープにつからない「チャーシューの壁」",
    body: "器を覆い尽くすほど豪快に盛り付けたチャーシューは圧巻。肉を食べ進めて初めて麺とスープが現れる、三田ならではの新たな挑戦です。肉の旨味と濃厚スープが織りなす贅沢な一杯をお楽しみください。",
  },
  {
    num: "02",
    title: "圧巻の歯ごたえ。主役を奪う「極太メンマの山」",
    body: "器いっぱいに盛り付けた極太メンマは、見た目の迫力も食べ応えも抜群。コリコリとした食感と溢れる旨味が、重厚なスープと絶妙に調和します。",
  },
  {
    num: "03",
    title: "動物系食材をパワーアップさせたスープ",
    body: "従来の「久臨」をさらに進化させるため、スープを一から見直しました。動物系食材を贅沢に使用し、力強く濃厚でパンチのある味わいを実現しています。",
  },
];

const VISIBLE = 3; // cards visible at once on desktop

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(VISIBLE);
  const trackRef = useRef<HTMLDivElement>(null);

  const maxIndex = menus.length - visibleCount;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const mq1 = window.matchMedia("(min-width: 1024px)");
    const mq2 = window.matchMedia("(min-width: 640px)");
    const update = () => {
      if (mq1.matches) setVisibleCount(3);
      else if (mq2.matches) setVisibleCount(2);
      else setVisibleCount(1);
    };
    update();
    mq1.addEventListener("change", update);
    mq2.addEventListener("change", update);
    return () => {
      mq1.removeEventListener("change", update);
      mq2.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    setSlideIndex((i) =>
      Math.min(i, Math.max(0, menus.length - visibleCount)),
    );
  }, [visibleCount]);

  const prev = () => setSlideIndex((i) => Math.max(0, i - 1));
  const next = () =>
    setSlideIndex((i) =>
      Math.min(menus.length - visibleCount, i + 1),
    );

  return (
    <div
      className="min-h-screen bg-background text-foreground overflow-x-hidden"
      style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
    >
      {/* ── NAV ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled
            ? "rgba(12,9,6,0.96)"
            : "transparent",
          borderBottom: scrolled
            ? "1px solid rgba(200,146,42,0.18)"
            : "none",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={logoImg}
              alt="久臨 ロゴ"
              className="h-10 w-auto object-contain"
            />
          </div>

          <nav className="hidden md:flex items-center gap-10">
            {[ls
            
              "こだわり",
              "メニュー",
              "製品の特長",
              "店舗情報",
            ].map((label) => (
              <a
                key={label}
                href={`#${label}`}
                className="text-sm tracking-widest transition-colors duration-200 hover:text-primary"
                style={{
                  fontFamily: "'Noto Sans JP', sans-serif",
                  color: "#8A7B68",
                  fontSize: "13px",
                }}
              >
                {label}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden text-foreground"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="メニュー"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className="md:hidden transition-all duration-300 overflow-hidden"
          style={{
            maxHeight: menuOpen ? "320px" : "0",
            backgroundColor: "rgba(12,9,6,0.98)",
          }}
        >
          <div className="px-6 py-6 flex flex-col gap-6 border-t border-border">
            {[
              "こだわり",
              "メニュー",
              "製品の特長",
              "店舗情報",
            ].map((label) => (
              <a
                key={label}
                href={`#${label}`}
                className="text-sm tracking-widest"
                style={{ color: "#8A7B68" }}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative h-screen flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 bg-card">
          <img
            src={RAMEN_HERO}
            alt="麺屋輝の看板ラーメン"
            className="w-full h-full object-cover opacity-40"
            style={{ objectPosition: "center 40%" }}
          />
        </div>
        {/* gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, #0C0906 30%, rgba(12,9,6,0.3) 100%)",
          }}
        />

        {/* Side label */}
        <div
          className="absolute top-1/2 right-8 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3"
          style={{ writingMode: "vertical-rl" }}
        >
          <span
            className="text-xs tracking-[0.4em] uppercase"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "#C8922A",
              opacity: 0.7,
            }}
          >
            御茶ノ水 / TOKYO
          </span>
          <div
            className="w-px h-24"
            style={{ backgroundColor: "rgba(200,146,42,0.3)" }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-24 lg:pb-32">
          {/* Label */}
          <div className="flex items-center gap-4 mb-6">
            <div
              className="w-8 h-px"
              style={{ backgroundColor: "#C8922A" }}
            />
            <span
              className="text-xs tracking-[0.4em] uppercase"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "#C8922A",
              }}
            >
              AUTHENTIC JAPANESE RAMEN
            </span>
          </div>

          <h1
            className="text-6xl sm:text-7xl lg:text-9xl font-bold leading-none mb-4 text-foreground"
            style={{
              fontFamily: "'Shippori Mincho B1', serif",
              letterSpacing: "0.05em",
            }}
          >
            一杯入魂
          </h1>
          <p
            className="text-base lg:text-lg mb-10 max-w-md leading-relaxed"
            style={{ color: "#8A7B68" }}
          >
            つけめんの新境地。動物系を極限まで強化したスープと、
            <br />
            器から溢れる圧倒的なボリュームで、
            <br />
            つけめんの常識を塗り替える。
          </p>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span
            className="text-[10px] tracking-[0.3em]"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "#8A7B68",
            }}
          >
            SCROLL
          </span>
          <ChevronDown
            size={14}
            style={{ color: "#8A7B68" }}
            className="animate-bounce"
          />
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section id="こだわり" className="py-28 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span
                  className="text-xs tracking-[0.4em]"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "#C8922A",
                  }}
                >
                  01 / PHILOSOPHY
                </span>
                <div
                  className="flex-1 h-px"
                  style={{
                    backgroundColor: "rgba(200,146,42,0.2)",
                  }}
                />
              </div>
              <h2
                className="text-4xl lg:text-5xl font-bold mb-6 leading-tight"
                style={{
                  fontFamily: "'Shippori Mincho B1', serif",
                  letterSpacing: "0.08em",
                }}
              >
                新たな挑戦が
                <br />
                <span style={{ color: "#C8922A" }}>
                  ここにある
                </span>
              </h2>
              <div
                className="space-y-5"
                style={{ color: "#8A7B68", lineHeight: "2" }}
              >
                <p>
                  本店舗は、つけめん界を牽引し続ける六厘舎創業者・三田遼斉が、さらなる旨さの高みを目指して取り組んだ「新たな挑戦」の結晶です。
                </p>
                <p>
                  既存の枠組みに捉われず、動物系食材の厚みを限界まで引き出した重厚なスープを開発。御茶ノ水店限定の、器を覆い尽くすチャーシューや極太メンマとともに、本能を揺さぶる一杯をお届けします。
                </p>
              </div>

              <div
                className="mt-10 pl-6 py-4"
                style={{ borderLeft: "2px solid #C8922A" }}
              >
                <p
                  className="text-lg italic"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#F0E8D8",
                  }}
                >
                  "既存の枠組みに捉われず、
                  <br />
                  本能を揺さぶる一杯を。"
                </p>
                <p
                  className="mt-3 text-xs tracking-widest"
                  style={{
                    color: "#C8922A",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  — 六厘舎創業者・三田 遼斉
                </p>
              </div>
            </div>

            <div className="relative">
              <div
                className="absolute -top-4 -left-4 right-8 bottom-8"
                style={{
                  border: "1px solid rgba(200,146,42,0.2)",
                }}
              />
              <img
                src={CHEF_IMG}
                alt="厨房で働く職人"
                className="relative w-full aspect-[4/3] object-cover"
                style={{
                  filter: "brightness(0.85) contrast(1.05)",
                }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-1/3"
                style={{
                  background:
                    "linear-gradient(to top, #0C0906, transparent)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── MENU ── */}
      <section
        id="メニュー"
        className="py-28 lg:py-40 relative overflow-hidden"
        style={WOOD_BG}
      >
        {/* Wood grain overlay for depth */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 50% 0%, rgba(200,146,42,0.07) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header row */}
          <div className="flex items-end justify-between mb-14 gap-6 flex-wrap">
            <div>
              <div className="flex items-center gap-4 mb-5">
                <span
                  className="text-xs tracking-[0.4em]"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "#C8922A",
                  }}
                >
                  02 / MENU
                </span>
                <div
                  className="w-16 h-px"
                  style={{
                    backgroundColor: "rgba(200,146,42,0.3)",
                  }}
                />
              </div>
              <h2
                className="text-4xl lg:text-5xl font-bold"
                style={{
                  fontFamily: "'Shippori Mincho B1', serif",
                  letterSpacing: "0.08em",
                  color: "#F0E8D8",
                }}
              >
                看板の一杯
              </h2>
            </div>

            {/* Arrow controls */}
            <div className="flex items-center gap-3">
              <span
                className="text-xs tracking-[0.3em] mr-3 hidden sm:block"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "rgba(200,146,42,0.5)",
                }}
              >
                {slideIndex + 1} —{" "}
                {Math.min(
                  slideIndex + visibleCount,
                  menus.length,
                )}{" "}
                / {menus.length}
              </span>
              <button
                onClick={prev}
                disabled={slideIndex === 0}
                className="w-11 h-11 flex items-center justify-center border transition-all duration-200 disabled:opacity-25 hover:bg-primary hover:border-primary hover:text-background"
                style={{
                  borderColor: "rgba(200,146,42,0.4)",
                  color: "#C8922A",
                }}
                aria-label="前へ"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                disabled={slideIndex >= maxIndex}
                className="w-11 h-11 flex items-center justify-center border transition-all duration-200 disabled:opacity-25 hover:bg-primary hover:border-primary hover:text-background"
                style={{
                  borderColor: "rgba(200,146,42,0.4)",
                  color: "#C8922A",
                }}
                aria-label="次へ"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Slider viewport */}
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(calc(-${slideIndex} * (100% / ${visibleCount})))`,
                gap: "1px",
              }}
            >
              {menus.map((item) => (
                <div
                  key={item.id}
                  className="group flex-shrink-0 cursor-pointer"
                  style={{
                    width: `calc(100% / ${visibleCount})`,
                    backgroundColor: "rgba(30,15,5,0.45)",
                    border: "1px solid rgba(200,146,42,0.18)",
                  }}
                >
                  {/* Image */}
                  <div
                    className="relative overflow-hidden"
                    style={{
                      height: "280px",
                      backgroundColor: "#140D06",
                    }}
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{
                        filter:
                          "brightness(0.72) saturate(0.85)",
                      }}
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(20,13,6,0.9) 0%, rgba(20,13,6,0.2) 55%, transparent 100%)",
                      }}
                    />
                    <span
                      className="absolute top-4 left-4 px-2 py-1 text-[9px] tracking-[0.25em]"
                      style={{
                        fontFamily:
                          "'JetBrains Mono', monospace",
                        backgroundColor: "#C8922A",
                        color: "#0C0906",
                      }}
                    >
                      {item.tag}
                    </span>
                    <span
                      className="absolute bottom-4 right-4 text-4xl font-bold leading-none"
                      style={{
                        fontFamily:
                          "'JetBrains Mono', monospace",
                        color: "rgba(200,146,42,0.12)",
                      }}
                    >
                      {item.id}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="p-6 lg:p-7">
                    <div className="flex items-center justify-between mb-3">
                      <p
                        className="text-[9px] tracking-[0.3em]"
                        style={{
                          fontFamily:
                            "'JetBrains Mono', monospace",
                          color: "rgba(200,146,42,0.5)",
                        }}
                      >
                        {item.reading}
                      </p>
                      <span
                        className="text-base font-medium"
                        style={{
                          fontFamily:
                            "'JetBrains Mono', monospace",
                          color: "#C8922A",
                        }}
                      >
                        {item.price}
                      </span>
                    </div>
                    <h3
                      className="text-xl lg:text-2xl font-bold mb-3"
                      style={{
                        fontFamily:
                          "'Shippori Mincho B1', serif",
                        letterSpacing: "0.1em",
                        color: "#F0E8D8",
                      }}
                    >
                      {item.name}
                    </h3>
                    <p
                      className="text-xs leading-loose"
                      style={{ color: "#8A7B68" }}
                    >
                      {item.desc}
                    </p>
                  </div>

                  {/* Hover bottom line */}
                  <div
                    className="h-[2px] transition-all duration-300 group-hover:opacity-100 opacity-0"
                    style={{ backgroundColor: "#C8922A" }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map(
              (_, i) => (
                <button
                  key={i}
                  onClick={() => setSlideIndex(i)}
                  className="transition-all duration-300"
                  style={{
                    width: slideIndex === i ? "28px" : "8px",
                    height: "2px",
                    backgroundColor:
                      slideIndex === i
                        ? "#C8922A"
                        : "rgba(200,146,42,0.3)",
                  }}
                  aria-label={`スライド ${i + 1}`}
                />
              ),
            )}
          </div>

          <div className="mt-8 text-center">
            <p
              className="text-xs tracking-widest"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "rgba(138,123,104,0.5)",
              }}
            >
              ＊
              全メニューにライス・漬物付き｜アレルギー対応はお気軽にご相談を
            </p>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="製品の特長" className="py-28 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-16">
            <span
              className="text-xs tracking-[0.4em]"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "#C8922A",
              }}
            >
              03 / FEATURES
            </span>
            <div
              className="flex-1 h-px"
              style={{
                backgroundColor: "rgba(200,146,42,0.2)",
              }}
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <h2
                className="text-4xl lg:text-5xl font-bold mb-4"
                style={{
                  fontFamily: "'Shippori Mincho B1', serif",
                  letterSpacing: "0.08em",
                }}
              >
                製品の
                <br />
                <span style={{ color: "#C8922A" }}>特長</span>
              </h2>
              <p
                className="text-sm leading-loose mb-12"
                style={{ color: "#8A7B68" }}
              >
                久臨 御茶ノ水店だけの、三つの挑戦。
              </p>

              <div className="space-y-0">
                {steps.map((step, i) => (
                  <div
                    key={step.num}
                    className="flex gap-6 py-8"
                    style={{
                      borderBottom:
                        i < steps.length - 1
                          ? "1px solid rgba(200,146,42,0.1)"
                          : "none",
                    }}
                  >
                    <span
                      className="text-4xl font-bold shrink-0 leading-none mt-1"
                      style={{
                        fontFamily:
                          "'JetBrains Mono', monospace",
                        color: "rgba(200,146,42,0.18)",
                      }}
                    >
                      {step.num}
                    </span>
                    <div>
                      <h4
                        className="text-lg font-bold mb-2"
                        style={{
                          fontFamily:
                            "'Shippori Mincho B1', serif",
                        }}
                      >
                        {step.title}
                      </h4>
                      <p
                        className="text-sm leading-loose"
                        style={{ color: "#8A7B68" }}
                      >
                        {step.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:sticky lg:top-24">
              <div className="relative">
                <div
                  className="absolute -bottom-4 -right-4 left-8 top-8"
                  style={{
                    border: "1px solid rgba(200,146,42,0.15)",
                  }}
                />
                <img
                  src={INTERIOR_IMG}
                  alt="店内の様子"
                  className="relative w-full aspect-[3/2] object-cover"
                  style={{
                    filter: "brightness(0.7) sepia(0.15)",
                  }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 p-6"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(12,9,6,0.95), transparent)",
                  }}
                >
                  <p
                    className="text-xs tracking-[0.35em] uppercase"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      color: "#C8922A",
                    }}
                  >
                    エキュートエディション御茶ノ水本店 /
                    INTERIOR
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ACCESS ── */}
      <section
        id="店舗情報"
        className="py-28 lg:py-40"
        style={{ backgroundColor: "#E8E0D0" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-16">
            <span
              className="text-xs tracking-[0.4em]"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "#A07020",
              }}
            >
              04 / ACCESS
            </span>
            <div
              className="flex-1 h-px"
              style={{
                backgroundColor: "rgba(160,112,32,0.25)",
              }}
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2
                className="text-4xl lg:text-5xl font-bold mb-2"
                style={{
                  fontFamily: "'Shippori Mincho B1', serif",
                  letterSpacing: "0.08em",
                  color: "#1A1208",
                }}
              >
                店舗情報
              </h2>
              <p
                className="text-sm mb-10"
                style={{ color: "#7A6A50" }}
              >
                久臨 エキュートエディション御茶ノ水店
              </p>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex gap-5">
                  <MapPin
                    size={18}
                    style={{
                      color: "#A07020",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  />
                  <div>
                    <p
                      className="text-xs tracking-widest mb-1"
                      style={{
                        fontFamily:
                          "'JetBrains Mono', monospace",
                        color: "#A07020",
                      }}
                    >
                      ADDRESS
                    </p>
                    <p style={{ color: "#1A1208" }}>
                      東京都千代田区神田駿河台2丁目
                    </p>
                    <p
                      className="text-xs mt-1"
                      style={{
                        color: "#7A6A50",
                        fontFamily:
                          "'JetBrains Mono', monospace",
                      }}
                    >
                      JR御茶ノ水駅改札内「エキュートエディション御茶ノ水」
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-5">
                  <Clock
                    size={18}
                    style={{
                      color: "#A07020",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  />
                  <div>
                    <p
                      className="text-xs tracking-widest mb-2"
                      style={{
                        fontFamily:
                          "'JetBrains Mono', monospace",
                        color: "#A07020",
                      }}
                    >
                      HOURS
                    </p>
                    <div className="space-y-1">
                      {[
                        {
                          day: "平日",
                          time: "7:00 – 22:00 (L.O. 21:30)",
                        },
                        {
                          day: "土曜",
                          time: "7:00 – 21:00 (L.O. 20:30)",
                        },
                        {
                          day: "日・祝",
                          time: "8:00 – 20:00 (L.O. 19:30)",
                        },
                      ].map(({ day, time }) => (
                        <div key={day} className="flex gap-6">
                          <span
                            className="text-sm w-14 shrink-0"
                            style={{ color: "#7A6A50" }}
                          >
                            {day}
                          </span>
                          <span
                            className="text-sm"
                            style={{
                              color: "#1A1208",
                              fontFamily:
                                "'JetBrains Mono', monospace",
                            }}
                          >
                            {time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-5">
                  <Phone
                    size={18}
                    style={{
                      color: "#A07020",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  />
                  <div>
                    <p
                      className="text-xs tracking-widest mb-1"
                      style={{
                        fontFamily:
                          "'JetBrains Mono', monospace",
                        color: "#A07020",
                      }}
                    >
                      PHONE
                    </p>
                    <a
                      href="tel:0000000000"
                      className="transition-colors hover:text-amber-700"
                      style={{
                        color: "#1A1208",
                        fontFamily:
                          "'JetBrains Mono', monospace",
                      }}
                    >
                      000-0000-0000
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex gap-5">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#A07020"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ flexShrink: 0, marginTop: "2px" }}
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    />
                    <circle cx="12" cy="12" r="4" />
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="1"
                      fill="#A07020"
                      stroke="none"
                    />
                  </svg>
                  <div>
                    <p
                      className="text-xs tracking-widest mb-1"
                      style={{
                        fontFamily:
                          "'JetBrains Mono', monospace",
                        color: "#A07020",
                      }}
                    >
                      INSTAGRAM
                    </p>
                    <a
                      href="https://instagram.com/kyurin"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-amber-700"
                      style={{
                        color: "#1A1208",
                        fontFamily:
                          "'JetBrains Mono', monospace",
                      }}
                    >
                      @kyurin
                    </a>
                  </div>
                </div>

                {/* X / Twitter */}
                <div className="flex gap-5">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="#A07020"
                    style={{ flexShrink: 0, marginTop: "2px" }}
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L2.25 2.25H8.08l4.261 5.632 5.903-5.632Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <div>
                    <p
                      className="text-xs tracking-widest mb-1"
                      style={{
                        fontFamily:
                          "'JetBrains Mono', monospace",
                        color: "#A07020",
                      }}
                    >
                      X (TWITTER)
                    </p>
                    <a
                      href="https://x.com/kyurin"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-amber-700"
                      style={{
                        color: "#1A1208",
                        fontFamily:
                          "'JetBrains Mono', monospace",
                      }}
                    >
                      @kyurin
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div style={{ border: "1px solid rgba(160,112,32,0.25)", lineHeight: 0 }}>
              <iframe
                title="久臨 エキュートエディション御茶ノ水店"
                src="https://maps.google.com/maps?q=35.6996631,139.7648837&z=17&hl=ja&output=embed"
                width="100%"
                height="550"
                style={{ border: 0, display: "block", filter: "sepia(0.2) contrast(0.95)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        className="py-12 border-t"
        style={{ borderColor: "rgba(200,146,42,0.15)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p
              className="text-lg font-bold tracking-widest"
              style={{
                fontFamily: "'Shippori Mincho B1', serif",
                letterSpacing: "0.2em",
              }}
            >
              久臨
            </p>
            <p
              className="text-[10px] tracking-[0.3em] mt-1"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "#C8922A",
                opacity: 0.6,
              }}
            >
              KYURIN — OCHANOMIZU
            </p>
          </div>
          <p
            className="text-xs"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "rgba(138,123,104,0.5)",
            }}
          >
            © 2026 KYURIN. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}