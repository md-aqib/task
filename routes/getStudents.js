const DBstudent = require('../models/Student');

module.exports = async(req, res) => {
    try{
        let studentData = await DBstudent.find({}).populate('subjects')
        if(!studentData){
            return res.json({
                success: false,
                message: "No student found."
            })
        } else {
            return res.json({
                success: true,
                message: "All students data",
                data: studentData
            })
        }
    } catch(e){
        return res.json({
            success: false,
            message: "Something went wrong, Please try again later."
        })
    }
}