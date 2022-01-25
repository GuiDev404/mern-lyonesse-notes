const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {
  ROUNDS,
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET,
  EXPIRE_ACCESS_TOKEN_TIME,
  EXPIRE_REFRESH_TOKEN_TIME,
} = require("../../config");

const AuthSchema = new Schema({
  username: {
    type: String,
    maxLength: 32,
    trim: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  },
  refreshToken : String
}, {
  timestamps: true,
  versionKey: false,
});

AuthSchema.pre('save', function (next){
  if(this.isModified('password') || this.isNew){
    const document = this;

    bcrypt.hash(document.password, Number(ROUNDS), function (err, hash){
      if(err){
        next(err);
      } else {
        document.password = hash;
        next();
      }
    })
  } else {
    next();
  }

});

AuthSchema.methods.emailExists = async function (email){
  try {
    const user = await model('Auth', AuthSchema).find({ email });
  
    return {
      exist: user.length > 0,
      data: user[0]
    };
  } catch (ex) {
    return false;
  }
}

AuthSchema.methods.isCorrectPassword = async function (password, hash){
  try {
    let isValid = await bcrypt.compare(password, hash);
    return isValid;
  } catch (ex) {
    return false;
  } 
}

AuthSchema.methods.createAccessToken = function (user) {
  let payload = { id: user._id , email: user.email, username: user.username }
  
  const accessToken = jwt.sign(payload, ACCESS_TOKEN_SECRET, { expiresIn:  EXPIRE_ACCESS_TOKEN_TIME })

  return accessToken;
}

AuthSchema.methods.createRefreshToken = async function (user) {
  let payload = { id: user._id , email: user.email, username: user.username };

  const refreshToken = jwt.sign(payload, REFRESH_TOKEN_SECRET, { expiresIn: EXPIRE_REFRESH_TOKEN_TIME })

  return refreshToken;
}

module.exports = model('Auth', AuthSchema);