const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserModel = require("../models/userModel");

async function signup(req, res) {
  try {
    req.body.password = bcrypt.hashSync(req.body.password, 10);

    const user = await UserModel.create(req.body, {
      fields: ["userName", "email", "password", "phone"],
    });

    const payload = { id: user.id, email: user.email, userName: user.userName };
    const token = jwt.sign(payload, process.env.SECRET, { expiresIn: "1h" });
    return res.status(200).json({ token: token });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function login(req, res) {
  try {
    const user = await UserModel.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!user) {
      return res.status(401).send("email or password incorrect");
    }
    bcrypt.compare(req.body.password, user.password, (err, result) => {
      if (err) return res.status(500).send(err);

      if (!result) return res.status(401).send("email or password are worng");

      const payload = {
        id: user.id,
        email: user.email,
        userName: user.userName,
      };
      const token = jwt.sign(payload, process.env.SECRET, { expiresIn: "1h" });

      return res.status(200).json({ token: token, userName: user.userName });
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
  login,
  signup,
};
