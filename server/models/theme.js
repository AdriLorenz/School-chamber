// import sequelize 
const Sequelize = require("sequelize");

// import connection 
const db = require("../config/database.js");
 
// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema
const Theme = db.define('themes', {
  // Define attributes
  theme_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  theme_name: {
    type: DataTypes.STRING
  }
},{
  // Freeze Table Name, turn of timestamps fields
  timestamps: false,
  freezeTableName: true
});
 
// Export model Theme
module.exports = Theme;