const db = require("../util/Database.js");


exports.checkDataExists = async (data, table, field) => {
  const query = `SELECT IF(COUNT(*) > 0, 1, 0) AS exist FROM ${table} WHERE ${field} = ?`;

  try {
    const [rows] = await db.execute(query, [data]);
    const exist = rows[0].exist;
    return exist;
  } catch (error) {
    console.error("Error:", error);
    throw error; // Re-throw the error for handling in the calling code
  }
  };


