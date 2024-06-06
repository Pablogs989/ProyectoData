const mongoose = require('mongoose');

const ShoppingMallSchema = new mongoose.Schema({
    age: 
    {
        type: Number,
    },
    category: 
    {
        type: String,
    },
    payment_method: 
    {
        type: String,
    },
    invoice_date: 
    {
        type: Date,
    },

}, { timestamps: true });

const ShoppingMall = mongoose.model('ShoppingMall', ShoppingMallSchema);

module.exports = ShoppingMall;