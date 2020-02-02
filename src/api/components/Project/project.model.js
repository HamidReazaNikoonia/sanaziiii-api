const mongoose = require('mongoose');

// const APIError = require('../utils/APIError');


/**
 * ProjectSchema Schema
 * @private
 */
const projectSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',

  },
  name: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 128,
  },
  details: {
    type: String,
    maxlength: 1028,
  },
  isArchive: {
    type: Boolean,
    default: false,
  },
  shareStatus: {
    type: Boolean,
    default: false,
  },
  pages: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Page',

  },
}, {
  timestamps: true,
});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */
// userSchema.pre('save', async function save(next) {
//   try {
//     if (!this.isModified('password')) return next();

//     const rounds = env === 'test' ? 1 : 10;

//     const hash = await bcrypt.hash(this.password, rounds);
//     this.password = hash;

//     return next();
//   } catch (error) {
//     return next(error);
//   }
// });

/**
 * Methods
 */
// userSchema.method({
//   transform() {
//     const transformed = {};
//     const fields = ['id', 'name', 'email', 'picture', 'role', 'createdAt'];

//     fields.forEach((field) => {
//       transformed[field] = this[field];
//     });

//     return transformed;
//   },

//   token() {
//     const playload = {
//       exp: moment().add(jwtExpirationInterval, 'minutes').unix(),
//       iat: moment().unix(),
//       sub: this._id,
//     };
//     return jwt.encode(playload, jwtSecret);
//   },

//   async passwordMatches(password) {
//     return bcrypt.compare(password, this.password);
//   },
// });


module.exports = mongoose.model('Project', projectSchema);
