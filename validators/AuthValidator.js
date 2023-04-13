const { celebrate, Joi } = require('celebrate');

module.exports = {
  AuthValidator: celebrate({
    body: Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    }),
  }),
};
