const path = require('path');
const express = require('express');
const db = require('./util/Database');
const User = require('./models/user');
const bodyParser = require('body-parser');
const app = express();

const authRoutes = require('./routes/auth');


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/auth', authRoutes);

app.listen(330);


