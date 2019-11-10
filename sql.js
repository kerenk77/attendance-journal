const mysql = require('promise-mysql');

let db;

mysql.createPool({
    connectionLimit: 100,
    host: process.env.MYSQL_URL,
    user: process.env.MYSQL_USER,
    password: process.env.mysql_native_password,
    database: process.env.MYSQL_DB
}).then((c) => {
    db = c;
    console.log(db);
}).catch((e) => {
    console.error(e);
});

module.exports = async function (req, res) {
    let data = await db.query("SELECT * FROM teachers");
    res.send(data);
}