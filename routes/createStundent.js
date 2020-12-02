const DBstudent = require('../models/Student');

module.exports = async(req, res) => {
    try{
        if(req.body.name && req.body.email && req.body.phone && req.body.standard){
            let studentData = await DBstudent.findOne({email: req.body.email})
            if(studentData || studentData !== null){
                return res.json({
                    success: false,
                    message: "Student already added."
                })
            }
            let data = new DBstudent({
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                standard: req.body.standard
            })
            await data.save()
            return res.json({
                success: true,
                message: "Student added successfully."
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