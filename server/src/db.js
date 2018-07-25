const monk = require('monk');
const db = monk(process.env.DATABASE_URL);

module.exports = db;