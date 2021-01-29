const DUMMY_USERS = require('../models/users.model');

const login = async (email, password) => {
  const userEmail = DUMMY_USERS.find(u => u.email === email);
  const userPassword = DUMMY_USERS.find(u => u.password === password);

  const defaultLoginError = 'Login não autorizado';
  
  if (!userEmail || userEmail.email !== email) {
    console.error(`E-mail ${email} não encontrado`);
    throw new error(defaultLoginError, 401);
  }

  if (!userPassword || userPassword.password !== password) {
    console.error(`Senha inválida`);
    throw new error(defaultLoginError, 401);
  }
}

exports.login = login;