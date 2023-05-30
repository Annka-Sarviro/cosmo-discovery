import { ResponsiveImageType } from 'react-datocms';

type Slide = {
  id: string;
  alt: string;
  description: string;
  title: string;
  img: {
    alt: string;
    responsiveImage: ResponsiveImageType;
  };
};

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

export default Slide;
