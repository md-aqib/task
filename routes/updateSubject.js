const DBstudent = require('../models/Student');
const DBsubject = require('../models/Subject')

module.exports = async(req, res) => {
    try{
        if(req.params.subjectId && req.query.email){
            let subjectData = await DBsubject.findById(req.params.subjectId);
            if(!subjectData){
                return res.json({
                    success: false,
                    message: "SUbject does not exists."
                })
            }
            let studentData = await DBstudent.findOne({email: req.query.email});
            if(!studentData){
                return res.json({
                    success: false,
                    message: "Student not found."
                })
            }
            if(studentData.subject.includes(req.params.subjectId)){
                return res.json({
                    success: false,
                    message: "Subject already updated."
                })
            }
            await DBstudent.findOneAndUpdate({email: req.query.email}, {$addToSet: {subject: req.params.subjectId}}, {
                new: true
              });
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