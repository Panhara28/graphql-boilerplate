// Update with your config settings.

module.exports = {
  client: 'mysql2',
  connection: {
    database: 'l192',
    user:     'root',
    password: '123123'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    extension: "ts" 
  }
};
