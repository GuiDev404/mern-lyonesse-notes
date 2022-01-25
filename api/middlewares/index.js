const Validator = require("fastest-validator");
const createHttpError = require('http-errors');
const id_validator = require("../util/id_validator");
const jwt = require('jsonwebtoken');
const { Types } = require('mongoose');

const { RED_COLOR, IS_DEV, ACCESS_TOKEN_SECRET, JWT_ERRORS } = require('../config');
const validatorInstance = new Validator({
  defaults: {
    objectID: Types.ObjectId,
  }
});

module.exports = {
  // handle_id_validation: function (model, key) {
  //   return async (req, res, next, paramValue)=> {
  //     const idValidation = id_validator(paramValue);

  //     if(!idValidation) return next(createHttpError(400, 'Fallo. ID no valido')); // or res.status(422)

  //     // const registros = await model.find({$or: [
  //     //   { userId: req.params.id },
  //     //   { _id: req.params.id },
  //     // ]})

  //     const registros = await model.find({ [key]: paramValue })

  //     if(!registros){
  //       return next(createHttpError(404, 'Recurso no encontrado'))
  //     }
      
  //     req.registros = registros;

  //     next();
  //   }
  // },
  handle_id_validation:  async (req, res, next, paramValue)=> {
      const idValidation = id_validator(paramValue);

      if(!idValidation) {
        next(createHttpError(400, 'Fallo. ID no valido')); // or res.status(422)
        return;
      }
      
      // const registros = await model.find({$or: [
      //   { userId: req.params.id },
      //   { _id: req.params.id },
      // ]})

      // const registros = await model.find({ [key]: paramValue })

      // if(!registros){
      //   return next(createHttpError(404, 'Recurso no encontrado'))
      // }
      
      // req.registros = registros;

      next();
  },
  handle_404: function (req, res, next) {
    return (!res.headersSent) && next(createHttpError(404, 'Recurso no encontrado'));
  },
  handle_error: function (err, req, res, next) {
    if(IS_DEV) console.error(RED_COLOR, err);
    
    const statusCode = err.status || 500;

    res.status(statusCode).json({
      statusCode,
      message: statusCode === 500 ? 'Internal Server Error' : err.message
    })
  },
  avoid_try_catch: (cb) => {
    return async (req, res, next) => {
      try {
        await cb(req, res, next);
      } catch (error) {
        next(error);
      }
    };
  },
  validate: function (schema) {
    return (req, res, next)=> {
      const check = validatorInstance.compile(schema);
      const resultValidacion = check(req.body);

      if(resultValidacion && Array.isArray(resultValidacion)){
        return next(createHttpError(400, resultValidacion[0].message));
      }

      next();
    }
  },
  is_auth: function (req, res, next) {
    const authorization = req.header('Authorization');
   
    if(!authorization){
      next(createHttpError(401, 'Acceso denegado. Credenciales invalidas.') )
    } else {
      const [ bearer, token ] = authorization.split(' ');

      if(bearer === 'Bearer' && token){
        try {
          const payload = jwt.verify(token, ACCESS_TOKEN_SECRET);
          req.user = payload; 
          
          jwt.verify(token, ACCESS_TOKEN_SECRET);

          next();
        } catch (error) {

          if(error.name){
            return next(createHttpError(401, JWT_ERRORS[error.name]))
          }
  
          next(error);
        }
      } else {
        next(createHttpError(401, 'Acceso denegado. Credenciales invalidas.') )
      }

    }
  }
}