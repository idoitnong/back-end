var express = require('express');
var mongoose = require('mongoose');
var Sensor = require('../schemas/sensor');
var SensorData = require('../schemas/sensordata');

var router = express.Router();
router.get('/', async(req, res, next) => {
    try {
        const sensors = await Sensor.find({ }, { owner: 0 }).populate({
            path: 'lastSensorData',
            select: 'value created -_id'
        });
        res.json(sensors);
    } catch (e) {
        console.error(e);
        next(e);
    }
});
router.post('/', async(req, res, next) => {
    const sensor = new Sensor({
        sensorName: req.body.sensor_name,
        owner: req.body.owner
    });

    try {
        const result = await sensor.save();
        res.status(201).json(result);
    } catch (e) {
        console.error(e);
        next(e);
    }
});
router.get('/:id', async(req, res, next) => {
    try {
        const sensorDatas = await SensorData.find({ sensorId: req.params.id });
        res.json(sensorDatas);
    } catch (e) {
        console.error(e);
        next(e);
    }
});
router.post('/:id', async(req, res, next) => {
    const sensorData = new SensorData({
        _id: new mongoose.Types.ObjectId(),
        sensorId: req.params.id,
        value: req.body.v
    });

    try {
        const result = await sensorData.save();
        await Sensor.findOneAndUpdate({ _id: req.params.id }, { lastSensorData: sensorData._id });
        res.status(201).json(result)
    } catch (e) {
        console.error(e);
        next(e);
    }
});
module.exports = router;