const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    port: 3306, // 确保端口正确
    password: '12345',
    database: 'restaurant_reservation',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    charset: 'utf8mb4' // 👈 这个属性应该放在对象的最后
});

module.exports = pool.promise();
