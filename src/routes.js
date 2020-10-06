const {
  getAll,
  getProduct,
  save,
  updateProduct,
  remove
} = require('./controllers/products');


module.exports = [{
    method: 'GET',
    path: '/api/v1/products',
    handler: getAll
  },
  {
    method: 'GET',
    path: '/api/v1/products/{id}',
    handler: getProduct
  },
  {
    method: 'POST',
    path: '/api/v1/products',
    handler: save
  },
  {
    method: 'PUT',
    path: '/api/v1/products/{id}',
    handler: updateProduct
  },
  {
    method: 'DELETE',
    path: '/api/v1/products/{id}',
    handler: remove
  }
];