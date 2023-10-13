const {Router} = require('express');

const route = Router();

//Importar controlador
const{postClient, getClient, putClient, deleteClient} = require('../controllers/client');

route.post('/', postClient);
route.get('/', getClient);
route.put('/', putClient);
route.delete('/', deleteClient);

module.exports = route;
