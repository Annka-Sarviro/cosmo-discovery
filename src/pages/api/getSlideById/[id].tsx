import type { NextApiRequest, NextApiResponse } from 'next';
import dataJson from '@/entities/ChooseRoutCard/api/sliders.json';

interface SliderItem {
  id: number;
  title: string;
  src: string;
  description: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<SliderItem>) {
  try {
    const id = req?.query?.id;

    if (id !== undefined) {
      const data = Object.values(dataJson)[(id as unknown as number) - 1];
      if (data) {
        if (req.method === 'GET') {
          res.status(200).json(data);
        }
      }
    }
  } catch {
    console.log('error');
  }
}
