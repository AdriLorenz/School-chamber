// import sequelize 
const Sequelize = require("sequelize");

// import connection 
const db = require("../config/database.js");

const Theme = require("./theme.js");

// init DataTypes
const { DataTypes }  = Sequelize;
// Define schema
  const Topic = db.define('topics', {
    // Define attributes
    topic_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    topic_name: {
      type: DataTypes.STRING
    },
    theme_id_fk: {
      type: DataTypes.INTEGER
    }
  }, {
    // Freeze Table Name, turn of timestamps fields
    timestamps: false,
    freezeTableName: true
  });

  // Specify the relationship
  Topic.belongsTo(Theme, {
    foreignKey: 'theme_id_fk'
  });

module.exports = Topic;