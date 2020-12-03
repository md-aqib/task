const DBstudent = require('../models/Student');

module.exports = async(req, res) => {
    try{
        let studentData = await DBstudent.find({}).populate('subject','subject');
        if(studentData.length === 0){
            return res.json({
                success: false,
                message: "No student found."
            })
        } else {
            let mappedData = studentData.map((ele) => {
                let sub = ele.subject.map((e) => {
                    return e.subject
                })
                return {
                    name: ele.name,
                    email: ele.email,
                    phone: ele.phone,
                    standard: ele.standard,
                    subject: sub
                }
            })
            return res.json({
                success: true,
                message: "All students data",
                data: mappedData
            })
        }
    } catch(e){
        return res.json({
            success: false,
            message: "Something went wrong, Please try again later."
        })
    }
}