const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'turnerodb',
    password: 'tom4as6man1'
})

module.exports = pool.promise();

