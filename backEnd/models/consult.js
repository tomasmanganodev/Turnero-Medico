//Importar archivo “Database”
const db = require('../util/Database');

// Clase para administrar los turnos
class consult{

    //Constructor de la clase paciente
    constructor(Id, dateC, idClient, idUser){
        this.id = Id;
        this.dateC = dateC;
        this.idClient = idClient;
        this.idUser = idUser;
       
    }
    
    //Guardar nueva consulta en la base de datos
    save(){
        return db.execute(`INSERT INTO consults ( id_client, id_user, dateConsult) 
        VALUES (?, ?, ?)`,
        [ this.idClient, this.idUser, this.dateC]
        );
    }

    // Buscar todas las consultas
    static findAll(){
        return db.execute(`SELECT id, dateConsult, id_client, id_user
        FROM consults`
        );
    }
    //Buscar por ID
    static findById(ID){
        return db.execute(`SELECT id, dateConsult, id_client, id_user
        FROM consults
        WHERE consults.id = ?`,
        [ID]
        );
    }
    //Eliminar por ID
    static deleteById(ID){
        return db.execute(`DELETE FROM consults
        WHERE consults.id = ?`, 
        [ID]
        );
    }
    //Actualizar por ID
    static updateById(ID){
        return db.execute(`UPDATE consults 
        SET dateConsult = ?, id_client = ?, id_user = ?
        WHERE consults.id = ?`, [this.dateC, this.idClient, this.idUser, ID]);
     
    }
};

//Exportar modulo
module.exports = consult;

