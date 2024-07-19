const express = require('express');
const {
  getMeters,
  getMeterById,
  createMeter,
  updateMeter,
  deleteMeter
} = require('../controllers/meterController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, getMeters);
router.get('/:id', authMiddleware, getMeterById);
router.post('/', authMiddleware, createMeter);
router.patch('/:id', authMiddleware, updateMeter);
router.delete('/:id', authMiddleware, deleteMeter);

module.exports = router;