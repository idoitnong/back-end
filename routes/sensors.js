const express = require('express');
const { User, Sensor, SensorValue } = require('../models');
const Sequelize = require('sequelize');

const router = express.Router();

// FIXME: 센서 데이터 테이블을 JOIN 해서 최신 센서값을 포함시켜 출력하게 바꾸기
router.get('/', async (req, res, next) => {
    try {
        const sensors = await Sensor.findAll({
            include: [{
                model: SensorValue,
                order: [['id', 'DESC']],
                limit: 1,
                attributes: [['value', 'lastValue'], 'createdAt'],
            }]
        });
        return res.status(200).json({ sensors });
    } catch (e) {
        console.error(e);
        next(e);
    }
});

// TODO: 센서 추가 만들기
router.post('/', async(req, res, next) => {

});

// TODO: 최신 데이터 10개 출력하게 만들기
router.get('/:id', async(req, res, next) => {
    const { id } = req.params;
    //next(1234);
    try {
        const result = await SensorValue.findAll({
            order: [['created_at', 'DESC']],
            limit: 10,
            include: [Sensor]
         });

         return res.status(200).json({ result });
        
    } catch (e) {
        console.error(e);
        next(e);
    }
});

// key를 받아서 센서 데이터 테이블에 센서의 값을 추가하는 라우터
router.post('/:id', async(req, res, next) => {
    const apiKey = '06a069ac822581216c0768b943dd504f'
    // const { apiKey } = req.query;
    const { id } = req.params;
    const { value } = req.body;

    console.log(value);

    try {
        // 유저가 존재하는지 확인
        const exUser = await User.findOne({
            where: { apiKey },
            attributes: ['id']
        });

        if (!exUser) {
            return res.status(401).json({ message: '인증되지 않은 유저입니다.' })
        }

        // 해당 유저에게 센서가 존재하는지 확인
        const exSensor = await User.findOne({
            where: { apiKey },
            include: [{
                model: Sensor,
                where: { id }
            }]
        });

        if (!exSensor) {
            return res.status(400).json({ message: '센서를 찾을 수 없습니다.' })
        }

        const result = await SensorValue.create({ sensorId: id, value });

         return res.status(201).json({ result });
        
    } catch (e) {
        console.error(e);
        next(e);
    }

    // try {
    //     const result = await sensorData.save();
    //     await Sensor.findOneAndUpdate({ _id: req.params.id }, { lastSensorData: sensorData._id });
    //     res.status(201).json(result)
    // } catch (e) {
    //     console.error(e);
    //     next(e);
    // }
});
module.exports = router;
