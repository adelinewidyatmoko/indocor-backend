import { Request, Response } from 'express';
import payload from 'payload';

export const createUser = async (req: Request, res: Response): Promise<void> => {
    const { namaLengkap,asal, asalInstansi,noWa, longText, linkDrive  } = req.body;

    try {
        const user = await payload.create({
            collection: 'part',
            data: {
                    namaLengkap,
                    asal,
                     asalInstansi,
                     noWa,  
                    longText,
                    linkDrive
            },
        });
        res.status(201).json(user);
    }catch(error) {
        res.status(500).json({message: error.message});
    }
};