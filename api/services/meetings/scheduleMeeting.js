const users = require('../../models/users')

module.exports.scheduleMeeting = async function (req, res) {
    var anotherUser;
    try {
        anotherUser = await users.findById(req.body.userId, 'meetings') //Fetch the details of the user with whom the current user wants to schedule a meeting, userId refers to that user
        const reqFromDateTime = new Date(req.body.from).getTime()
        const reqToDateTime = new Date(req.body.to).getTime()
        var meetingScheduled = 1, meetingFrom, meetingTo
        for (var v = 0; v < anotherUser.meetings.length; v++) { //Compare the requested meeting timings with all the scheduled meetings' timings of the user to see if the requested meeting can be scheduled or not
            meetingFrom = anotherUser.meetings[v].from.getTime()
            meetingTo = anotherUser.meetings[v].to.getTime()
            if (meetingFrom == reqFromDateTime) {
                meetingScheduled = 0
                break
            } else if (meetingTo == reqToDateTime) {
                meetingScheduled = 0
                break
            } else if ((meetingFrom < reqFromDateTime) && (meetingTo > reqToDateTime)) {
                meetingScheduled = 0
                break
            } else if ((meetingFrom > reqFromDateTime) && (meetingTo < reqToDateTime)) {
                meetingScheduled = 0
                break
            } else if ((meetingFrom < reqFromDateTime) && (meetingTo > reqFromDateTime)) {
                meetingScheduled = 0
                break
            } else if ((meetingFrom < reqToDateTime) && (meetingTo > reqToDateTime)) {
                meetingScheduled = 0
                break
            }
        }
        if (meetingScheduled == 0) { //If that user has already scheduled meetings then this requested meting cannot be scheduled
            return res.status(200).send('Meeting cannot be scheduled')
        }
        else {
            anotherUser.meetings.push({ //If the meeting is scheduled then push the meeting details in the document of that user in the database
                from: req.body.from,
                to: req.body.to,
                userId: req.body._id
            })
            await anotherUser.save()
            var currentUser = await users.findByIdAndUpdate(req.body._id, { //If the meeting is scheduled then push the meeting details in the collection of the current user in the database, _id refers to the user which is currently logged in the system
                "$push": {
                    "meetings": {
                        from: req.body.from,
                        to: req.body.to,
                        userId: req.body.userId
                    }
                }
            }, { new: true })
            return res.status(200).send("Meeting is scheduled")
        }

    } catch (e) {
        return res.status(500).send("Internal Server Error")
    }
}