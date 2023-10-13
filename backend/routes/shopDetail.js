const {Router} = require ('express')
const route = Router()
const {getShopDetail, postShopDetail, putShopDetail, deleteShopDetail} = require ('../controllers/shopDetails')

route.get('/', getShopDetail)
route.post('/', postShopDetail)
route.put('/', putShopDetail)
route.delete('/', deleteShopDetail)

module.exports = route  