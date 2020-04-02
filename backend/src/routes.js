const express = require('express');
const routes = express.Router();
const ongsController = require('./Controllers/OngsController');
const incidentsController = require('./Controllers/IncidentsController');
const profileController = require('./Controllers/profileController');
const sessionController = require('./Controllers/sessionController');

// rota / recurso

// métodos HTTP:
// GET: Buscar uma informação do backend
// POST: Para criar uma informação do backend
// PUT: Alterar uma informação do backend
// DELETE: Deletar uma informação do backend

// Tipos de parametros:
// query: nomeados enviados na rota após ? e servem para filtros, paginação
// route: são utilizados para identificar recursos
// request body: corpo da requisição, utilizado para criar ou alterar recursos.

// Drivers banco: SELECT * FROM users
// Query Builder: table("users").select("*").where() = knex.js

routes.get('/ongs', ongsController.index);
routes.post('/ongs', ongsController.create);

routes.post('/sessions', sessionController.create);

routes.get('/profile', profileController.index);

routes.get('/incidents', incidentsController.index);
routes.post('/incidents', incidentsController.create);
routes.delete('/incidents/:id', incidentsController.delete);

module.exports = routes;
