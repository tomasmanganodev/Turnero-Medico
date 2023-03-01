const db = require('../util/Database');

class client {
    constructor(Id, FirstName, LastName, telephone){
        this.Id = Id;
        this.FirstName =FirstName;
        this.LastName = LastName;
        this.telephone = telephone;
        };
    

    save(){
        return db.execute(`INSERT INTO clients (first_name, last_name, telephone) 
        VALUES (?, ?, ?, ?)`,
        [this.FirstName, this.LastName, this.Email, this.telephone]
        )
    }; 

    static findAll(){
        return db.execute(`SELECT first_name, last_name, telephone
        FROM clients`
        );
    }

    static findById(ID){
        return db.execute(`SELECT first_name, last_name, telephone
        FROM clients
        WHERE clients.id = ?`,
        [ID]
        );
    }

    static delete(ID){
        return db.execute(`DELETE FROM clients
        WHERE clients.id = ?`,
        [ID]
        );
    }
    static update(ID){
        return db.execute(`UPDATE clients 
        SET first_name = ?, last_name = ? , telephone  = ?
        WHERE clients.id = ?`, [this.FirstName, this.LastName, this.Email, this.telephone, ID]
        ); 
    }
}

module.exports = client;