const express = require('express');
const app = express();
const path = require('path');
const userRoute = require('./routes/user');
const bodyParser = require('body-parser');
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public' , 'css')))





app.use(userRoute)
app.listen(2000)