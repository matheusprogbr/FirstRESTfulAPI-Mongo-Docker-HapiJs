const {
  getAll,
  save,
  remove
} = require('./controllers/products');

module.exports = [{
    method: 'GET',
    path: '/api/v1/products',
    handler: getAll
  },
  {
    method: 'POST',
    path: '/api/v1/products',
    handler: save
  },
  {
    method: 'DELETE',
    path: '/api/v1/products/{id}',
    handler: remove
  }
];