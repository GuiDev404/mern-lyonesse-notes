const jwt = require('jsonwebtoken');
const createHttpError = require('http-errors');

const AuthModel = require('./model');
const { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET, EXPIRE_ACCESS_TOKEN_TIME } = require('../../config');

const controller = {};

controller.signup = async (req, res, next)=> {
  const { username, email, contraseña } = req.body;

  const newUser = new AuthModel({ username, email, password: contraseña });

  const user = await newUser.emailExists(email);

  if(user.exist){
    return next(createHttpError(409, "El usuario ya existe. Intente con otro."));
  }
  await newUser.save();

  res.status(201).json({
    status: 201,
    message: 'Usuario registrado correctamente 😎'
  })
}

controller.signin = async (req, res, next)=> {
  const { email, contraseña } = req.body;

  const userTempInstance = new AuthModel();
  const user = await userTempInstance.emailExists(email);

  if (user.exist) {
    const isValidPassword = await userTempInstance.isCorrectPassword(contraseña, user.data.password);

    if (isValidPassword) {
      const accessToken = await userTempInstance.createAccessToken(user.data);
      const refreshToken = await userTempInstance.createRefreshToken(user.data);

      // Guardado del refresh token en la base de datos
      user.data.refreshToken = refreshToken;
      await user.data.save();

      return res.status(200).json({
        status: 200,
        message: "Inicio de sesión correcto!",
        accessToken,
        refreshToken
      });
    } else {
      return next(createHttpError(400, "El correo y/o contraseña incorrecta"));
    }
  } else {
    // Aca seria correo incorrecto, pero como medida de seguridad lo mejor es no decir que es
    return next(createHttpError(400, "El usuario no existe."));
  }
}

controller.logout = async function(req, res, next) {
  const { email } = req.body;

  if(!email){
    return next(createHttpError(401, 'Email no proporcionado'));
  }
  
  try {
    await AuthModel.updateOne({ email }, { refreshToken: '' })

    res.status(200).json({ 
      status: 200,
      message: 'Sesión cerrada correctamente'
    })
  } catch (error){
    return next(createHttpError('Usuario no encontrado'));
  }

};

controller.refreshToken = async function (req, res, next) {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return next(createHttpError(401, "Token no proporcionado o no esta autenticado!"));
  }

  try {
    const userDoc = await AuthModel.findOne({ refreshToken });

    if (!userDoc) {
      return next(createHttpError(401, "Refresh token no valido"));
    } else {
      jwt.verify(userDoc.refreshToken, REFRESH_TOKEN_SECRET, async (err, payload) => {
 
          const newPayload = {
            id: payload.id,
            email: payload.email,
            username: payload.username,
          };

          req.user = newPayload;

          const newAccessToken = jwt.sign(newPayload, ACCESS_TOKEN_SECRET, {
            expiresIn: EXPIRE_ACCESS_TOKEN_TIME,
          });
          const newRefreshToken = jwt.sign(newPayload, REFRESH_TOKEN_SECRET);

          await AuthModel.updateOne({ refreshToken }, { refreshToken: newRefreshToken });

          res.status(200).json({
            statusCode: 200,
            message: "Token de acceso actualizado",
            accessToken: newAccessToken,
            refreshToken: newRefreshToken,
          });
        }
      );
    }
  } catch (err) {
    next(createHttpError(401, "Token no encontrado"));
  }
};

module.exports = controller;