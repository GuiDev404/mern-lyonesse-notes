import React from 'react'
import { Link } from 'react-router-dom';
import { patternPassword, patternEmail } from '../../util' 

const FormAuth = ({ isRegister, register, handleSubmit, onSubmit, errors }) => {

  return (
    <div className="mx-auto d-flex flex-column justify-content-center align-items-center vh-100 login">
      <h1 className="fw-bold my-3 h2"> {isRegister ? 'Registrarse' : 'Iniciar Sesión'} 🔑</h1>
      <form
        id="form"
        className="px-3 py-4 mb-3 login__form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className='small text-danger'> {errors?.otherErros?.message} </p>

        {isRegister &&
          <div className="d-flex flex-column mb-3">
            <label className="text-dark mb-1" htmlFor="username">
              Nombre de usuario
            </label>
            <input
              type="text"
              name="username"
              className="p-2  rounded-0 border-2 border form__input"
              id="username"
              placeholder="Ingrese un nombre de usuario"
              {...register('username', {
                required: { 
                  value: true,
                  message: 'El nombre de usuario es requerido.'  
                },
                maxLength: {
                  value: 32,
                  message: 'No debe tener más de 32 carácteres.'
                }
              }
              )}
              autoFocus
            />
            <p className='small text-danger mt-1 mb-0 pb-0'> {errors?.username?.message}  </p>
          </div>
        }

        <div className="d-flex flex-column mb-3">
          <label className="text-dark mb-1" htmlFor="email">
            Correo
          </label>
          <input
            type="email"
            name="email"
            className="p-2  rounded-0 border-2 border form__input"
            id="email"
            placeholder="Ingrese su email"
            {...register('email', {
              required: { 
                value: true,
                message: 'El correo es requerido.'
              },
              pattern: {
                value: patternEmail,
                message: 'Ingrese un correo valido.'
              }
            })}
            autoFocus={!isRegister}
          />
          <p className='small text-danger mt-1 mb-0 pb-0'> {errors?.email?.message}  </p>
        </div>

        <div className="d-flex flex-column mb-3">
          <label className="text-dark mb-1" htmlFor="password">
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            className="p-2 rounded-0 border-2 border form__input"
            id="password"
            placeholder="Ingrese su contraseña"
            {...register('contraseña', {
              required: { 
                value: true,
                message: 'La contraseña es requerida.'
              },
              pattern: {
                value: patternPassword,
                message: 'La contraseña debe tener minimo 8 caracteres y como maximo 32, contener dígitos, minúsculas, mayúsculas y símbolos.'
              }
            })}
          />
          <p className='small text-danger mt-1 mb-0 pb-0'> {errors?.contraseña?.message}  </p>
        </div>
 
        {isRegister && 
          <div className="d-flex flex-column mb-3">
            <label className="text-dark mb-1" htmlFor="confirmar-contraseña">
              Confirmar contraseña
            </label>
            <input
              type="password"
              name="confirmar contraseña"
              className="p-2 rounded-0 border-2 border form__input"
              id="confirmar-contraseña"
              placeholder="Ingrese nuevamente su contraseña"
              {...register('confirmar contraseña', {
                required: { 
                  value: true,
                  message: 'La confirmacion de contraseña es requerida.'
                },
                pattern: {
                  value: patternPassword,
                  message: 'La confirmacion de contraseña debe tener minimo 8 caracteres y como maximo 32, contener dígitos, minúsculas, mayúsculas y símbolos.'
                }
              } )}
            />
            <p className='small text-danger mt-1 mb-0 pb-0'> {errors?.['confirmar contraseña']?.message}  </p>
          </div>
        }

        <button
          className="btn btn-lg btn-dark w-100 rounded-0 mt-3 text-uppercase"
          type="submit"
        >
          <span className="h6 text-white">{isRegister ? 'Registrarse' : 'Ingresar'}</span>
        </button>

        <p className="mb-0 pb-0 mt-3 small text-center">
          <span className='me-1'> {isRegister ? '¿Ya tienes cuenta?' : "¿No tienes cuenta?"} </span>
          <Link to={isRegister ? '/login' : '/register'} className="text-primary">
            {isRegister ? 'Iniciar Sesion' : 'Registrate'}
          </Link>
        </p>
      </form>
    </div>
  );
}

export default FormAuth
