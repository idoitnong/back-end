const mongoose = require('mongoose');

const { Schema } = mongoose;
const { Types: { ObjectId } } = Schema;
const sensorDataSchema = new Schema({
    sensorId: { //sensor의 ObjectId
        type: ObjectId,
        required: true,
        ref: 'Sensor'
    }, 
    value: {
        type: Schema.Types.Mixed, //모든 타입 다 받을 수 있음 (여기서는 float)
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
}, {
    versionKey: false // "_v필드 생성 안되게 하기"
});

module.exports = mongoose.model('SensorData', sensorDataSchema);
