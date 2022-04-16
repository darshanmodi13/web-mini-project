const fs = require("fs");
const mongoose = require("mongoose");
const path = require("path");
const responses = require("../utils/responses");

const User = require("../models/user.model");
const Blog = require("../models/blog.model");

//validation
const createBlogValidation = require("../validations/blog.create.validation");
const updateBlogValidation = require("../validations/update.blog.validation");

const response = require("../utils/responses");

exports.create = async (req, res) => {
  try {
    if (!req.params.id) {
      return responses.unauthorizedResponse(res, "Not valid user.");
    }
    let user = await User.findById(mongoose.Types.ObjectId(req.params.id));

    if (!user) {
      return responses.unauthorizedResponse(res, "Not valid user.");
    }
    let validate = await createBlogValidation(req.body);
    if (validate.error) {
      return responses.badRequestResponse(
        res,
        validate.error.details[0].message
      );
    }
    let new_blog = await Blog(req.body);

    try {
      const img_link_buffer = Buffer.from(req.body.img_link, "base64");
      if (img_link_buffer.length / 1024 / 1024 > 5) {
        return response.badRequestResponse(
          res,
          "File size must be lesser than 5 MB"
        );
      }
      new_blog.img_link = `${process.env.SERVER}/public/${new_blog._id}.jpg`;
      fs.writeFile(
        path.join(__dirname, `../public/${new_blog._id}.jpg`),
        img_link_buffer,
        "base64",
        (err) => {
          console.log(err);
        }
      );
    } catch (err) {
      console.log(err);
      return response.serverErrorResponse(res, "Error while uploading blog.");
    }
    new_blog.category_id = mongoose.Types.ObjectId(req.body.category_id);
    new_blog.user_id = mongoose.Types.ObjectId(req.params.id);
    new_blog.save();
    return responses.successfullyCreatedResponse(
      res,
      new_blog,
      "new blog created."
    );
  } catch (error) {
    return responses.serverErrorResponse(res);
  }
};

exports.list = async (req, res) => {
  try {
    let blogs = await Blog.find().populate("category_id");
    if (!blogs) {
      return response.notFoundResponse(res);
    }
    return response.successResponse(res, blogs);
  } catch (error) {
    console.log(error);
    return response.serverErrorResponse(res);
  }
};

exports.delete = async (req, res) => {
  try {
    let blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      return responses.badRequestResponse(
        res,
        {},
        "Error while deleting blog.."
      );
    }
    return responses.successResponse(res, blog, "deleted succesfully.");
  } catch (error) {
    return response.serverErrorResponse(res);
  }
};

exports.update = async (req, res) => {
  try {
    if (!req.params.id) {
      return responses.unauthorizedResponse(res, "Not valid user.");
    }

    let validate = await updateBlogValidation(req.body);
    if (validate.error) {
      return responses.badRequestResponse(
        res,
        validate.error.details[0].message
      );
    }
    try {
      const img_link_buffer = Buffer.from(req.body.img_link, "base64");
      if (img_link_buffer.length / 1024 / 1024 > 5) {
        return responses.badRequestResponse(
          res,
          "File size must be lesser than 5 MB"
        );
      }
      req.body.img_link = `${process.env.SERVER}/public/${req.params.id}.jpg`;
      fs.writeFile(
        path.join(__dirname, `../public/${req.params.id}.jpg`),
        img_link_buffer,
        (err) => {
          // console.log(err);
        }
      );
    } catch (err) {
      return responses.serverErrorResponse(
        res,
        "Error while updating blog image."
      );
    }
    let update_blog = await Blog.findByIdAndUpdate(req.params.id, req.body);
    if (!update_blog) {
      return responses.badRequestResponse(
        res,
        {},
        "Error while updating blog.."
      );
    }
    return responses.successfullyCreatedResponse(
      res,
      update_blog,
      "blog updated."
    );
  } catch (error) {
    console.log(error);
    return responses.serverErrorResponse(res);
  }
};

exports.updateImg = async (req, res) => {
  try {
    let blog = await Blog.findById(req.params.id);
    if (!blog) {
      return responses.badRequestResponse(res, {}, "Blog not found..");
    }
    if (!req.body.img_link) {
      return responses.badRequestResponse(res, {}, "Provide base64..");
    }

    blog.save();
    return responses.successResponse(res, blog, "Blog Updated...");
  } catch (error) {
    console.log(error);
    return responses.serverErrorResponse(res);
  }
};

exports.getSingleBlog = async (req, res) => {
  try {
    if (!req.params.id)
      return responses.badRequestResponse(res, { error: "Provid Blog ID" });
    let blog = await Blog.findById(req.params.id).populate("category_id");
    if (!blog) return responses.notFoundResponse(res, "Blog Not Found..");
    return responses.successResponse(res, blog, "Blog Found..");
  } catch (error) {
    console.log(error);
    return responses.serverErrorResponse(res);
  }
};

exports.getBlogsByCategory = async (req, res) => {
  try {
    if (!req.params.category_id)
      return responses.badRequestResponse(res, {
        error: "Provide category ID",
      });
    let blog = await Blog.find({
      category_id: req.params.category_id,
    }).populate("category_id");
    if (!blog) return responses.notFoundResponse(res, "Blog Not Found..");
    return responses.successResponse(res, blog, "Blog Found..");
  } catch (error) {
    console.log(error);
    return responses.serverErrorResponse(res);
  }
};
