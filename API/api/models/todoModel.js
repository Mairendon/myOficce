const { sequelize } = require("../../database");
const { DataTypes } = require("sequelize");

const TodoModel = sequelize.define(
  "todos",
  {
    todoName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dataCreate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    FinalDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = TodoModel;
