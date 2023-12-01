import express from 'express';
import { 
    getAll, 
    getById, 
    updateUser,
    deleteUser, 
} from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/', getAll);
router.post('/update/:id', verifyToken, updateUser);
router.delete('/delete/:id', verifyToken, deleteUser);
router.get('/:id', getById);

export default router;