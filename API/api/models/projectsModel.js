const { sequelize } = require("../../database");
const { DataTypes } = require("sequelize");

const ProjectsModel = sequelize.define(
  "projects",
  {
    projectName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dataCreate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  { timestamps: false }
);

module.exports = ProjectsModel;
