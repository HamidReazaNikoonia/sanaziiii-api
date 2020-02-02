/* eslint-disable prefer-destructuring */
const httpStatus = require('http-status');
const ProjectModel = require('./project.model');

/**
 * Get Page
 * @public
 */

exports.get = async (req, res, next) => {
  try {
    const project = await ProjectModel.find();
    res.status(httpStatus.OK);
    res.json({
      project,
    });
  } catch (e) {
    next(e);
  }
};


exports.save = async (req, res, next) => {
  try {
    const data = req.body;

    const newProject = new ProjectModel(data);
    const savedProject = await newProject.save();
    res.status(httpStatus.CREATED);
    res.json({
      data: savedProject,
    });
  } catch (e) {
    next(e);
  }
};
