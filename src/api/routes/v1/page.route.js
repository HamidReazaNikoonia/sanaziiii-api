const express = require('express');
// const validate = require('express-validation');
const controller = require('./../../components/Page/page.controller');

const router = express.Router();

router
  .route('/')
  .get(controller.get);


module.exports = router;
