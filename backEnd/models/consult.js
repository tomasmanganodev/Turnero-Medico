const db = require('../util/Database');

class Consult {
    constructor(id, idClient, idUser, dateConsult, startHour, endHour) {
        this.id = id;
        this.idClient = idClient;
        this.idUser = idUser;
        this.dateConsult = dateConsult;
        this.startHour = startHour;
        this.endHour = endHour;
    }

    // Guardar nueva consulta en la base de datos
    async save() {
        try {
            const result = await db.execute(
                `INSERT INTO consults (id_client, id_user, dateConsult, star_hour, end_hour) VALUES (?, ?, ?, ?, ?)`,
                [this.idClient, this.idUser, this.dateConsult, this.startHour, this.endHour]
            );
            return result[0].insertId; // Devuelve el ID del registro insertado
        } catch (error) {
            throw new Error(error);
        }
    }

    // Buscar todas las consultas
    static async findAll() {
        try {
            const result = await db.execute(`SELECT id, id_client, id_user, dateConsult, star_hour, end_hour FROM consults`);
            return result[0];
        } catch (error) {
            throw new Error('Error al buscar todas las consultas en la base de datos');
        }
    }

    static async getWeek(startDate, endDate, userId) {
        try {
            const result = await db.execute(`
                SELECT id, id_client, id_user, dateConsult, star_hour, end_hour 
                FROM consults 
                WHERE dateConsult BETWEEN ? AND ? AND id_user = ?
            `, [startDate, endDate, userId]);
            return result[0];
        } catch (error) {
            throw new Error('Error al buscar las consultas en la base de datos para la semana especificada');
        }
    }

    static async pag(start, end) {
        try {
            const result = await db.execute(`SELECT id, id_client, id_user, dateConsult, 
            star_hour, end_hour FROM consults 
            LIMIT ?, ?`, [start.toString(), end.toString()]);
            return result[0];
        } catch (error) {
            throw new Error('Error al buscar todas las consultas en la base de datos');
        }
    }


    // Buscar consulta por ID
    static async findById(id) {
        try {
            const result = await db.execute(`SELECT id, id_client, id_user, dateConsult, star_hour, end_hour FROM consults WHERE id = ?`, [id]);
            return result[0]; // Devuelve el primer resultado
        } catch (error) {
            throw new Error('Error al buscar la consulta por ID en la base de datos');
        }
    }

    // Eliminar consulta por ID
    static async deleteById(id) {
        try {
            await db.execute(`DELETE FROM consults WHERE id = ?`, [id]);
        } catch (error) {
            throw new Error('Error al eliminar la consulta por ID en la base de datos');
        }
    }

    // Actualizar consulta por ID
    static async updateById(id, dateConsult, startHour, endHour) {
        try {
            await db.execute(`UPDATE consults SET dateConsult = ?, star_hour = ?, end_hour = ? WHERE id = ?`, 
            [ dateConsult, startHour, endHour, id]);
        } catch (error) {
            throw new Error('Error al actualizar la consulta por ID en la base de datos: ${error}');
        }
    }
}

module.exports = Consult;