const bcryptjs = require('bcryptjs');

const { User } = require('../models');

module.exports = {
  create: async (req, res) => {
    const {
      email, password, role,
    } = req.body;
    const user = new User({
      email, password, role,
    });

    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt);

    try {
      // Guardar en BD
      await user.save();
      res.status(200).send(user);
    } catch (error) {
      res.status(409).send(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const users = await User.find({ status: true }, 'password');
      res.status(200).send(users);
    } catch (error) {
      res.status(409).send(error);
    }
  },
};
