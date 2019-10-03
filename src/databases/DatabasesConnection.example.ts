const mysql = require("mysql2/promise")

export const conn = mysql.createPool({
  host: "localhost",
  user: "username",
  password: "password",
  database: "dbname"
})
