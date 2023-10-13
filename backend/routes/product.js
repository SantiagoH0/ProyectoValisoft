const {Router} = require ('express')
const route = Router()
const {getProduct, postProduct, putProduct, deleteProduct} = require ('../controllers/product')

route.get('/', getProduct)
route.post('/', postProduct)
route.put('/', putProduct)
route.delete('/', deleteProduct)

module.exports = route  