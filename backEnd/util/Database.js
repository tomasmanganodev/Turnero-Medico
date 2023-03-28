const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "turnerodb",
  password: "*Yxg]v?YFq*jkUVZX0",
});

module.exports = pool.promise();
