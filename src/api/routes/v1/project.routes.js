const express = require('express');
const ProjectController = require('./../../components/Project/project.controller');
const { authorize, LOGGED_USER } = require('../../middlewares/auth');


const router = express.Router();

router
  .route('/')
  .get(authorize(), ProjectController.get)
  .post(authorize(), ProjectController.save);

module.exports = router;
