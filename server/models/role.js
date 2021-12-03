// import sequelize 
const Sequelize = require("sequelize");

// import connection 
const db = require("../config/database.js");
 
// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema
const Role = db.define('roles', {
  // Define attributes
  role_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  role_name: {
    type: DataTypes.STRING
  }
},{
  // Freeze Table Name, turn of timestamps fields
  timestamps: false,
  freezeTableName: true
});
 
// Export model Role
module.exports = Role;