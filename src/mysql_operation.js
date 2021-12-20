const db = require("./mysql_connection");

const addMovieOperation = (movie) => {
    return new Promise((resolve, reject) => {
        let sql = `INSERT INTO movies SET ?`;

        db.query(sql, movie, function (err, res) {
            if (err) reject(err);
            return resolve(res.affectedRows);
        });
    });
};

const addManyMoviesOperaton = (movies) => {
    return new Promise((resolve, reject) => {
        let sql = "INSERT INTO movies SET ?";

        db.query(sql, [movies], function (err, res) {
            if (err) reject(err);
            return resolve(res.affectedRows);
        });
    });
}

const getAllMoviesOperation = () => {
    return new Promise((resolve, reject) => {
        let sql = "SELECT * FROM movies ORDER BY created_at DESC";

        db.query(sql, function (err, res) {
            if (err) reject(err);
            return resolve(res);
        });
    });
}

const getMovieByIdOperation = (movieId) => {
    return new Promise((resolve, reject) => {
        let sql = "SELECT * FROM movies WHERE id = ?";

        db.query(sql, movieId, function (err, res) {
            if (err) reject(err);
            return resolve(res);
        });
    });
}

const editMovieByIdOperation = (movie, movieId) => {
    return new Promise((resolve, reject) => {
        let sql = `UPDATE movies SET ? WHERE id = ?`;

        db.query(sql, [movie, movieId], function (err, res) {
            if (err) reject(err);
            return resolve(res.affectedRows);
        });
    });
}

const deleteMovieByIdOperation = (movieId) => {
    return new Promise((resolve, reject) => {
        let sql = `DELETE FROM movies WHERE id = ?`;

        db.query(sql, [movieId], function (err, res) {
            if (err) reject(err);
            return resolve(res.affectedRows);
        });
    });
}

const deleteAllMovieOperation = () => {
    return new Promise((resolve, reject) => {
        let sql = `TRUNCATE TABLE movies`;

        db.query(sql, function (err, res) {
            if (err) reject(err);
            return resolve(res);
        });
    });
}

// export with literal object
module.exports = {
    addMovieOperation,
    getAllMoviesOperation,
    getMovieByIdOperation,
    editMovieByIdOperation,
    deleteMovieByIdOperation,
    deleteAllMovieOperation
};