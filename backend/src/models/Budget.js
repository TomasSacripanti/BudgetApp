const { Schema, model } = require('mongoose');

const budgetSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    expenses: [{name: String, amount: Number}],
    balance: String,
});

module.exports = model('Budget', budgetSchema);