const Hapi = require('@hapi/hapi');
const config = require("platformsh-config").config();
const routes = require('./lib/api');

let port = 9000;
if (config.isValidPlatform()) {
  port = config.port
}

const server = Hapi.server({
    port,
    host: '0.0.0.0',
});

server.route({
    method: 'GET',
    path: '/api/entries',
    handler: routes.list,
});

server.route({
    method: 'GET',
    path: '/api/ping',
    handler: () => {
        return "PONG!";
    },
});

server.route({
    method: 'GET',
    path: '/api/entries/{id}',
    handler: routes.read,
});

server.route({
    method: 'DELETE',
    path: '/api/entries/{id}',
    handler: routes.remove,
});

server.route({
    method: 'PUT',
    path: '/api/entries/{id}',
    handler: routes.update,
});

server.route({
    method: 'POST',
    path: '/api/entries',
    handler: routes.create,
});

const init = async () => {
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
