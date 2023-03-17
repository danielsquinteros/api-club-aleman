const bcryptjs = require('bcryptjs');
const { generateJWT } = require('../helpers/generate-access-token');
const { User } = require('../models');

module.exports = {
  login: async (req, res) => {
    const { email, password } = req.body;
    try {
    // Verification if email exist
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).send({
          message: 'El usuario no existe en nuestra base de datos',
        });
      }
      // The user is active
      if (!user.status) {
        return res.status(400).send({
          message: 'Usuario bloqueado, contáctate con el administrador',
        });
      }
      // Verification the password
      const validPassword = bcryptjs.compareSync(password, user.password);
      if (!validPassword) {
        return res.status(400).send({
          msg: 'The User / Password are not correct - password',
        });
      }
      // Generate JWT
      const token = await generateJWT(user.id, user.role);

      return res.status(200).send({ accessToken: token });
    } catch (error) {
      console.log(error);
      return res.status(404).send({
        message: 'Ocurrio un error, contáctate con el administrador',
      });
    }
  },
};
