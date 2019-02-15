const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
let upload = multer({dest: './uploads/'});

app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));

app.post('/assets/api-data/catalog-settings/update', upload.single('file'), (req, res) => {
    console.log(req.file);
    console.log(req.body);
  res.json({res: req.body})
});

app.post('/assets/api-data/catalog-settings/create', upload.single('file'), (req, res) => {
    console.log(req.file);
    console.log(req.body);
    res.json({res: req.body})
});

app.get('/get-book-info', function (req, res) {
    console.log('Getting book data...');  
    try {
      res(require('./efects/client-for.html'));
    } catch (e) {
      res.status(400).send('Error');
    }
});


app.post('/book-room', (req, res) => {
    console.log(req.body);
    setTimeout(() => {
      res.json(`Your data is being processed. We will call you to this number: ${req.body['phone-number']}`);
    }, 1000);
    
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
