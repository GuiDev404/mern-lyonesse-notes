const mongoose = require('mongoose');
const debug = require('debug')('notes-hardt:db');

mongoose.connect(process.env.DB_NAME, {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useCreateIndex: true,
})

const connection = mongoose.connection;

connection.on('error', ()=> {
  debug('Error connection to database');
})

connection.once('open', ()=> {
  debug('Connected to database...');
})