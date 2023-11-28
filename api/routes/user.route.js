import express from 'express';
import { 
    deleteUser, 
    getAll, 
    getById 
} from '../controllers/user.controller.js';

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getById);
router.delete('/:id', deleteUser);

export default router;