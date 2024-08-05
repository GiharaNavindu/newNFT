// const Order = require('../models/orderModel.js');
// const mongoose  = require('mongoose')




// // Get all orders
// const getOrders = async (req, res) => {
//   try {
//     const orders = await Order.find({}).sort({ createdAt: -1 });
//     res.status(200).json(orders);  
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };






// // Get a single order
// const getOrder = async (req, res) => {
//   const { id } = req.params;
  
//   if(!mongoose.Types.ObjectId.isValid(id)){
//     return res.status(404).json({error:'No such order'})
//   }
//   try {
//     const order = await Order.findById(id);
//     if (!order) {
//       return res.status(404).json({ error: 'No order found with this ID' });
//     }
//     res.status(200).json(order);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };




// // Create a new order
// const createOrder = async (req, res) => {
//   const { FullName, Email, Bid } = req.body;

//   try {
//     const order = await Order.create({ FullName, Email, Bid });
//     res.status(200).json(order);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };




// // Delete an order
// const deleteOrder = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const order = await Order.findByIdAndDelete(id);
//     if (!order) {
//       return res.status(404).json({ error: 'No order found with this ID' });
//     }
//     res.status(200).json({ message: 'Order deleted successfully' });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };


// const Order = require('../models/orderModel.js');

// const createOrder = async (req, res) => {
//     const { FullName, Email, Bid } = req.body;

//     try {
//         const order = await Order.create({ FullName, Email, Bid });
//         res.status(201).json(order);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// };

// const getOrders = async (req, res) => {
//     try {
//         const orders = await Order.find({});
//         res.status(200).json(orders);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// };

// const getOrder = async (req, res) => {
//     const { id } = req.params;

//     try {
//         const order = await Order.findById(id);
//         if (!order) {
//             return res.status(404).json({ error: 'Order not found' });
//         }
//         res.status(200).json(order);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// };

// module.exports = {
//     createOrder,
//     getOrders,
//     getOrder
// };



//  _-------------------_______-----------------------------
// const getOrders = async (req, res) => {
//     const username = req.user.username;
//     if (req.user.hasOwnProperty('username')) {
//     console.log('Username property is present:', req.user.username);
// } else {
//     console.log('Username property is not present in req.user object');
// }




const Order = require('../models/orderModel.js');
const mongoose = require('mongoose');

// Get all orders
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({}).sort({ createdAt: -1 });
    res.status(200).json(orders);  
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a single order
const getOrder = async (req, res) => {
  const { id } = req.params;
  
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such order' });
  }

  try {
    const order = await Order.findById(id);
    if (!order) {
      return res.status(404).json({ error: 'No order found with this ID' });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Create a new order
const createOrder = async (req, res) => {
  const { Username, Email, Bid, NFTTitle } = req.body;

  console.log('Request received to create an order:', req.body);

  // Validate request body
  if (!Username || !Email || !Bid || !NFTTitle) {
    console.log('Missing required fields:', { Username, Email, Bid, NFTTitle });
    return res.status(400).json({ error: 'Please provide Username, Email, Bid, and NFTTitle' });
  }

  try {
    const order = await Order.create({ Username, Email, Bid, NFTTitle });
    console.log('Order created successfully:', order);
    res.status(201).json(order);
  } catch (error) {
    console.error('Error creating order:', error.message);
    res.status(400).json({ error: error.message });
  }
};



// Edit an order
const editOrder = async (req, res) => {
    const { id } = req.params;
    const { Username, Email, Bid,NFTTitle} = req.body;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: 'No such order' });
    }
  
    try {
      const order = await Order.findByIdAndUpdate(id, { Username, Email, Bid,NFTTitle }, { new: true, runValidators: true });
      if (!order) {
        return res.status(404).json({ error: 'No order found with this ID' });
      }
      res.status(200).json(order);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
// Delete an order
const deleteOrder = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such order' });
  }

  try {
    const order = await Order.findByIdAndDelete(id);
    if (!order) {
      return res.status(404).json({ error: 'No order found with this ID' });
    }
    res.status(200).json({ message: 'Order deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//get a order by username
const getOrdersByUsername = async (req, res) => {
  const { username } = req.params;

  try {
      const orders = await Order.find({ Username: username }).sort({ createdAt: -1 });
      res.status(200).json(orders);
      console.log(username)
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
};


module.exports = {
  createOrder,
  getOrders,
  getOrder,
  editOrder,
  deleteOrder,
  getOrdersByUsername
};

