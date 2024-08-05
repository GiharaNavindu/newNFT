

const mongoose = require('mongoose');

const nftSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  username: { type: String, required: true }
});

const NFT = mongoose.model('NFT', nftSchema);

module.exports = NFT;
