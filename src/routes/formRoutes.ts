import express from 'express';
import { createUser } from '../controllers/formController';

const router = express.Router();

router.post('', createUser);


export default router;
