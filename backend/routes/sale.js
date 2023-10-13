const {Router} = require('express');

const route = Router();

//Importar el controlador
const {postSale, getSale, putSale, deleteSale} = require('../controllers/sale');

route.post('/', postSale);
route.get('/', getSale);
route.put('/', putSale);
route.delete('/', deleteSale);

module.exports = route;