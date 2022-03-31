const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');
const ApiError = require('../error/ApiError');
const { User } = require('../models/models');

const generateJwt = (id, email) => {
  return JWT.sign({ id, email }, process.env.SECRET_KEY, {
    expiresIn: '24h'
  });
};

class UserController {
  async registration(req, res, next) {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(ApiError.badRequest('Invalid email or password'));
    }
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      return next(ApiError.badRequest('User with this email already exists'));
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({ email, password: hashPassword });
    const token = generateJwt(user.id, user.email);
    return res.json({ token });
  }

  async login(req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) return next(ApiError.forbidden('User does not exist'));

    let comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) return next(ApiError.forbidden('Invalid password'));
    const token = generateJwt(user.id, user.email);
    return res.json({ token });
  }

  async check(req, res, next) {
    const token = generateJwt(req.user.id, req.user.email);
    return res.json({ token });
  }
}

module.exports = new UserController();
