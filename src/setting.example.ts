module.exports = {
  mysql: {
    host: 'localhost',
    user: 'username',
    password: 'password',
    database: 'databasename',
    connectionLimit: 10
  },
  elastic: { node: 'http://128.199.154.16:9200' },
  port: 3000,
  production: false,
}