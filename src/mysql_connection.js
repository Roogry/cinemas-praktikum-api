const mysql = require('mysql');

// connect with this only if database allready created
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "cinemas"
});

db.connect(function (err) {
    if (err) throw err;
    return;
});

module.exports = db;