
const db = require('../util/Database');

class consult{

    constructor(Id, dateC, idClient, idUser){
        this.id = Id;
        this.dateC = dateC;
        this.idClient = idClient;
        this.idUser = idUser;
        this.idCalendar = idCalendar;
    }

    save(){
        return db.execute(`INSERT INTO consults (dateConsult, id_client, id_user), 
        VALUES (?, ?, ?)`
        [this.dateC, this.idClient, this.idUser, this.idCalendar]
        );
    }

    static findAll(){
        return db.execute(`SELECT id, dateConsult, id_client, id_user
        FROM consults`
        );
    }

    static findById(ID){
        return db.execute(`SELECT id, dateConsult, id_client, id_user
        FROM consults
        WHERE consults.id = ?`,
        [ID]
        );
    }

    static deleteById(ID){
        return db.execute(`DELETE FROM consults
        WHERE consults.id = ?`, 
        [ID]
        );
    }
    static updateById(ID){
        return db.execute(`UPDATE consults 
        SET dateConsult = ?, id_client = ?, id_user = ?
        WHERE consults.id = ?`, [this.dateC, this.idClient, this.idUser, ID]);
     
    }
};


module.exports = consult;