const Joi = require('joi');
const User = require('./page.model');

// module.exports = {

//   // GET /v1/pages
//   getPage: {
//     query: {

//     },
//   },
// };
//   // POST /v1/users
//   createUser: {
//     body: {
//       email: Joi.string().email().required(),
//       password: Joi.string().min(6).max(128).required(),
//       name: Joi.string().max(128),
//       role: Joi.string().valid(User.roles),
//     },
//   },

//   // PUT /v1/users/:userId
//   replaceUser: {
//     body: {
//       email: Joi.string().email().required(),
//       password: Joi.string().min(6).max(128).required(),
//       name: Joi.string().max(128),
//       role: Joi.string().valid(User.roles),
//     },
//     params: {
//       userId: Joi.string().regex(/^[a-fA-F0-9]{24}$/).required(),
//     },
//   },

//   // PATCH /v1/users/:userId
//   updateUser: {
//     body: {
//       email: Joi.string().email(),
//       password: Joi.string().min(6).max(128),
//       name: Joi.string().max(128),
//       role: Joi.string().valid(User.roles),
//     },
//     params: {
//       userId: Joi.string().regex(/^[a-fA-F0-9]{24}$/).required(),
//     },
//   },
// };