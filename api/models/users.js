const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    phoneNo: {
        type: String,
        required: true
    },
    meetings: [new mongoose.Schema({
        from: Date,
        to: Date,
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users'
        }
    })]
}, {
    timestamps: true
});
mongoose.model('users', schema)
module.exports = mongoose.model('users');