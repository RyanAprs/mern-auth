import express from 'express';
import { 
    deleteUser, 
    getAll, 
    getById, 
    updateUser
} from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/', getAll);
router.post('/update/:id', verifyToken, updateUser);
router.get('/:id', getById);
router.delete('/:id', deleteUser);

export default router;