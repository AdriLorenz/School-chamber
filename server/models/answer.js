// import sequelize 
const Sequelize = require("sequelize");

// import connection 
const db = require("../config/database.js");
const Question = require("./question.js");

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Answer = db.define('answers', {
  // Define attributes
  answer_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  answer_content: {
    type: DataTypes.STRING
  },
  answer_points: {
    type: DataTypes.INTEGER
  },
  question_id_fk: {
    type: DataTypes.INTEGER
  }
}, {
  // Freeze Table Name, turn of timestamps fields
  timestamps: false,
  freezeTableName: true
});

Answer.belongsTo(Question, {
  foreignKey: 'question_id_fk'
});

// Export model Question
module.exports = Answer;