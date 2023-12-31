// expressjs app with EJS template engine and static files

// import modules

const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const ejs = require('ejs');

// create express app

const app = express();

// set view engine

app.set('view engine', 'ejs');

// set static files

app.use('/static', express.static('static'));

// set body parser

app.use(bodyParser.urlencoded({ extended: true }));

// cookie parser

app.use(require('cookie-parser')());

// handler

fs.readdirSync('./routes').forEach((file) => {
  require(`./routes/${file}`)(app);
})

app.use("*", (req, res) => {
  res.status(404).render('404');
})

// listen

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on port ' + (process.env.PORT || 3000));
})