const {Router} = require ('express')
const route = Router()
const {getShop, postShop, putShop, deleteShop} = require ('../controllers/shop')

route.get('/', getShop)
route.post('/', postShop)
route.put('/', putShop)
route.delete('/', deleteShop)

module.exports = route  