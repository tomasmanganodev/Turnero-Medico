//Importar archivo “Database”
const db = require("../util/Database");

//Clase cuyo fin es para administrar usuarios Medicos o administrativos.

module.exports = class user {
  //Constructor
  constructor(Id, FirstName, LastName, Email, Password, MedicID) {
    this.Id = Id;
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.Email = Email;
    this.Password = Password;
    this.MedicID = MedicID;
  }

  //Guardar en la base de datos
  save() {
    return db.execute(
      `INSERT INTO users (first_name, last_name, email, passwrd, id_medic)
         VALUES (?, ?, ?, ?, ?)`,
      [this.FirstName, this.LastName, this.Email, this.Password, this.MedicID]
    );
  }

  static saveByEmailAndPass(email, password) {
    return db.execute(
      `INSERT INTO users(email, passwrd)
         VALUES (?, ?)`,
      [email, password]
    );
  }

  //Buscar todos los “User” almacenados en la base de datos
  static findAll() {
    return db.execute(`SELECT first_name, last_name, email, passwrd, id_medic
         FROM users`);
  }

  //Buscar todos los usuarios medicos guardados en la base de datos
  static async findAllMedics() {
    try {
      const result = await db.execute(
        `SELECT id ,first_name, last_name, email, id_medic
        FROM users
        WHERE id_medic != 0`
          );
      return result[0];
    } catch (error) {
      throw new Error('Error al buscar los medicos solicitados');
  }
  }
  //Buscar por ID
  static findById(ID) {
    return db.execute(
      `SELECT first_name, last_name, email, passwrd,    id_medic
         FROM users
         WHERE users.id = ?`,
      [ID]
    );
  }
  //Buscar por email
  static findByEmail(email) {
    return db.execute(
      `SELECT email, passwrd, id
        FROM users
        WHERE email = ?`,
      [email]
    );
  }
  //Eliminar por ID
  static delete(ID) {
    return db.execute(
      `DELETE FROM users
         WHERE users.id = ?`,
      [ID]
    );
  }
  //Actualizar por ID
  static update(ID) {
    return db.execute(
      `UPDATE users 
         SET first_name = ?, 
         last_name = ?,
         email = ?,
         passwrd = ?,
         id_medic = ? 
         WHERE users.id = ?`,
      [
        this.FirstName,
        this.LastName,
        this.Email,
        this.Password,
        this.MedicID,
        ID,
      ]
    );
  }
};
