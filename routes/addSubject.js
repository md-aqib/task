const DBsubject = require('../models/Subject');

module.exports = async(req, res) => {
    try{
        if(req.body.subject){
            let subject = await DBsubject.findOne({subject: req.body.subject})
            if(subject || subject !== null){
                return res.json({
                    success: false,
                    message: "Subject already added."
                })
            }
            let data = new DBsubject({
                subject: req.body.subject,
            })
            await data.save()
            return res.json({
                success: true,
                message: "Subject added successfully."
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