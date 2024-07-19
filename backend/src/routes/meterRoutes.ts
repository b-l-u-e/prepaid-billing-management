import { Router } from 'express';
import {
  getMeters,
  getMeterById,
  createMeter,
  updateMeter,
  deleteMeter
} from '../controllers/meterController';
import authMiddleware from '../middlewares/authMiddleware';

const router = Router();

router.get('/', authMiddleware, getMeters);
router.get('/:id', authMiddleware, getMeterById);
router.post('/', authMiddleware, createMeter);
router.patch('/:id', authMiddleware, updateMeter);
router.delete('/:id', authMiddleware, deleteMeter);

export default router;
