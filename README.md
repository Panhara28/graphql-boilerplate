# Graphql Boilerplate

This is the graphql boilerplate that I already setup for running graphql apollo. So to getting start with that please read the following setup below.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

A step by step series of examples that tell you how to get a development env running

After you clone my project you need to go to my project and run command below

```
yarn install
```

After you run yarn install successfully you need to run yarn dev for getting start the server up

```
yarn dev
```

## Setup Setting
create file call setting.ts in src/ and then copy and paste the code below or copy from the src/setting.example.ts
after that config database connection and your port to run the server.

```js
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
```

## Setup Database Connection

create file call DatabasesConnection.ts and copy and paste the code below or copy from the src/databases/DatabasesConnection.example.ts
after that config your local database.

```js
const mysql = require("mysql2/promise")

export const conn = mysql.createPool({
  host: "localhost",
  user: "username",
  password: "password",
  database: "dbname"
})

```

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
