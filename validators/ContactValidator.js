const { celebrate, Joi } = require('celebrate');

module.exports = {
  createContactValidator: celebrate({
    body: Joi.object().keys({
      email: Joi.string().required(),
      first_name: Joi.string().required(),
      last_name: Joi.string().required(),
      phone: Joi.string(),
      country: Joi.string(),
      city: Joi.string(),
      address: Joi.string(),
    }),
  }),
};
