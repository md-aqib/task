const Joi = require('@hapi/joi');

const studentValidation = data => {
    const schema = {
        name: Joi.string().min(3).required(),
        email: Joi.string().min(6).required().email(),
        phone: Joi.number().min(10).required(),
        standard: Joi.number().required()
    }
    return Joi.validate(data, schema)
}

module.exports = {
    studentValidation
}