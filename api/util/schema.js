const USERNAME_MAX_LENGTH = 32;

const { required, string, stringMax, date, email, emailEmpty, stringPattern, equalField } = {
  required: `El campo {field} es requerido.`,
  string: `El campo {field} debe estar compuesto por caracteres.`,
  date: `La {field} debe ser valida`,
  stringMax: `La {field} es demasiado larga. Maximo: {expected} caracteres, actuales: {actual}.`,
  stringPattern: `El campo {field} debe tener `,
  email: `El {field} debe ser valido.`,
  emailEmpty: `El campo {field} no debe estar vacio`,
  equalField: `El campo {field} debe coincidir con el campo {expected}`
}

const patternPassword = /^(?=.*\d)(?=.*[\u0021|\u002b|\u003c|\u003e|\u0040|\u005F|\u0023|\u0024])(?=.*[A-Z])(?=.*[a-z])\S{8,32}$/;
const regexContraseña = new RegExp(patternPassword); // simbolos: ! _ + @ $ < | >

const userSchema = {
  email: { 
    type: "email",
    messages: { 
      email,
      emailEmpty, 
      required
    }
  },
  contraseña: { 
    type: "string", 
    pattern: regexContraseña, 
    messages: { 
      required,
      string, 
      stringPattern: `${stringPattern} minimo ocho caracteres, contener dígitos, minúsculas, mayúsculas y símbolos.` 
    } 
  }
}
const loginSchema = userSchema;

const registerSchema = {
  ...userSchema,
  username: { 
    type: "string",
    max: USERNAME_MAX_LENGTH,
    messages: { 
      required,
      string,
      stringMax
    } 
  },
  ['confirmar contraseña']: { 
      type: "equal",
      field: "contraseña",
      messages: { equalField }
  }
}

const collectionSchema = {
  name: { 
    type: "string",
    max: 50,
    messages: { 
      required,
      string,
      stringMax 
    }
  },
  userId: { 
    type: 'objectID',
    messages: { 
      required,
      objectID: 'La {field} seleccionada debe ser valida'
    }
  }
}

const noteSchema = {
  name: {
    type: "string",
    messages: {
      required,
      string
    }
  },
  description: { 
    type: "string",
    messages: {
      required,
      string
    }
  },
  isFav: {
    type: 'boolean',
    optional: true
  }
  // userId: { 
  //   type: 'objectID',
  //   messages: { 
  //     required,
  //     objectID: 'La {field} seleccionada debe ser valida'
  //   }
  // },
  // collectionId: { 
  //   type: 'objectID',
  //   messages: { 
  //     required,
  //     objectID: 'La {field} seleccionada debe ser valida'
  //   }
  // }
};

module.exports = {
  loginSchema,
  registerSchema,
  collectionSchema,
  noteSchema
}