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
  return {
    data: products.map(transformer)
  };
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

const remove = async (request, h) => {
  const {
    id
  } = request.params;

  await ProductModel.findOneAndDelete({
    _id: id
  });
  return h.response().code(204);
};





module.exports = {
  getAll,
  save,
  remove
};