import { MenuItem, FeatureStep, BusinessHour } from '../types/ramen';
import heroImg from '../assets/ramentop.jpg';
import ramenImg from '../assets/ramen.jpg';
import chefImg from '../assets/shef.png';
import interiorImg from '../assets/interior.jpg';

export const IMAGES = {
  hero: heroImg,
  ramen: ramenImg,
  chef: chefImg,
  interior: interiorImg,
} as const;

export const NAV_ITEMS = [
  { label: 'こだわり', href: '#こだわり' },
  { label: 'メニュー', href: '#メニュー' },
  { label: '製品の特長', href: '#製品の特長' },
  { label: '店舗情報', href: '#店舗情報' },
] as const;

export const MENUS: MenuItem[] = [
  {
    id: '01',
    name: 'チャーシューつけめん',
    reading: 'CHASHU TSUKEMEN',
    desc: '肉の壁を突破して麺に辿り着く、御茶ノ水店の象徴。器を覆い尽くすチャーシューと重厚なつけスープの競演。',
    price: '¥1,300',
    tag: 'SIGNATURE',
    img: ramenImg,
  },
  {
    id: '02',
    name: 'チャーシューめん',
    reading: 'CHASHU MEN',
    desc: '肉の壁を突破して麺に辿り着く、御茶ノ水店の象徴。豪快なチャーシューと濃厚スープが一体となった一杯。',
    price: '¥1,300~',
    tag: 'SIGNATURE',
    img: ramenImg,
  },
  {
    id: '03',
    name: 'メンマつけめん',
    reading: 'MENMA TSUKEMEN',
    desc: '極太メンマが山を成す、新感覚のトッピング体験。コリコリとした食感と溢れる旨味が重厚なスープと調和する。',
    price: '¥1,200~',
    tag: 'POPULAR',
    img: ramenImg,
  },
  {
    id: '04',
    name: 'メンマらーめん',
    reading: 'MENMA RAMEN',
    desc: '極太メンマが山を成す、新感覚のトッピング体験。圧巻の見た目と食べ応えが、重厚なスープと絶妙に調和します。',
    price: '¥1,200~',
    tag: 'POPULAR',
    img: ramenImg,
  },
  {
    id: '05',
    name: 'つけめん',
    reading: 'TSUKEMEN',
    desc: '動物系を強化した重厚なスープと麺をシンプルに味わう。力強く濃厚でパンチのある味わいを純粋に堪能できる一杯。',
    price: '¥800~',
    tag: 'CLASSIC',
    img: ramenImg,
  },
  {
    id: '06',
    name: 'らーめん',
    reading: 'RAMEN',
    desc: '動物系を強化した重厚なスープと麺をシンプルに味わう。久臨の本質が詰まった、原点にして頂点の一杯。',
    price: '¥800~',
    tag: 'CLASSIC',
    img: ramenImg,
  },
];

export const FEATURES: FeatureStep[] = [
  {
    num: '01',
    title: '肉の衝撃。麺がスープにつからない「チャーシューの壁」',
    body: '器を覆い尽くすほど豪快に盛り付けたチャーシューは圧巻。肉を食べ進めて初めて麺とスープが現れる、三田ならではの新たな挑戦です。肉の旨味と濃厚スープが織りなす贅沢な一杯をお楽しみください。',
  },
  {
    num: '02',
    title: '圧巻の歯ごたえ。主役を奪う「極太メンマの山」',
    body: '器いっぱいに盛り付けた極太メンマは、見た目の迫力も食べ応えも抜群。コリコリとした食感と溢れる旨味が、重厚なスープと絶妙に調和します。',
  },
  {
    num: '03',
    title: '動物系食材をパワーアップさせたスープ',
    body: '従来の「久臨」をさらに進化させるため、スープを一から見直しました。動物系食材を贅沢に使用し、力強く濃厚でパンチのある味わいを実現しています。',
  },
];

export const BUSINESS_HOURS: BusinessHour[] = [
  { day: '平日', time: '7:00 – 22:00 (L.O. 21:30)' },
  { day: '土曜', time: '7:00 – 21:00 (L.O. 20:30)' },
  { day: '日・祝', time: '8:00 – 20:00 (L.O. 19:30)' },
];