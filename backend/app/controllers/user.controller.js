//database
const User = require("../models/user.model");
const bcrypt = require("bcryptjs")
//responses
const responses = require("../utils/responses");

const validation = require("../validations/register.validation")

exports.testRequest = (req, res) => {
  return responses.successResponse(res, "Route Called.");
};

exports.register =async (req, res) => {
  try {
    let validate = await validation(req.body);

    if (validate.error) {
      return response.badRequestResponse(
        res,
        validate.error.details[0].message
      );
    }

    let user =await User.findOne({
      $or: [
        {
          mobile: req.body.mobile
        }, {
          email: req.body.email
        }
      ]
    })
    console.log(user)
    if (user) {
      return responses.badRequestResponse(res, { err: "user Already exists." })
    }
    const salt = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(req.body.password, salt);
    req.body.password = hash_password

    let new_user = await User.create(req.body)
    if (!new_user) {
      return responses.serverErrorResponse(res, "Error while creating user.")
    }
    return responses.successfullyCreatedResponse(res, new_user)
  } catch (error) {
    console.log(error)
    return responses.serverErrorResponse(res)
  }
};