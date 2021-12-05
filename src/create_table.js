const db = require("./mysql_connection");

db.connect(function (err) {
    if (err) throw err;

    let sql = `CREATE TABLE movies 
    (
        id VARCHAR(255) NOT NULL,
        title VARCHAR(255),
        overview TEXT,
        duration TINYINT,
        age_rate VARCHAR(5),
        genre VARCHAR(255),
        rating FLOAT(2,1),
        created_at DATETIME,
        updated_at DATETIME,
        PRIMARY KEY (id)
    )`;

    db.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});