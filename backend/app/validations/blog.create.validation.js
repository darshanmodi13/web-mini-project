const Joi = require("joi");

module.exports = (blog) => {
  const blogSchema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    img_link: Joi.string().required(),
    category_id: Joi.string().required(),
  }).options({ abortEarly: true });
  return blogSchema.validate(blog);
};
