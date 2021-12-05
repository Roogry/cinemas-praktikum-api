const { addMovieHandler, getAllMoviesHandler, getMovieByIdHandler, editMovieByIdHandler, deleteMovieByIdHandler, deleteAllMovieHandler } = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/movies',
        handler: addMovieHandler
        // Some-Origin Policy
        // can be specific in route, but also can be in server
        // options: {
        //     cors: {
        //         origin: ['*'],
        //     },
        // },
    },
    {
        method: 'GET',
        path: '/movies',
        handler: getAllMoviesHandler,
    },
    {
        method: 'GET',
        path: '/movies/{id}',
        handler: getMovieByIdHandler,
    },
    {
        method: 'PUT',
        path: '/movies/{id}',
        handler: editMovieByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/movies/{id}',
        handler: deleteMovieByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/movies',
        handler: deleteAllMovieHandler,
    },
];

// ensure routes can be access in server.js
module.exports = routes;