const express = require("express");

const router = express.Router();

//controller
const contoller = require("../controllers/blog.controller");

//model
const Blogs = require("../models/blog.model");


router.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.get("/list", contoller.list);

router.post("/:id/create", contoller.create);

router.delete("/:id", contoller.delete);

router.put("/:id", contoller.update);

router.put("/:id/img", contoller.updateImg);

module.exports = router;
