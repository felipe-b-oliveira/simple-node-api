const userService = require('../services/user.service');

// Login
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await userService.login(email, password)

    return res.status(200).json(user);
  } catch {
    console.error('Erro ao realizar login:', err.message);
    return res.status(err.code || 500).json({ error: err.message });
  }
}

exports.login = login;