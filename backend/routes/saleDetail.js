const {Router} = require('express');
const route = Router();

//Importar el controlador
const{postSaleDetail, getSaleDetail, putSaleDetail, deleteSaleDetail} = require('../controllers/saleDetail');

route.post('/', postSaleDetail);
route.get('/', getSaleDetail);
route.put('/', putSaleDetail);
route.delete('/', deleteSaleDetail);

module.exports = route;