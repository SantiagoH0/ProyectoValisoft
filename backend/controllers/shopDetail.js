const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');
const ShopDetail = require('../models/shopDetail');
const Shop = require('../models/shop');
const Product = require('../models/product');

// Ruta para obtener todos los detalles de compras
router.get('/', async (req, res) => {
  try {
    const shopDetails = await ShopDetail.findAll({
      include: [Shop, Product],
    });
    res.json(shopDetails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los detalles de compras' });
  }
});

// Ruta para obtener un detalle de compra por ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const shopDetail = await ShopDetail.findByPk(id, {
      include: [Shop, Product],
    });

    if (!shopDetail) {
      return res.status(404).json({ error: 'Detalle de compra no encontrado' });
    }

    res.json(shopDetail);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el detalle de compra' });
  }
});

// Ruta para crear un nuevo detalle de compra
router.post('/', async (req, res) => {
  const { ShopId, ProductId, Quantity, Value } = req.body;
  try {
    const product = await Product.findByPk(ProductId);

    if (!product) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    const newValue = (parseFloat(product.Value) * parseInt(Quantity)).toFixed(2);

    const newShopDetail = await ShopDetail.create({
      ShopId,
      ProductId,
      Quantity,
      Value: newValue,
    });

    product.Stock += parseInt(Quantity);
    await product.save();

    const shop = await Shop.findByPk(ShopId);
    shop.Total = 0;

    const shopDetails = await ShopDetail.findAll({
      where: { ShopId },
    });

    for (const item of shopDetails) {
      shop.Total += parseFloat(item.Value);
    }

    await shop.save();

    res.status(201).json(newShopDetail);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el detalle de compra' });
  }
});

// Ruta para actualizar un detalle de compra existente
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { ShopId, ProductId, Quantity, Value } = req.body;
  try {
    const shopDetail = await ShopDetail.findByPk(id);

    if (!shopDetail) {
      return res.status(404).json({ error: 'Detalle de compra no encontrado' });
    }

    const product = await Product.findByPk(ProductId);

    if (!product) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    const newValue = (parseFloat(product.Value) * parseInt(Quantity)).toFixed(2);

    await shopDetail.update({
      ShopId,
      ProductId,
      Quantity,
      Value: newValue,
    });

    product.Stock -= parseInt(shopDetail.Quantity);
    product.Stock += parseInt(Quantity);
    await product.save();

    const shop = await Shop.findByPk(ShopId);
    shop.Total = 0;

    const shopDetails = await ShopDetail.findAll({
      where: { ShopId },
    });

    for (const item of shopDetails) {
      shop.Total += parseFloat(item.Value);
    }

    await shop.save();

    res.json(shopDetail);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el detalle de compra' });
  }
});

// Ruta para eliminar un detalle de compra
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const shopDetail = await ShopDetail.findByPk(id);

    if (!shopDetail) {
      return res.status(404).json({ error: 'Detalle de compra no encontrado' });
    }

    const product = await Product.findByPk(shopDetail.ProductId);

    if (product) {
      product.Stock -= parseInt(shopDetail.Quantity);
      await product.save();
    }

    await shopDetail.destroy();

    const shop = await Shop.findByPk(shopDetail.ShopId);
    shop.Total = 0;

    const shopDetails = await ShopDetail.findAll({
      where: { ShopId: shopDetail.ShopId },
    });

    for (const item of shopDetails) {
      shop.Total += parseFloat(item.Value);
    }

    await shop.save();

    res.json({ message: 'Detalle de compra eliminado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el detalle de compra' });
  }
});

module.exports = router;
