// import sequelize 
const Sequelize = require("sequelize");

// import connection 
const db = require("../config/database.js");

// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema
const Classroom = db.define('classrooms', {
  // Define attributes
  classroom_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  classroom_name: {
    type: DataTypes.STRING
  }
},{
  // Freeze Table Name, turn of timestamps fields
  timestamps: false,
  freezeTableName: true
});

// Export model User
module.exports = Classroom;