const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(

    // // Right way-------
    // "test",
    // "root",
    // "",
    // {
    //     host: "localhost",
    //     dialect: "mysql",

    //     pool: {
    //         max: 5,
    //         min: 0,
    //         acquire: 30000,
    //         idle: 10000
    //     }
    // }

    // // Wrong Way------
    // DB: "test",
    // user: "root",
    // password: "",
    // {
    //     host: "localhost",
    //     dialect: "mysql",

    //     pool: {
    //         max: 5,
    //         min: 0,
    //         acquire: 30000,
    //         idle: 10000
    //     }
    // }

    process.env.DB_DATABASE,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: "mysql",

        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
    }
)

const db = {};
db.DataTypes = DataTypes;
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.model = require('../config/model.config')(sequelize, DataTypes);

module.exports = db;