const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  `${process.env.DIALECT}://${process.env.USERNAME}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.DB_PORT}/${process.env.DATABASE}`,
  {
    logging: false,
  }
);

async function checkConnection() {
  try {
    await sequelize.authenticate();
    console.log("connection to DB is successfuly");
  } catch (error) {
    throw error;
  }
}

async function syncModels() {
  try {
    await sequelize.sync({ alter: true });
    console.log("models synchronized");
  } catch (error) {
    throw error;
  }
}

module.exports = {
  sequelize,
  checkConnection,
  syncModels,
};
