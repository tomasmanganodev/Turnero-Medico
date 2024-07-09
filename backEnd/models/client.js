//Importar archivo “Database”
const db = require('../util/Database');

class client {
  //Constructor de la clase
  constructor(id, dni, firstName, lastName, telephone, obrasocial) {
    this.id = id;
    this.dni = dni;
    this.firstName = firstName;
    this.lastName = lastName;
    this.telephone = telephone;
    this.obrasocial = obrasocial
  }

  // Guardar nuevo paciente en la base datos
  async save() {
    const result = await db.execute(
      `INSERT INTO clients (dni, first_name, last_name, telephone, obra_social) 
        VALUES (?, ?, ?, ?,?)`,
      [this.dni, this.firstName, this.lastName, this.telephone, this.obrasocial]
    );
    return result[0].insertId;
  }

  // Buscar todos los pacientes
  static findAll() {
    return db.execute(`SELECT first_name, last_name, telephone
        FROM clients`);
  }
  //Buscar por dni
  static  async findBydni(dni) {
    return  await db.execute(
      `SELECT id, first_name, last_name, telephone, dni
        FROM clients
        WHERE clients.dni = ?`,
      [dni]
    );
  }
  //Eliminar por dni
  static delete(dni) {
    return db.execute(
      `DELETE FROM clients
        WHERE clients.dni = ?`,
      [dni]
    );
  }
  //Actualizar por dni
  static update(dni) {
    return db.execute(
      `UPDATE clients 
        SET first_name = ?, last_name = ? , telephone  = ?
        WHERE clients.dni = ?`,
      [this.FirstName, this.LastName, this.Email, this.telephone, dni]
    );
  }
}
// Exportar modulo
module.exports = client;
