const express = require('express');

const router = express.Router();

const { getUsers, registerUser, updateUser, deleteUser } = require('../controllers/userController');

router.get('/', getUsers);

router.post('/register', registerUser);

// ✅ 添加 updateUser API
router.put('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser); // ✅ 添加 DELETE 路由

module.exports = router;
