const mongoose = require("mongoose");

const Schema = mongoose.Schema

const drinkSchema = Schema({
    _id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    available: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model("drinks", drinkSchema, "drinks")