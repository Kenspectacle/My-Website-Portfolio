const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');
const app = express();


mongoose.connect('mongodb://localhost:27017/portfolio', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}); //opens the database

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connected');
}); //connects to the database


app.set('view engine', 'ejs'); //set ejs as default view engine
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));//for css?

app.engine('ejs', ejsMate);


app.get('/', (req,res) => {
    res.render('main');
});

app.get('/home', (req,res) => {
    res.render('home');
});

app.listen(3000, () => {
    console.log('CONNECTION AT PORT 3000 OPEN');
});
