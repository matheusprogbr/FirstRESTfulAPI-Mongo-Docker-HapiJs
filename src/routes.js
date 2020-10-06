const { getAll, save } = require('./controllers/products');

module.exports = [
  {
    method: 'GET',
    path:'/api/v1/products',
    handler: getAll
  },
  {
    method:'POST',
    path:'/api/v1/products',
    handler: save
  }
];