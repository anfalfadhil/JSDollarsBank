const mongoose = require("mongoose");

const TransactionsListSchema = new mongoose.Schema({
    transactions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Transaction" }],
    customer: {type: mongoose.Schema.Types.ObjectId, ref: "Customer" }
});

module.exports = mongoose.model("TransactionsList", TransactionsListSchema);