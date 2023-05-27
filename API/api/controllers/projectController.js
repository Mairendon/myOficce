const ProjectsModel = require("../models/projectsModel");
const UserModel = require("../models/userModel");

const jwt = require("jsonwebtoken");

async function getAllProjects(req, res) {
  try {
    const project = await ProjectsModel.findAll({
      where: req.query,
      attributes: ["projectName", "description"],
    });

    if (!project) {
      return res.status(404).send("project not found");
    }
    return res.status(200).json(project);
  } catch (error) {
    res.status(500).send(error.mesage);
  }
}

// async function createProject(req, res) {
//   try {
//     const token = req.headers.token;
//     if (!token) {
//       return res.status(403).send("user not authorizeed");
//     }
//     const decodedToken = jwt.verify(token, process.env.SECRET);

//     const userId = decodedToken.id;

//     const user = await UserModel.findByPk(userId);
//     if (!user) {
//       return res.status(404).send("user not found");
//     }

//     const project = await user.createProject(req.body);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// }
module.exports = {
  getAllProjects,
};
