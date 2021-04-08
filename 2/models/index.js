const pool = require('../configs/dbConnection')

class Log {
    // data need to instantiate when retrieved to user
    constructor(id, date_time, end_point, parameters) {
        this.id = id,
        this.date_time = date_time,
        this.end_point = end_point,
        this.parameters = parameters
    }

    static create(data) {
        return new Promise((resolve, reject) => {
            const { end_point, parameters } = data
            const date = new Date().toISOString().slice(0, 19).replace('T', ' ')
            const query = `INSERT INTO log (date_time, end_point, parameters) values ('${date}', '${end_point}', '${JSON.stringify(parameters)}')`
            
            pool.query(query, (err, data) => {
                if (err) reject(err)
                else resolve(data)
            })
        })
    }
}

module.exports = Log