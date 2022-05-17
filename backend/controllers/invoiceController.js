const { Console } = require("console")
const asyncHandler= require('express-async-handler')
const Invoice= require('../models/invoiceModel')

const getInvoice= asyncHandler(async (req, res) => {
    const invoices= await Invoice.find()

    res.status(200).json(invoices)
})

const postInvoice= asyncHandler(async (req, res) => {
    allinvoices = ""

    for(var i=0; i< req.body.list.length; i++){
        if(!req.body.list[i].id || ! req.body.list[i].text || ! req.body.list[i].customerName || !req.body.list[i].amountOwed || !req.body.list[i].datePurchased){
            res.status(400).json({"message":"One or more required fields are missing."})
        }

        const invoice= await Invoice.create({
            id: req.body.list[i].id,
            text: req.body.list[i].text,
            customerName: req.body.list[i].customerName,
            amountOwed: req.body.list[i].amountOwed,
            datePurchased: req.body.list[i].datePurchased
        })

        allinvoices += invoice
    };

    res.status(200).json(allinvoices);
});

const putInvoice= asyncHandler(async (req, res)=>{
    allinvoices = ""
    console.log("rbl", req.body.list.length)

    for(var i=0; i< req.body.list.length; i++){

        const invoices= await Invoice.find({"id":req.body.list[i].id})

        if(invoices.length != 1){
            res.status(400).json({"message":"One of the invoices was not found, could not be updated"})
        }
        console.log("IN", invoices)

        const updateInvoice= await Invoice.findByIdAndUpdate(invoices[0]._id, req.body.list[0], {new: true})
        console.log("ui", updateInvoice)

        allinvoices += updateInvoice
    }
    res.status(200).json(allinvoices)
})

const deleteInvoice= asyncHandler(async (req, res)=>{
    allinvoices=""

    for(var i=0; i< req.body.list.length; i++){
        const invoice= await Invoice.find({"id": req.body.list[i].id})
        if(invoice.length != 1){
            res.status(400).json({"message":"Could not delete- one or more id's not found"})
        }
        allinvoices += invoice
        await Invoice.remove()
    }
    res.status(200).json(allinvoices)
})

module.exports={
    getInvoice, postInvoice, putInvoice, deleteInvoice
}