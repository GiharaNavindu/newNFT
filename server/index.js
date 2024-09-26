


const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const orderRoutes = require('./routes/orders');
const authRoutes = require('./routes/auth');
const nftRoutes = require('./routes/nftRoutes');

dotenv.config();

const app = express();

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174','https://new-nft-front.vercel.app'],
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use('/api/orders', orderRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/nfts', nftRoutes);

mongoose.connect('mongodb+srv://user1:Steve_21@cluster0.9v4nncq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    app.listen(process.env.PORT || 4000, () => {
      console.log('connected to the db & listening on port', process.env.PORT || 4000);
    });
  })
  .catch((error) => {
    console.log(error);
  });
