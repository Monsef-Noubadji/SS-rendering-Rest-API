const db = require("mysql");
const conn = db.createConnection({
  host: process.env.HOST,
  user: process.env.USER ,
  password: process.env.PASSKEY,
  database: process.env.DB
});

conn.connect();

module.exports = conn;
