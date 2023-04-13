const { Position } = require('../models');

module.exports = {
  create: async (req, res) => {
    const { name, slug } = req.body;
    const position = new Position({ name, slug });
    try {
      // Guardar en BD
      await position.save();
      res.status(200).send(position);
    } catch (error) {
      res.status(409).send(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const positions = await Position.find();
      res.status(200).send(positions);
    } catch (error) {
      res.status(409).send(error);
    }
  },
};
