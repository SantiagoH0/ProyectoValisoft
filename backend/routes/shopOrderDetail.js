const {Router} = require ('express')
const route = Router()
const {getShopOrderDetail, postShopOrderDetail, putShopOrderDetail, deleteShopOrderDetail} = require ('../controllers/shopOrderDetail')

route.get('/', getShopOrderDetail)
route.post('/', postShopOrderDetail)
route.put('/', putShopOrderDetail)
route.delete('/', deleteShopOrderDetail)

module.exports = route 