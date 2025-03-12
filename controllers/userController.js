const db = require('../config/db');

exports.registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const [result] = await db.execute(
            'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
            [name, email, password]
        );
        res.status(201).json({ message: "Χρήστης εγγράφηκε επιτυχώς!", userId: result.insertId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getUsers = async (req, res) => {
    try {
        const [users] = await db.execute('SELECT * FROM users');
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    try {
        await db.execute(
            'UPDATE users SET name = ?, email = ? WHERE id = ?',
            [name, email, id]
        );
        res.json({ message: "Ο χρήστης ενημερώθηκε επιτυχώς!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
// ✅ 添加 deleteUser 方法
exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        await db.execute('DELETE FROM users WHERE id = ?', [id]);
        res.json({ message: "Ο χρήστης διαγράφηκε επιτυχώς!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


