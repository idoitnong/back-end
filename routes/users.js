var express = require('express');
var User = require('../schemas/user');

var router = express.Router();

router.get('/', async(req, res, next) => {
    try {
        const users = await User.find();
        res.json(users)
    } catch (e) {
        console.error(e);
        next(e);
    }
});

router.post('/', async(req, res, next) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        realName: req.body.real_name,
        phoneNumber: req.body.phone_number
    });

    try {
        const result = await user.save();
        res.status(201).json(result)
    } catch (e) {
        console.error(e);
        next(e);
    }
});

module.exports = router;