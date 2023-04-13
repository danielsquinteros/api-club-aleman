const { celebrate, Joi } = require('celebrate');

const { ENUM_ROLES } = require('../utils/const');

module.exports = {
  createUserValidator: celebrate({
    body: Joi.object().keys({
      email: Joi.string().required(),
      password: Joi.string().min(4).required(),
      role: Joi.string().valid(ENUM_ROLES).required(),
    }),
  }),
};
