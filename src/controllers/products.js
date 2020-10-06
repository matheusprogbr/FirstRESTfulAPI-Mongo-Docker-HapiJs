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

const getProduct = async (request, h) => {
  const {
    id
  } = request.params;

  const product = await ProductModel.findById(id);

  if (!product) return h.response('Product not found!').code(404);

  return h.response({
    data: transformer(product)
  }).code(200);
};

const save = async (request, h) => {
  const keys = Object.keys(request.payload);
  for (key of keys) {
    if (request.payload[key] == '') {
      return h.response('Invalid Input. Complete all the blanks');
    }
  };

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

const updateProduct = async (request, h) => {
  const {
    id
  } = request.params;

  if (!request.payload) return h.response('Fill the fields!').code(204);

  const keys = Object.keys(request.payload);
  for (key of keys) {
    if (request.payload[key] == '') {
      return h.response('Invalid Input. Complete all the blanks');
    }
  };

  const newProduct = request.payload;

  const product = await ProductModel.findOneAndUpdate({
    _id: id
  }, newProduct);

  return h.response({
    data: transformer(newProduct)
  }).code(201);
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
  getProduct,
  save,
  updateProduct,
  remove
};