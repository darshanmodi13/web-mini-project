const Category = require("../models/category.model");
const response = require("../utils/responses");

exports.list = async (req, res) => {
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
};
