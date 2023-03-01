const db = require('../util/Database');

module.exports = class medic {
    
    
    constructor(Id, specialization){
        this.id = Id;
        this.specialization = specialization;
    }

    save(){
        return db.execute(`INSERT INTO medics (specialization) 
        VALUES (?)`,
        [this.specialization]
        );
    }

    static findAll(){
        return db.execute(`SELECT id, specialization
        FROM medics`);
    }

    static findById(ID){
        return db.execute(`SELECT id, specialization
        FROM medics
        WHERE medics.id = ?`,
        [ID]
        );
    }

    static deleteById(ID){
        return db.execute(`DELETE FROM medics
        WHERE medics.id = ?` ,
        [ID]
        );
    }
    static updateById(ID){
        return db.execute(`UPDATE medics 
        SET specialization = ?
        WHERE medics.id = ?`, [this.specialization, ID]);
        
    }
};



