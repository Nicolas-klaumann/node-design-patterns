const express = require('express');
const router = express.Router();
const userRegistration = require('../singletons/userRegistration');

router.post('/register', (req, res) => {
    const { username, password } = req.body;
    userRegistration.registerUser(username, password);
    res.status(201).send(`User ${username} registered successfully.`);
});

router.get('/', (req, res) => {
    const users = userRegistration.getUsers();
    res.status(200).json(users);
});

module.exports = router;
