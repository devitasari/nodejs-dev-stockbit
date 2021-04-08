const pool = require('./dbConnection')

let tableLog = `
    CREATE TABLE log (
        id SERIAL PRIMARY KEY,
        date_time DATETIME NOT NULL,
        end_point TEXT NOT NULL,
        parameters JSON
    )
`

pool.query(tableLog, function (error, results, fields) {
    if (error) throw error;
    console.log(`create table LOG succes. Message: `, results);
  });