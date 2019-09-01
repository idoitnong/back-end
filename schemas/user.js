const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

const { Schema } = mongoose;
const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    realName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        trim: true,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
}, {
    versionKey: false // "_v필드 생성 안되게 하기"
});

module.exports = mongoose.model('User', userSchema);