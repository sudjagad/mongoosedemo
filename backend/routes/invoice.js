const express= require('express')
const {getInvoice, putInvoice, postInvoice, deleteInvoice} =require('../controllers/invoiceController')
const router= express.Router()

router.get('/', getInvoice)

router.post('/', postInvoice)

router.put('/', putInvoice)

router.delete('/', deleteInvoice)

module.exports=router;