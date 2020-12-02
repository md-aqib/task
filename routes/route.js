const express = require('express');
const router = express.Router();

router.post('/create-student', require('./createStundent'));
router.post('/add-subject', require('./addSubject'));
router.put('/update-subject', require('./updateSubject'));
router.get('/get-students', require('./getStudents'))

module.exports = router;