const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },		
    price: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    ribbon: {
        type: String,
        required: true
    },
    pictureUri: {
        type: String,
        required: true
    }
});

const Product = mongoose.model('product', ProductSchema);

module.exports = Product;