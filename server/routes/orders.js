// const express = require('express');
//  // Corrected import path
// const{createOrder,
//     getOrders,
//     getOrder}= require('../controllers/orderControllers.js')
// const router = express.Router();

// // GET all orders
// router.get('/',getOrders );

// // GET a specific order by ID
// router.get('/:id', getOrder);

// // POST a new order
// router.post('/',createOrder);

// // DELETE an order by ID
// router.delete('/:id', (req, res) => {
//   res.json({ msg: 'DELETE an order' });
// });

// // PATCH (update) an order by ID
// router.patch('/:id', (req, res) => {
//   res.json({ msg: 'UPDATE an order' });
// });

// module.exports = router;


// const express = require('express');
// const { createOrder, getOrders, getOrder } = require('../controllers/orderControllers');
// const router = express.Router();

// // GET all orders
// router.get('/', getOrders);

// // GET a specific order by ID
// router.get('/:id', getOrder);

// // POST a new order
// router.post('/', createOrder);

// module.exports = router;



const express = require('express');
const { createOrder, getOrders, getOrder, deleteOrder, editOrder,getOrdersByUsername } = require('../controllers/orderControllers.js'); // Make sure all functions are imported
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware.js');

// GET all orders for the logged-in user
router.get('/', authMiddleware, getOrders);

// GET a specific order by ID
router.get('/:id', authMiddleware, getOrder);

router.get('', authMiddleware, getOrder);

// POST a new order
router.post('/', authMiddleware, createOrder);

// DELETE an order
router.delete('/:id', authMiddleware, deleteOrder); // Add the missing deleteOrder route

// EDIT an order
router.put('/:id', authMiddleware, editOrder); // Changed to PUT to match the controller

router.get('/username/:username', getOrdersByUsername);

module.exports = router;
