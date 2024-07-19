import { Router } from 'express';
import {
  getReadings,
  getReadingById,
  createReading,
  updateReading,
  deleteReading
} from '../controllers/readingController';
import authMiddleware from '../middlewares/authMiddleware';

const router = Router();

router.get('/', authMiddleware, getReadings);
router.get('/:id', authMiddleware, getReadingById);
router.post('/', authMiddleware, createReading);
router.patch('/:id', authMiddleware, updateReading);
router.delete('/:id', authMiddleware, deleteReading);

export default router;
