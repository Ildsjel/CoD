const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WSJFAvoid = new Schema({
    createdOn: {
        type: Date,
        default: Date.now
    },
    avoidItemName: {
        type: String,
        required: true
    },
    costavoidedtotal: {
        type: Number,
        required: true
    },
    timecostoccur: {
        type: Date,
        required: true
    },
    risk: {
        type: Number,
        required: true
    },
    estimationAvoidValue: {
        type: Number,
        required: true
    },
    WSJFAvoidValue: {
        type: String,
        set: function() {
            let WSJFAvoidValue = this.costavoidedtotal / this.estimationAvoidValue;
            return WSJFAvoidValue;
        },
        required: true

    }
});



module.exports = mongoose.model("WSJFAvoid", WSJFAvoid);
