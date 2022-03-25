const express = require("express");

const router = express.Router();

//model
const Category = require("../models/category.model");
const response = require("../utils/responses");

router.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.get("/list", async (req, res) => {
  try {
    let category = await Category.find();
    if (!category) {
      return response.notFoundResponse(res);
    }
    return response.successResponse(res, category);
  } catch (error) {
    console.log(error);
    return response.serverErrorResponse(res);
  }
});

module.exports = router;
