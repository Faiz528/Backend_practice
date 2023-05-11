var sql = require('mysql2')

var pool = sql.createPool({
    host: "localhost",
    user: "root",
    database : "node-complete",
    password: "Gate@2022"
  });

  module.exports = pool.promise()