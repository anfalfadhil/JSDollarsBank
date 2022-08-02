const mongoose = require("mongoose");


const TransactionSchema =  mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
    amount: { type: mongoose.Types.Decimal128, require: true },
    date  :  { type: Date, default: Date.now },
    trans_type : { type: String}
},  {timestamps: true});



module.exports = mongoose.model("Transaction", TransactionSchema);