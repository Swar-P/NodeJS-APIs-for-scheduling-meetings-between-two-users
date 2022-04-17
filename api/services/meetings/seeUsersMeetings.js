const users = require('../../models/users')
module.exports.seeUsersMeetings = async function (req, res) {
    try {
        const meetings = await users.findById(req.body.userId, { _id: 0, meetings: 1 }) //Fetch the details of the user whose scheduled meetings are to be shown
        return res.status(200).send(meetings)
    } catch (e) {
        return res.status(500).send("Internal Server Error")
    }
}