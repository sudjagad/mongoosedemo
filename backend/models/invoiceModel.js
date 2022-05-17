const mongoose= require('mongoose')

const invoiceSchema= mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    text: {
        type:String,
        required: true
    },
    customerName: {
        type:String,
        required:true
    },
    amountOwed: {
        type:Number,
        required:true
    },
    datePurchased:{
        type:Date,
        required:true
    }
}, {
    timestamps: true
})

module.exports= mongoose.model('Invoice', invoiceSchema)