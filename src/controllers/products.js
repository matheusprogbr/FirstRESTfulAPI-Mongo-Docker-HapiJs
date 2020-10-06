const ProductModel = require('../models/Product');

const transformer = (product) => ({
  type: 'products',
  id: product.id,
  attributes: {
    name: product.name,
    price: product.price,
  },
  links: {
    self: `/api/v1/products/${product.id}`
  }
});

const getAll = async (request, h) => {
  const products = await ProductModel.find({});
  return h.response(products.map(transformer));
};

const save = async (request, h) => {
  const {
    name,
    price
  } = request.payload;

  const product = new ProductModel;
  product.name = name;
  product.price = price;

  await product.save();

  return h.response(transformer(product)).code(201);
};







module.exports = {
  getAll,
  save,
};