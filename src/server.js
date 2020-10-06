require('./services/mongo');
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 3500,
    host: 'localhost'
  });

  server.route(routes);

  await server.start();
  console.log('Server is running!');
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();