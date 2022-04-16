const express = require("express");

const router = express.Router();

//controller
const controller = require("../controllers/blog.controller");

//model
const Blogs = require("../models/blog.model");

router.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.get("/list", controller.list);

router.get("/category/:category_id", controller.getBlogsByCategory);

router.get("/:id", controller.getSingleBlog);

router.post("/:id/create", controller.create);

router.delete("/:id", controller.delete);

router.put("/:id", controller.update);

router.put("/:id/img", controller.updateImg);

module.exports = router;
