const Course = require('../models/Course')
const { mutipleMongooseToObject } = require('../../util/mongoose')
class SiteController {
    // [GET] /
    async index(req, res, next) {
      
        // res.json({
        //     name: "test"
        // })
        // res.render('home');
        
            
        Course.find({})
        .then(courses => {
                courses = mutipleMongooseToObject(courses);
                res.render('home', {courses: courses});
            })
        .catch(next);
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
