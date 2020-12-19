import express from 'express';
import { addOrderItems, getOrderById, updateOrderToPaid, getMyOrder, getOrders, updateOrderToDelivered } from '../controllers/orderController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders);
router.route('/myorders').get(protect, getMyOrder);
router.route('/:id').get(protect, getOrderById);
router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered);
router.route('/:id/pay').put(protect, updateOrderToPaid);

export default router