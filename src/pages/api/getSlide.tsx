import dataJson from '../../entities/ChooseRoutCard/api/sliders.json';
import type { NextApiRequest, NextApiResponse } from 'next';

interface SliderItem {
  id: number;
  title: string;
  src: string;
  description: string;
}

interface Data {
  [key: string]: SliderItem;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'GET') {
    res.status(200).json(dataJson);
  }
}
