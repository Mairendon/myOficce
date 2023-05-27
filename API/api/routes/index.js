const router = require("express").Router();

const authRouter = require("./aunthRouter.js");

router.use("/auth", authRouter);

module.exports = router;
