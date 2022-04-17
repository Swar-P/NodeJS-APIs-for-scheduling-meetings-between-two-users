const express = require('express');
const router = express.Router();
const { seeUsersMeetingsValidation, scheduleMeetingValidation } = require('../helper/validationModels')
const { scheduleMeeting } = require('./services/meetings/scheduleMeeting')
const { seeUsersMeetings } = require('./services/meetings/seeUsersMeetings')

router.post('/scheduleMeeting', async (req, res, next) => {
  const ret = await scheduleMeetingValidation.validate(req.body) //Validate request body with JOI
  if (ret.error) {
    return res.status(400).send(ret.error) //If validation fails then return
  }
  try {
    const result = await scheduleMeeting(req, res) //Else call the appropriate function
    return next(result)
  } catch (e) {
    return next(e)
  }
})

router.post('/seeUsersMeetings', async (req, res, next) => {
  const ret = await seeUsersMeetingsValidation.validate(req.body)
  if (ret.error) {
    return res.status(400).send(ret.error)
  }
  try {
    const result = await seeUsersMeetings(req, res)
    return next(result)
  } catch (e) {
    return next(e)
  }
})

module.exports = router;