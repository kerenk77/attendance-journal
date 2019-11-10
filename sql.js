const mysql = require('promise-mysql');

let db;

mysql.createPool({
    connectionLimit: 100,
    host: "eu-cdbr-west-02.cleardb.net",
    user: "bb1b513d62e056",
    password: "f8236513",
    database: "hheroku_21ff2f1f46864dc"
}).then((c) => {
    db = c;
}).then((heroku_21ff2f1f46864dc) => {}).catch((e) => {
    console.error(e);
});

module.exports = async function (req, res) {
    let data = await db.query("SELECT * FROM heroku_21ff2f1f46864dc.`mehina_girls`");
    console.log(data);
    res.send(data);
}