const joi = require("joi");

const email_regex =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

module.exports = (user) => {
  const createUserSchema = joi
    .object({
      name: joi.string().required(),
      password: joi.string().required(),
      email: joi.string().custom((val, helper) => {
        if (email_regex.test(val)) {
          return true;
        }
        return helper.message("Enter Valid Email ID");
      }),
      mobile:joi.string().required()
    })
    .options({ abortEarly: true });
  return createUserSchema.validate(user);
};