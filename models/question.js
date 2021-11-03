// import sequelize 
const Sequelize = require("sequelize");

// import connection 
const db = require("../config/database.js");
const User = require("./user.js");
const Theme = require("./theme.js");

// init DataTypes
const { DataTypes }  = Sequelize;
// Define schema
  const Question = db.define('questions', {
    // Define attributes
    question_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    question_content: {
      type: DataTypes.STRING
    },
    user_id_fk: {
      type: DataTypes.INTEGER
    },
    theme_id_fk: {
      type: DataTypes.INTEGER
    }
  }, {
    // Freeze Table Name, turn of timestamps fields
    timestamps: false,
    freezeTableName: true
  });

  // Specify the relationships
  Question.belongsTo(User, {
    foreignKey: 'user_id_fk'
  });

  Question.belongsTo(Theme, {
    foreignKey: 'theme_id_fk'
  });

module.exports = Question;
