const DBstudent = require('../models/Student');

module.exports = async(req, res) => {
    try{
        if(req.params.subjectId && req.query.email){
            let studentData = await DBstudent.findOne({email: req.body.email})
            if(!studentData){
                return res.json({
                    success: false,
                    message: "Student not found."
                })
            }
            if(studentData.subjects.includes(req.params.subjectId)){
                return res.json({
                    success: false,
                    message: "Subject already updated"
                })
            }
            await DBstudent.update({email: req.query.email}, {$push: {subjects: req.params.subjectId}}, done)
            return res.json({
                success: true,
                message: "Subject updated successfully."
            })
        } else {
            return res.json({
                success: false,
                message: "Please provide all details."
            })
        }
    } catch(e){
        return res.json({
            success: false,
            message: "Something went wrong, Please try again later."
        })
    }
}