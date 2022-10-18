const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "hcsapp",
    password: "",
    port: 5433,
})

module.exports = pool;