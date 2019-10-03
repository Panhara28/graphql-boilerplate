module.exports = {
  mysql: {
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'littlefashion',
    connectionLimit: 10
  },
  elastic: { node: 'http://128.199.154.16:9200' },
  port: 3000,
  production: false,
}