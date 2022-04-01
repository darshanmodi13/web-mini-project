const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
//database
const User = require("../models/user.model");

//responses
const responses = require("../utils/responses");

const validation = require("../validations/register.validation");

exports.testRequest = (req, res) => {
  return responses.successResponse(res, "Route Called.");
};

exports.register = async (req, res) => {
  try {
    let validate = await validation(req.body);

    if (validate.error) {
      return responses.badRequestResponse(
        res,
        validate.error.details[0].message
      );
    }

    let user = await User.findOne({
      $or: [
        {
          mobile: req.body.mobile,
        },
        {
          email: req.body.email,
        },
      ],
    });
    console.log(user);
    if (user) {
      return responses.badRequestResponse(res, { err: "user Already exists." });
    }
    const salt = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(req.body.password, salt);
    req.body.password = hash_password;

    let new_user = await User.create(req.body);
    if (!new_user) {
      return responses.serverErrorResponse(res, "Error while creating user.");
    }
    return responses.successfullyCreatedResponse(res, new_user);
  } catch (error) {
    console.log(error);
    return responses.serverErrorResponse(res);
  }
};

exports.signin = async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      return responses.badRequestResponse(res, {}, "Invalid Credentials..");
    }

    let user = await User.findById(req.params.id);
    if (!user) {
      return responses.unauthorizedResponse(res, {}, "User not found.");
    }

    let is_matched = await bcrypt.compareSync(req.body.password, user.password);
    if (!is_matched) {
      return responses.unauthorizedResponse(
        res,
        {},
        "Invalid Credententaials.."
      );
    }

    let token = await jwt.sign({ id: user._id }, process.env.SECRET, {
      expiresIn: "30d",
    });
    let { password, ...user_details } = user._doc;

    return responses.successResponse(
      res,
      { ...user_details, token },
      "Signin successful.."
    );
  } catch (error) {
    console.log(error);
    return responses.serverErrorResponse(res);
  }
};
