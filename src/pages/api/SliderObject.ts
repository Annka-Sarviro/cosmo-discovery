interface ResponsiveImage {
  src: string;
  height: number;
  width: number;
  base64: string;
  alt: string;
  srcSet: string;
  sizes: string;
  webpSrcSet: string;
  title: string | null;
  bgColor: string;
  aspectRatio: number;
}

interface ImageData {
  id: string;
  url: string;
  responsiveImage: ResponsiveImage;
}

interface Route {
  id: string;
  title: string;
  _status: string;
  img: ImageData;
}

export interface SliderObject {
  allRouts: Route[]; 
}
