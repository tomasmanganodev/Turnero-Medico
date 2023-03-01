const db = require('../util/Database');

module.exports = class user {

    constructor(Id, FirstName, LastName, Email, Password, MedicID){
         this.Id = Id;
         this.FirstName =FirstName;
         this.LastName = LastName;
         this.Email = Email;
         this.Password = Password;
         this.MedicID = MedicID;
     
         };
     
 
     save(){
         return db.execute(`INSERT INTO users (first_name, last_name, email, passwrd, medic_id) 
         VALUES (?, ?, ?, ?, ?)`,
         [this.FirstName, this.LastName, this.Email, this.Password, this.MedicID]
         )
     }; 
 /*
     static findAll(){
         return db.execute(`SELECT first_name, last_name, email, passwrd, medic_id
         FROM users`
         );
     }
 
     static findById(ID){
         return db.execute(`SELECT first_name, last_name, email, passwrd, medic_id
         FROM users
         WHERE users.id = ?`,
         [ID]
         );
     }
 
     static delete(ID){
         return db.execute(`DELETE FROM users
         WHERE users.id = ?` ,
         [ID]
         );
     }
     static update(ID){
         return db.execute(`UPDATE users 
         SET first_name = ?, 
         last_name = ?,
         email = ?,
         passwrd = ?,
         medic_id = ? 
         WHERE users.id = ?`, [this.FirstName, this.LastName, this.Email, this.Password, this.MedicID, ID]);
         
     } */
 };

