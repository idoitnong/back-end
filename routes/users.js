const express = require('express');
const { User } = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const router = express.Router();

router.get('/', async(req, res, next) => {
    try {
        const users = await User.findAll({ });
        res.status(200).json(users);
        console.log('zzzz');
    } catch (e) {
        console.error(e);
        console.log("asdf");
        next(e);
    }
});

router.post('/', async(req, res, next) => {
    const { username, password, realName, phoneNumber } = req.body;

    try {
        const exUser = await User.findOne({
            where: {
                [Op.or]: [{username}, {phone_number: phoneNumber}]
            }
        });
        if (exUser) {
            res.status(400).json({ message: '이미 가입 된 유저 입니다.' })
        }
        const result = await User.create({
            username,
            password,
            real_name: realName,
            phone_number: phoneNumber
        });
        res.status(201).json(result)
    } catch (e) {
        console.error(e);
        next(e);
    }
});

module.exports = router;