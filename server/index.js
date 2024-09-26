const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv'); // Uncomment this line
const mongoose = require('mongoose');
const orderRoutes = require('./routes/orders');
const authRoutes = require('./routes/auth');
const nftRoutes = require('./routes/nftRoutes');

dotenv.config(); // This should work now
require('dotenv').config({ path: '.env' });

const app = express();
console.log('connected1');
console.log('DB_URI:', process.env.DB_URI);


app.use(cors({
  // origin: ['http://localhost:5173', 'http://localhost:5174','https://new-nft-front.vercel.app'],
  origin: ['https://new-nft-front.vercel.app'],
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

console.log('connected3');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use('/api/orders', orderRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/nfts', nftRoutes);

console.log('DB_URI:', process.env.DB_URI);

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(process.env.PORT || 4000, () => {
      console.log('connected to the db & listening on port', process.env.PORT || 4000);
    });
  })
  .catch((error) => {
    console.log(error);
  });







