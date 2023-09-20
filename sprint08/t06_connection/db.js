const sql = require('mysql2');
const config = require('./config.json');

module.exports = connection = sql.createPool(config).promise();
