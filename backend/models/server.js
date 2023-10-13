const express = require('express');
const sequelize = require('../database/config');

class Server {
  constructor() {
    this.app = express();
    this.port = 3000;

    this.supplierPath = '/api/supplier'
    this.warnPath = '/api/warn'

    this.shopPath = '/api/shop'
    this.shopDetailPath = '/api/shopDetail'
    this.shopOrderDetailPath = '/api/shopOrderDetail'
    this.shopOrderPath = '/api/shopOrder'

    this.productPath = '/api/product'
    this.userPath = '/api/user'

    this.salePath = '/api/sale'
    this.clientPath = '/api/client'
    this.saleDetailPath = '/api/saleDetail'



    this.routes();
    this.db_connect();
    this.app.use(express.json()); 
  }

  routes() {
    this.app.use(this.supplierPath, require('../routes/supplier'))
    this.app.use(this.warnPath, require('../routes/warn'))

    this.app.use(this.shopPath, require('../routes/shop'))
    this.app.use(this.shopDetailPath, require('../routes/shopDetail'))
    this.app.use(this.shopOrderPath, require('../routes/shopOrder'))
    this.app.use(this.shopOrderDetailPath, require('../routes/shopOrderDetail'))

    this.app.use(this.productPath, require('../routes/product'))
    this.app.use(this.userPath, require('../routes/user'))

    this.app.use(this.clientPath, require('../routes/client'))
    this.app.use(this.saleDetailPath, require('../routes/saleDetail'))
    this.app.use(this.salePath, require('../routes/sale'))
  }

  async db_connect() {
    try {
      await sequelize.authenticate();
      console.log('Conexión exitosa a PostgreSQL');
    } catch (err) {
      console.error('Error al conectar a PostgreSQL:', err);
    }
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Escuchando en el puerto ${this.port}`);
    });
  }
}

module.exports = Server;