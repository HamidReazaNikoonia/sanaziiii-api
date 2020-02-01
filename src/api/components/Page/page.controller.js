const httpStatus = require('http-status');
const PageModel = require('./page.model');

/**
 * Get Page
 * @public
 */

exports.get = async (req, res, next) => {
  try {
    const pages = await PageModel.find();
    res.status(httpStatus.OK);
    res.json({
      pages,
    });
  } catch (e) {
    next(e);
  }
};
