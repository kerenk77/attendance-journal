const mysql = require('promise-mysql');

let db;

mysql.createPool({
    connectionLimit: 100,
    host: "eu-cdbr-west-02.cleardb.net",
    user: "bee1beacd8e7b2",
    password: "aff30418",
    database: "heroku_8e032dbd0b28bea"
}).then((c) => {
    db = c;
}).then((heroku_8e032dbd0b28bea) => {}).catch((e) => {
    console.error(e);
});

module.exports = async function (req, res) {
    let data = await db.query("SELECT * FROM heroku_8e032dbd0b28bea.`mehina-girls`");
    console.log(data);
    res.send(data);
}