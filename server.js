const express = require('express');
const app = express();
const port = 3000;
const logger = require('./middleware/logger');
const userRoutes = require('./routes/users');

// 解析 JSON 和 URL 编码的请求体
app.use(express.json()); // 👈 必须加上，否则 req.body 是 undefined
app.use(express.urlencoded({ extended: true })); // 解析 URL 编码数据

app.use(logger);
app.use('/users', userRoutes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
