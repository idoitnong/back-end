const mongoose = require('mongoose');

const { Schema } = mongoose;
const { Types: { ObjectId } } = Schema;
const sensorSchema = new Schema({
    owner: { //소유자(user) ObjectId
        type: ObjectId,
        required: true,
        ref: 'User'
     },
    sensorName: { //센서의 이름
        type: String,
        trim: true,
        required: true
    },
    lastSensorData: { //sensordata의 ObjectId배열
        type: ObjectId,
        ref: 'SensorData'
    },
    created: {
        type: Date,
        default: Date.now
    }
}, {
    versionKey: false // "_v필드 생성 안되게 하기"
});

module.exports = mongoose.model('Sensor', sensorSchema);