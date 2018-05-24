const express = require('express');
const app = express();
const ejs = require('ejs');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});

app.use('/styles', express.static(__dirname + '/public'));
app.set('view engine','ejs');
const port = process.argv[2] || 3000;
const url = process.env.URL;

app.post('/submit', upload.single('file'), function(req, res){
  res.send({"File Size":(req.file.size/1000)+ "KB"});
});

app.get('/', function(req, res){
  res.status(200).set({'content-type':'text/html'});
  res.render('index');
  res.end();
});

app.listen(port, () => {
  console.log("started on port ", port);
});