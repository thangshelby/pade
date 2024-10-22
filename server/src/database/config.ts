const sql = require("mssql");
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  user: process.env.DB_USER ,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  server:  process.env.DB_SERVER,
  options: {
    trustedConnection: true,
    trustServerCertificate: true,
    enableArithAbort: true,
  },
  port: 1433,
};



