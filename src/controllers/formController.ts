import { Request, Response } from 'express';
import payload from 'payload';
import { type ICreateUser, type ICustomError, type ICustomResponse } from '@/models';

export const createUser = async (req: Request, res: Response): Promise<void> => {
    const { namaLengkap, asal, asalInstansi, noWa, longText, linkDrive  }: ICreateUser = req.body as ICreateUser;

    try {
        const user = await payload.create({
            collection: 'form',
            data: {
                    namaLengkap,
                    asal,
                    asalInstansi,
                    noWa,  
                    longText,
                    linkDrive
            },
        });

        const response: ICustomResponse = {
            message: 'create user success',
            data: user
        }

        res.status(201).json(response);
    }catch(error) {
        const response: ICustomError = {
            message: error.message as string,
            data: {
                message: error.message as string
            }
        } 

        res.status(500).json(response);
    }
};