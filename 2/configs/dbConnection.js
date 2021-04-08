const mysql = require('mysql');

const pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'freedb.tech',
  user            : 'freedbtech_devitacantik',
  password        : 'bethebest',
  database        : 'freedbtech_mysqldevita'
});
 
module.exports = pool

