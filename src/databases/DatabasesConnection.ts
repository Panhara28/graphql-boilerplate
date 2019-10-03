const mysql = require("mysql2/promise")

export const conn = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123123",
  database: "northwind"
})
