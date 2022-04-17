const joi = require('joi')

const seeUsersMeetingsValidation = joi.object({
    _id: joi.string().required().label('_id is required.'), //ID of the user who is currently logged into the system
    userId: joi.string().required().label('User Id is required.') //ID of the user whose scheduled meetings are to be shown
})

const scheduleMeetingValidation = joi.object({
    _id: joi.string().required().label('_id is required.'),
    userId: joi.string().required().label('User ID is required.'),
    from: joi.date().required().label('From dateAndTime is required'), //Starting time of the meeting
    to: joi.date().required().label('To dateAndTime is required') //Ending time of the meeting
})

module.exports = { seeUsersMeetingsValidation, scheduleMeetingValidation }