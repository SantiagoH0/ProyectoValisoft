const { Router } = require('express')

const supplierRoute = Router()

const  { getSupplier, postSupplier, putSupplier, deleteSupplier} = require('../controllers/supplier')



supplierRoute.get('/', getSupplier)

supplierRoute.post('/',  postSupplier)

supplierRoute.put('/', putSupplier)

supplierRoute.delete('/', deleteSupplier)

module.exports = supplierRoute