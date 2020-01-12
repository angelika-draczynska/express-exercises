const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');

const app = express();

app.engine('.hbs', hbs());
app.set('view engine', '.hbs');

  app.use(express.static(path.join(__dirname + '/images')));
  
  app.use(express.static(__dirname));

  app.get('/user/', (req, res) => {
    res.render('forbidden');
  });

  app.get('/', (req, res) => {
    res.render('home');
  });

  app.get('/about', (req, res) => {
    res.render('about');
  });

  app.get('/hello/:name', (req, res) => {
    res.render('hello', { name: req.params.name });
  });

  app.use((req, res) => {
    res.status(404).show('404.html');
  });

app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});