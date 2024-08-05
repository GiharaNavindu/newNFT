// const mongoose = require('mongoose')


// const Schema = mongoose.Schema

// const orderSchema = new Schema({
//     FullName:{
//         type:String,
//         required:true
//     },

//     Email:{
//         type:String,
//         required:true
//     },

//     Bid:{
//         type:Number,
//         required:true
//     }
// },{timestamps:true})


// module.exports = mongoose.model('Order',orderSchema)




// const mongoose = require('mongoose');

// const Schema = mongoose.Schema;

// const orderSchema = new Schema({
//     Username: {
//         type: String,
//         required: true
//     },
//     Email: {
//         type: String,
//         required: true
//     },
//     Bid: {
//         type: Number,
//         required: true
//     }
// }, { timestamps: true });

// module.exports = mongoose.model('Order', orderSchema);



const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    Username: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Bid: {
        type: Number,
        required: true
    },
    NFTTitle: { // Add this field
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
