const {Router} = require ('express')
const route = Router()
const {getShopOrder, postShopOrder, putShopOrder, deleteShopOrder} = require ('../controllers/shopOrder')

route.get('/', getShopOrder)
route.post('/', postShopOrder)
route.put('/', putShopOrder)
route.delete('/', deleteShopOrder)

module.exports = route  