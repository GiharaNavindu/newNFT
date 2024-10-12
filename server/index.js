// const express = require('express');
// const cors = require('cors');
// // const dotenv = require('dotenv'); // Uncomment this line
// const mongoose = require('mongoose');
// const orderRoutes = require('./routes/orders');
// const authRoutes = require('./routes/auth');
// const nftRoutes = require('./routes/nftRoutes');

// // dotenv.config(); // This should work now


// const app = express();


// app.use(cors({
//   // origin: ['http://localhost:5173', 'http://localhost:5174','https://new-nft-front.vercel.app'],
//   origin: ['https://new-nft-front.vercel.app'],
//   methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization']
// }));

// console.log('connected3');

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use((req, res, next) => {
//   console.log(req.path, req.method);
//   next();
// });

// app.use('/api/orders', orderRoutes);
// app.use('/api/auth', authRoutes);
// app.use('/api/nfts', nftRoutes);



// mongoose.connect('mongodb+srv://user1:Steve_21@cluster0.9v4nncq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     app.listen( 4000, () => {
//       console.log('connected to the db & listening on port',  4000);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });







const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const orderRoutes = require('./routes/orders');
const authRoutes = require('./routes/auth');
const nftRoutes = require('./routes/nftRoutes');

const app = express();

app.use(cors({
  origin: ['https://new-nft-front.vercel.app'],
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

// Favicon handling
app.get('/favicon.ico', (req, res) => res.status(204));

mongoose.connect('mongodb+srv://user1:Steve_21@cluster0.9v4nncq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    app.listen(4000, () => {
      console.log('Connected to the DB & listening on port 4000');
    });
  })
  .catch((error) => {
    console.log(error);
  });
