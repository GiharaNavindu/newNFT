// const express = require('express');
// const router = express.Router();
// const { createNFT, getNFTs, getNFT, deleteNFT, editNFT } = require('../controllers/nftController');
// const authMiddleware = require('../middleware/authMiddleware');

// // Increase payload size limit
// const bodyParser = require('body-parser');
// router.use(bodyParser.json({ limit: '50mb' }));
// router.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// // Apply authentication middleware to all routes
// router.use(authMiddleware);

// // Routes
// router.post('/', createNFT);
// router.get('/', getNFTs);
// router.get('/:id', getNFT);
// router.delete('/:id', deleteNFT);
// router.put('/:id', editNFT);

// module.exports = router;



const express = require('express');
const router = express.Router();
const multer = require('multer');
const { createNFT, getNFTs, getNFT, deleteNFT, editNFT } = require('../controllers/nftController');
const authMiddleware = require('../middleware/authMiddleware');

// Configure Multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage, limits: { fileSize: 50 * 1024 * 1024 } });

// Apply authentication middleware to all routes
router.use(authMiddleware);

// Routes
router.post('/', upload.single('image'), createNFT);
router.get('/', getNFTs);
router.get('/:id', getNFT);
router.delete('/:id', deleteNFT);
router.put('/:id', upload.single('image'), editNFT);

module.exports = router;
