import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const reqConfig = {
        method: 'get',
        url: 'https://v2.jokeapi.dev/joke/Any',
    }

    const result = await axios(reqConfig);

    return res.status(200).json(result.data);
}