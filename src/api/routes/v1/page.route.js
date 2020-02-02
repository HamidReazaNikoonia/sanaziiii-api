const express = require('express');
// const validate = require('express-validation');
const controller = require('./../../components/Page/page.controller');
const { authorize, LOGGED_USER } = require('../../middlewares/auth');

const router = express.Router();

router
  .route('/')
  .get(authorize(), controller.get)
  .post(authorize(), controller.save);


module.exports = router;
