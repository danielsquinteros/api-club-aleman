/* eslint-disable camelcase */
const { Contact } = require('../models');

module.exports = {
  create: async (req, res) => {
    const {
      email,
      first_name,
      last_name,
      phone,
      country,
      city,
      address,
    } = req.body;
    const contact = new Contact({
      email,
      first_name,
      last_name,
      phone,
      country,
      city,
      address,
    });
    try {
      // Guardar en BD
      await contact.save();
      res.status(200).send(contact);
    } catch (error) {
      res.status(409).send(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const contacts = await Contact.find({ status: true });
      res.status(200).send(contacts);
    } catch (error) {
      res.status(409).send(error);
    }
  },
};
