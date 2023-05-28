type Slide = {
  id: number;
  title: string;
  img: {
    url: string;
    alt: string;
    id: string;
    size: number;
  };
  description: string;
  alt: string;
};

export default Slide;
