const express = require('express');
const {
  getPayments,
  getPaymentById,
  createPayment,
  updatePayment,
  deletePayment
} = require('../controllers/paymentController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, getPayments);
router.get('/:id', authMiddleware, getPaymentById);
router.post('/', authMiddleware, createPayment);
router.patch('/:id', authMiddleware, updatePayment);
router.delete('/:id', authMiddleware, deletePayment);

module.exports = router;