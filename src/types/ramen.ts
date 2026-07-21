export interface MenuItem {
  id: string;
  name: string;
  reading: string;
  desc: string;
  price: string;
  tag: 'SIGNATURE' | 'POPULAR' | 'CLASSIC';
  img: string;
}

export interface FeatureStep {
  num: string;
  title: string;
  body: string;
}

export interface BusinessHour {
  day: string;
  time: string;
}