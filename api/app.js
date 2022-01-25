require('dotenv').config();
require('./config/db');
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const middlewares = require('./middlewares');

const app = express();
const collectionsRouter = require('./components/Collections/routes');
const notesRouter = require('./components/Notes/routes');
const authRouter = require('./components/Auth/routes');

// Middlewares
app.use(compression())
app.use(logger('dev'));
app.use(helmet());
app.disable('x-powered-by');
app.use(cors()); // configurar
app.use(express.json());

// Routes
app.use('/api/auth', authRouter);

app.use(middlewares.is_auth)
app.use('/api/collections', collectionsRouter);
app.use('/api/notes', notesRouter);

// Handle errors
app.use(middlewares.handle_404);
app.use(middlewares.handle_error);

module.exports = app;
