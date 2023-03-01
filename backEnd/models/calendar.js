const db = require('../util/Database');

class calendar {
    constructor(Id, consultId, userId){
        this.id = Id;
        this.consultId = consultId;
        this.userId = userId;

    }

    save(){
        return db.execute(`INSERT INTO calendar (consult_id, user_id) 
        VALUES (?, ?)`
        [ this.consultId, this.userId]
        );
    }

    static findAll(){
        return db.execute(`SELECT id, consult_id, user_id
        FROM calendar`
        );
    }

    static findById(ID){
        return db.execute(`SELECT id, consult_id, user_id, 
        FROM calendar
        WHERE calendar.id = ?`
        [ID]
        );
    }

    static deleteById(ID){
        return db.execute(`DELETE FROM calendar
        WHERE calendar.id = ?` 
        [ID]
        );
    }
    static updateById(ID){
        return db.execute(`UPDATE calendar 
        SET  consult_id = ?, user_id = ? 
        WHERE calendar.id = ?`) [this.consultId, this.userId, ID];
        
    }
}

module.exports = calendar;