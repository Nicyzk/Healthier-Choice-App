const Pool = require('pg').Pool;
const pool = new Pool({

    connectionString: "postgres://exifkgpxsanzwg:6824cb3b650e4b462ca3c775bfd6999dc35073f52d3003e84496124c69cb178d@ec2-52-0-142-65.compute-1.amazonaws.com:5432/dfot518tiupm30",
    ssl: {
        rejectUnauthorized: false
    }
})

module.exports = pool;