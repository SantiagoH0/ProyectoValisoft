const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');
const Shop = require('../models/shop');

// Ruta para obtener todas las compras
router.get('/', async (req, res) => {
  try {
    const shops = await Shop.findAll({
      include: [Supplier, ShopOrder],
    });
    res.json(shops);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener las compras' });
  }
});

// Ruta para obtener una compra por ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const shop = await Shop.findByPk(id, {
      include: [Supplier, ShopOrder],
    });

    if (!shop) {
      return res.status(404).json({ error: 'Compra no encontrada' });
    }

    res.json(shop);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener la compra' });
  }
});

// Ruta para crear una nueva compra
router.post('/', async (req, res) => {
  const { ShopOrderId, ShopDate, SupplierId, Total } = req.body;
  try {
    const newShop = await Shop.create({
      ShopOrderId,
      ShopDate,
      SupplierId,
      Total,
    });

    res.status(201).json(newShop);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear la compra' });
  }
});

// Ruta para actualizar una compra existente
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { ShopOrderId, ShopDate, SupplierId, Total } = req.body;
  try {
    const shop = await Shop.findByPk(id);

    if (!shop) {
      return res.status(404).json({ error: 'Compra no encontrada' });
    }

    await shop.update({
      ShopOrderId,
      ShopDate,
      SupplierId,
      Total,
    });

    res.json(shop);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar la compra' });
  }
});

// Ruta para eliminar una compra
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const shop = await Shop.findByPk(id);

    if (!shop) {
      return res.status(404).json({ error: 'Compra no encontrada' });
    }

    await shop.destroy();

    res.json({ message: 'Compra eliminada exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar la compra' });
  }
});

module.exports = router;
