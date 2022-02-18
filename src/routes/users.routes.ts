import express from 'express'
import getAllUsers from '../controllers/users.controller';

const router = express.Router();

router.get('/:id', getAllUsers)

export default router