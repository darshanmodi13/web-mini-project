const express = require("express");

const router = express.Router();
//models
const User = require("../models/user.model");

//controller
const controller = require("../controllers/user.controller");

router.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.get("/", controller.testRequest);

router.post("/register", controller.register);

router.post("/:id/signin", controller.signin);

module.exports = router;
