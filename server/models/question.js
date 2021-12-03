// import sequelize 
const Sequelize = require("sequelize");

// import connection 
const db = require("../config/database.js");
const User = require("./user.js");
const Topic = require("./topic.js");

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
    topic_id_fk: {
      type: DataTypes.INTEGER
    }
  }, {
    // Freeze Table Name, turn of timestamps fields
    timestamps: false,
    freezeTableName: true
  });

  // Specify the relationship
  Question.belongsTo(Topic, {
    foreignKey: 'topic_id_fk'
  });

module.exports = Question;
