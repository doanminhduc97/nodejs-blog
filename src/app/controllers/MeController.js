const Course = require('../models/Course')
const { mutipleMongooseToObject } = require('../../util/mongoose')
class MeController {
  // [GET] /
  async storedCourses(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render('me/stored-courses', { courses: mutipleMongooseToObject(courses) });
      })
      .catch(next);
  }
  trashCourses(req, res, next) {
    Course.findWithDeleted({deleted:true})
      .then((courses) => {
        res.render('me/trash-courses', { courses: mutipleMongooseToObject(courses) });
      })
      .catch(next);
  }
}
module.exports = new MeController();
