const { celebrate, Joi } = require('celebrate');

module.exports = {
  createPositionValidator: celebrate({
    body: Joi.object().keys({
      name: Joi.string().required(),
      slug: Joi.string().required(),
    }),
  }),
};
