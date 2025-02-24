const Course = require('../models/Course')
const { mutipleMongooseToObject } = require('../../util/mongoose');
const { Promise } = require('mongoose');
class MeController {
  // [GET] /me/stored/courses
  async storedCourses(req, res, next) {
    let courseQuery = Course.find({});
    console.log("vao day", res.locals._sort);
    
    if (req.query.hasOwnProperty('_sort')) {
      courseQuery = courseQuery.sort({
        [req.query.column]: req.query.type
      });
    }
      Promise.all(([courseQuery, Course.countDocumentsDeleted({})]))
      .then(([courses, deletedCount]) => {
        res.render('me/stored-courses', { courses: mutipleMongooseToObject(courses), deletedCount: deletedCount });
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
