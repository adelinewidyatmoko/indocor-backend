import express from 'express';
import { createUser } from '../controllers/formController';

const router = express.Router();

router.post('/create-form', createUser);


export default router;
