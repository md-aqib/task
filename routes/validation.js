const Joi = require('@hapi/joi');

const studentValidation = data => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        email: Joi.string().min(6).required().email(),
        phone: Joi.number().equal(10).required(),
        standard: Joi.number().required()
    })
    let validation = schema.validate(data)
    return validation;
}

module.exports = {
    studentValidation
}