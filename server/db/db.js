const Sequelize = require('sequelize')
const pkg = require('../../package.json')
const {user, pass} = require('../../secrets.js');
//import {user, pass} from '../../../secrets.js

const databaseName = pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '')

const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://${user}:${pass}@localhost:5432/${databaseName}`,
  {
    logging: false
  }
)
module.exports = db
