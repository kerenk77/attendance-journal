const mysql = require('promise-mysql');

let db;

mysql.createPool({
    connectionLimit: 100,
    host: "localhost",
    user: "root",
    password: "beitar",
    database: "my_school"
}).then((c) => {
    db = c;
}).then((my_school) => {
    console.log(my_school)
}).catch((e) => {
    console.error(e);
});

module.exports = async function (req, res) {
    let data = await db.query("SELECT * FROM my_school.`mehina-girls`")
    res.send(data);
}