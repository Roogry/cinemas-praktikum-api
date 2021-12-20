const {
    nanoid
} = require("nanoid");
const {
    addMovieOperation,
    getAllMoviesOperation,
    getMovieByIdOperation,
    editMovieByIdOperation,
    deleteMovieByIdOperation,
    deleteAllMovieOperation
} = require('./mysql_operation');

// request and h params is optional that can be added when using HAPI
const addMovieHandler = async (request, h) => {
    // to get body request in HAPI, use request.payload
    const {
        title,
        overview,
        duration,
        age_rate,
        genre,
        rating
    } = request.payload;

    // use nanoid to help create string and unik id
    // params is length of string
    const id = nanoid(16);
    const created_at = new Date().toISOString();
    const updated_at = created_at;

    const newMovie = {
        title,
        overview,
        duration,
        age_rate,
        genre,
        rating,
        id,
        created_at,
        updated_at
    };
    // movies.push(newMovie);

    // check if new node already added
    // const isSuccess = movies.filter((movie) => movie.id === id).length > 0;
    let result, error;
    await addMovieOperation(newMovie)
        .then(res => result = res)
        .catch(err => error = err);

    // if added
    if (result !== undefined) {
        const response = h.response({
            status: 'success',
            message: 'Film berhasil ditambahkan',
            movie: newMovie,
        });
        response.code(201);
        return response;
    }

    const response = h.response({
        status: 'fail',
        message: error.sqlMessage,
    });

    response.code(500);
    return response;
};

// request dan h tidak digunakan
const getAllMoviesHandler = async (request, h) => {
    let result, error;
    await getAllMoviesOperation()
        .then(res => result = res)
        .catch(err => error = err);

    if (result !== undefined) {
        const response = h.response({
            status: 'success',
            message: 'Seluruh Film berhasil didapatkan',
            movies: result,
        });

        response.code(201);
        return response;
    }

    const response = h.response({
        status: 'fail',
        message: error.sqlMessage,
    });

    response.code(500);
    return response;
};

const getMovieByIdHandler = async (request, h) => {
    const {
        id
    } = request.params;

    // get movie by id
    // const movie = movies.filter((n) => n.id === id)[0];

    let result, error;
    await getMovieByIdOperation(id)
        .then(res => result = res)
        .catch(err => error = err);

    if (result !== undefined) {
        return {
            status: 'success',
            message: 'Film' + result.title + 'berhasil didapatkan',
            movie: result,
        };
    }

    const response = h.response({
        status: 'fail',
        message: error.sqlMessage,
    });

    response.code(500);
    return response;
};

const editMovieByIdHandler = async (request, h) => {
    const {
        id
    } = request.params;

    const {
        title,
        overview,
        duration,
        age_rate,
        genre,
        rating
    } = request.payload;

    const updated_at = new Date().toISOString();

    var movie = {
        title,
        overview,
        duration,
        age_rate,
        genre,
        rating,
        updated_at,
    };

    let result, error;
    await editMovieByIdOperation(movie, id)
        .then(res => result = res)
        .catch(err => error = err);

    if (result !== undefined) {
        const response = h.response({
            status: 'success',
            message: 'Film berhasil diperbarui',
            movie: movie,
        });

        response.code(200);
        return response;
    }

    // if not updated
    const response = h.response({
        status: 'fail',
        message: error.sqlMessage,
    });

    response.code(500);
    return response;
};

const deleteMovieByIdHandler = async (request, h) => {
    const {
        id
    } = request.params;

    let result, error;
    await deleteMovieByIdOperation(id)
        .then(res => result = res)
        .catch(err => error = err);

    if (result !== undefined) {
        const response = h.response({
            status: 'success',
            message: 'Film berhasil dihapus',
        });

        response.code(200);
        return response;
    }

    const response = h.response({
        status: 'fail',
        message: error.sqlMessage,
    });

    response.code(500);
    return response;
};

const deleteAllMovieHandler = async (request, h) => {
    // movies.splice(0, movies.length); 
    let result, error;
    await deleteAllMovieOperation()
        .then(res => result = res)
        .catch(err => error = err);

    if (result !== undefined) {
        const response = h.response({
            status: 'success',
            message: 'Seluruh film berhasil dihapus',
        });

        response.code(200);
        return response;
    }

    const response = h.response({
        status: 'fail',
        message: error.sqlMessage,
    });

    response.code(500);
    return response;
};

// export with literal object
module.exports = {
    addMovieHandler,
    getAllMoviesHandler,
    getMovieByIdHandler,
    editMovieByIdHandler,
    deleteMovieByIdHandler,
    deleteAllMovieHandler
};