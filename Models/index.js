const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize('discover', 'postgres', 'Password', {
    host: 'localhost',
    port: 5432, // Default PostgreSQL port is 5432, but you mentioned 5433.
    dialect: 'postgres',
  });
  

sequelize.authenticate().then(()=>{
    console.log(`Database conneced to discover`);

}).catch((err)=>{
    console.log(err);
})

const db = {}
    db.Sequelize = Sequelize
    db.sequelize = sequelize

    //connecting to model
db.users = require('./userModel') (sequelize, DataTypes)

//exporting the module
module.exports = db