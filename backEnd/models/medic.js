//Importar archivo “Database”

const db = require('../util/Database');

//Clase cuyo fin establecer el tipo de médicos en la base de datos
 
module.exports = class medic {
    //Constructor de la clase medic	   
    constructor(Id, specialization){
        this.id = Id;
        this.specialization = specialization;
    }
    
    //Guardar en la base de datos
    save(){
        return db.execute(`INSERT INTO medics (specialization) 
        VALUES (?)`,
        [this.specialization]
        );
    }
    //Buscar todos los tipos de medicos guardados en la base de datos	
    static findAll(){
        return db.execute(`SELECT id, specialization
        FROM medics`);
    }
    //Buscar un tipo de especialización por ID
    static findById(ID){
        return db.execute(`SELECT id, specialization
        FROM medics
        WHERE medics.id = ?`,
        [ID]
        );
    }
    //Eliminar por ID
    static deleteById(ID){
        return db.execute(`DELETE FROM medics
        WHERE medics.id = ?` ,
        [ID]
        );
    }
    
    // Actualizar por ID
    static updateById(ID){
        return db.execute(`UPDATE medics 
        SET specialization = ?
        WHERE medics.id = ?`, [this.specialization, ID]);
        
    }
};


