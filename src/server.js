const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
        // Some-Origin Policy
        // can be specific in route, but also can be in server
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    });

    // use routes
    server.route(routes);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};

init();