const mysql = require('promise-mysql');

let db;

mysql.createPool({
    connectionLimit: 100,
    host: "localhost",
    user: "root",
    password: "beitar",
    database: "attendance-journal"
}).then((c) => {
    db = c;
    return db.query("SELECT * FROM my_school.`mehina-girls`")
}).then((my_school) => {
    console.log(my_school)
}).catch((e) => {
    console.error(e);
});

// module.exports = function (req, res) {
//     res.send(db.my_school);

// }