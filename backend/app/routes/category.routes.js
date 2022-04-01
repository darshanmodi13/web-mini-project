const express = require("express");

const router = express.Router();
//controller
const controller = require("../controllers/category.controller");

router.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.get("/list", controller.list);

module.exports = router;
