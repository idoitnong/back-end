const mongoose = require('mongoose');

module.exports = () => {
    const connect = () => {
        if (process.env.NODE_ENV !== 'production') {
            mongoose.set('debug', true); //mongoose가 생성하는 쿼리 내용을 콘솔에서 확인 가능
        }

        mongoose.connect('mongodb://localhost:27017/admin', { //admin db에 접속시도
            dbName: 'idoitnong', //idoitnong db사용
            useNewUrlParser: true
        }, (error) => {
            if (error) {
                console.error("db연결 에러", error);
            } else {
                console.log("db연결 성공");
            }
        });
    }
    connect();
    mongoose.connection.on('error', (error) => {
        console.error('db연결 에러', error);
    });
    mongoose.connection.on('disconnect', () => {
        console.error('db연결이 끊김. 연결 재시도중');
        connect();
    });
    /* 스키마 연결 */
    require('./sensor');
    require('./sensordata');
};