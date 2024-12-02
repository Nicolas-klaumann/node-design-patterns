const express = require('express');
const bodyParser = require('body-parser');
const usersRoute = require('./routes/users');
const reportRoute = require('./routes/report');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/users', usersRoute);
app.use('/report', reportRoute);
app.use(express.static('public')); // Servir arquivos estáticos

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
