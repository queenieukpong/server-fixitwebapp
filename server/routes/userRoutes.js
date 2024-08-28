// routes/userRoutes.js

import express from 'express';
import { getUserProfile } from '../controllers/userController.js';
import authenticateToken from '../middleware/authMiddleware.js'; // Middleware to verify JWT

const router = express.Router();

// Profile route
router.get('/profile', authenticateToken, getUserProfile);

export default router;
