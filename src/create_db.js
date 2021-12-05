const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
});

db.connect(function (err) {
    if (err) throw err;

    let sql = "CREATE DATABASE cinemas";

    db.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Database created");
    });
});