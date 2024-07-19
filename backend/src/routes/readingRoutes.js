const express = require('express');
const {
  getReadings,
  getReadingById,
  createReading,
  updateReading,
  deleteReading
} = require('../controllers/readingController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, getReadings);
router.get('/:id', authMiddleware, getReadingById);
router.post('/', authMiddleware, createReading);
router.patch('/:id', authMiddleware, updateReading);
router.delete('/:id', authMiddleware, deleteReading);

module.exports = router;