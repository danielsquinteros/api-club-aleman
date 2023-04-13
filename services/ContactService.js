const { Contact } = require('../models');

module.exports = {
  getAll: Contact.aggregate([
    {
      $unset: ['password'],
    },
  ]),
};
