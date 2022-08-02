const mongoose = require("mongoose");

const CustomerSchema = mongoose.Schema({
    name: { type: String, required: true},
    phone: { type: String, required: true},
    password: { type: String, required: true},
    balance: { type: mongoose.Types.Decimal128, default: 0}
}, {timestamps: true,
    toJSON: {
        virtuals: true,
        transform: (_doc, ret) => {
          delete ret.password;
          return ret;
        },
      },
});


module.exports = mongoose.model("Customer", CustomerSchema)