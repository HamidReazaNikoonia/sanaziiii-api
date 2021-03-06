const httpStatus = require('http-status');
const PageModel = require('./page.model');
// const userController = require('./../../controllers/user.controller');

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


exports.save = async (req, res, next) => {
  try {
    const data = req.body;
    const newPage = new PageModel(data);
    const savedPage = await newPage.save();
    res.status(httpStatus.CREATED);
    res.json({
      data: savedPage,
    });
  } catch (e) {
    next(e);
  }
};
