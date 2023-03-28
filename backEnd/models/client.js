class client {
  //Constructor de la clase
  constructor(Id, firstName, lastName, telephone) {
    this.Id = Id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.telephone = telephone;
  }

  // Guardar nuevo paciente en la base datos
  save() {
    return db.execute(
      `INSERT INTO clients (dni, first_name, last_name, telephone) 
        VALUES (?, ?, ?, ?)`,
      [this.Id, this.firstName, this.lastName, this.telephone]
    );
  }

  // Buscar todos los pacientes
  static findAll() {
    return db.execute(`SELECT first_name, last_name, telephone
        FROM clients`);
  }
  //Buscar por ID
  static findById(ID) {
    return db.execute(
      `SELECT first_name, last_name, telephone
        FROM clients
        WHERE clients.id = ?`,
      [ID]
    );
  }
  //Eliminar por ID
  static delete(ID) {
    return db.execute(
      `DELETE FROM clients
        WHERE clients.id = ?`,
      [ID]
    );
  }
  //Actualizar por ID
  static update(ID) {
    return db.execute(
      `UPDATE clients 
        SET first_name = ?, last_name = ? , telephone  = ?
        WHERE clients.id = ?`,
      [this.FirstName, this.LastName, this.Email, this.telephone, ID]
    );
  }
}
// Exportar modulo
module.exports = client;
