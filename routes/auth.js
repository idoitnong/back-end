const express = require('express');
const bcrypt = require('bcrypt');
const md5 = require('md5');
const uuidv4 = require('uuid/v4');

const { User } = require('../models');

const router = express.Router();
router.post('/signup', async(req, res, next) => {
    const { username, password, realName, phoneNumber } = req.body;

    try {
        const exUser = await User.findOne({ where: { username } });
        if (exUser) {
            return res.status(400).json({ message: '이미 가입 된 아이디 입니다.' })
        }
        const hash = await bcrypt.hash(password, 12);
        const result = await User.create({
            username,
            password: hash,
            realName,
            phoneNumber,
            apiKey: md5(uuidv4())
        });
        res.status(201).json(result)
    } catch (e) {
        console.error(e);
        res.status(500).json({ code: 500, message: '서버 에러' });
    }
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const exUser = await User.findOne({
            where: { username }
        });

        if (!exUser) {
            return res.status(401).json({
                code: 401,
                message: '존재하지 않는 아이디 입니다.'
            });
        }

        const cmpPw = await bcrypt.compare(password, exUser.password);

        if (!cmpPw) {
            return res.status(401).json({
                code: 401,
                message: '비밀번호가 일치하지 않습니다.'
            });
        }

        const token = jwt.sign({
            username: exUser.username,
            realName: exUser.realName
        }, process.env.JWT_SECRET, {
            expiresIn: '1h',
            issuer: 'admin'
        });

        return res.status(200).json({ token });
    } catch (error) {
        return res.status(500).json({
            code: 500,
            message: '서버 에러'
        });
    }
});

router.get('/logout', (req, res) => {
});

module.exports = router;
