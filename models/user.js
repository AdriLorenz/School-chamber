// import sequelize 
const Sequelize = require("sequelize");

// import connection 
const db = require("../config/database.js");

const Classroom = require("./classroom.js")

const Role = require("./role.js");
 
// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema
const User = db.define('users', {
  // Define attributes
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  user_name: {
    type: DataTypes.STRING
  },
  user_email: {
    type: DataTypes.STRING
  },
  user_password: {
    type: DataTypes.STRING
  },
  user_score: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  user_games_played: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  classroom_id_fk: {
    type: DataTypes.INTEGER
  },
  role_id_fk: {
    type: DataTypes.INTEGER
  }
},{
  // Freeze Table Name, turn of timestamps fields
  timestamps: false,
  freezeTableName: true
});
 
// Specify the relationship
User.belongsTo(Role, {
  foreignKey: 'role_id_fk'
});
User.belongsTo(Classroom, {
  foreignKey: 'classroom_id_fk'
});

// Export model User
module.exports = User;