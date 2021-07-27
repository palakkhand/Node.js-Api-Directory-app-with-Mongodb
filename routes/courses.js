const express = require('express');
const { getCourses, getCourse } = require('../controllers/courses');

const router = express.Router({ mergeParams: true });

const { protect } = require('../middleware/auth');

router.route('/').get(getCourses);

module.exports = router;