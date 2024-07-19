import { Router } from 'express';
import {
  getPayments,
  getPaymentById,
  createPayment,
  updatePayment,
  deletePayment
} from '../controllers/paymentController';
import authMiddleware from '../middlewares/authMiddleware';

const router = Router();

router.get('/', authMiddleware, getPayments);
router.get('/:id', authMiddleware, getPaymentById);
router.post('/', authMiddleware, createPayment);
router.patch('/:id', authMiddleware, updatePayment);
router.delete('/:id', authMiddleware, deletePayment);

export default router;
