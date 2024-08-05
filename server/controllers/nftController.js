const NFT = require('../models/nftModel.js'); 

const createNFT = async (req, res) => {
    const { title, description, price, username } = req.body;
    const image = req.file;

    if (!image) {
        return res.status(400).json({ error: 'Image is required' });
    }

    try {
        const nft = await NFT.create({ 
            title, 
            description, 
            price, 
            image: image.buffer.toString('base64'), 
            username 
        });
        res.status(201).json(nft);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getNFTs = async (req, res) => {
    try {
        const nfts = await NFT.find({ username: req.user.username });
        res.status(200).json(nfts);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getNFT = async (req, res) => {
    const { id } = req.params;

    try {
        const nft = await NFT.findById(id);
        if (!nft) {
            return res.status(404).json({ error: 'NFT not found' });
        }
        res.status(200).json(nft);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteNFT = async (req, res) => {
    const { id } = req.params;

    try {
        const nft = await NFT.findOneAndDelete({ _id: id, username: req.user.username });
        if (!nft) {
            return res.status(404).json({ error: 'No NFT found with this ID or unauthorized' });
        }
        res.status(200).json({ message: 'NFT deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const editNFT = async (req, res) => {
    const { id } = req.params;
    const { title, description, price, image } = req.body;

    try {
        const nft = await NFT.findOneAndUpdate(
            { _id: id, username: req.user.username },
            { title, description, price, image },
            { new: true, runValidators: true }
        );
        if (!nft) {
            return res.status(404).json({ error: 'No NFT found with this ID or unauthorized' });
        }
        res.status(200).json(nft);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createNFT,
    getNFTs,
    getNFT,
    deleteNFT,
    editNFT
};
