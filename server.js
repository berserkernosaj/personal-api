var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');

app.use(bodyParser.json());
app.use(middleware.addHeaders);
app.get('/name', mainCtrl.indexName);
app.get('/location', mainCtrl.indexLocation);
app.get('/occupations', mainCtrl.indexOccupations);
app.get('/occupations/latest', mainCtrl.showOccupationsLatest);
app.get('/hobbies', mainCtrl.indexHobbies);
app.get('/hobbies/:type', mainCtrl.indexHobbiesType);
app.put('/name', mainCtrl.updateName);
app.put('/location', mainCtrl.updateLocation);
app.post('/hobbies', mainCtrl.createHobbies);
app.post('/occupations', mainCtrl.createOccupations);
app.get('/skillz', mainCtrl.indexSkills);
app.post('/skillz', middleware.generateId, mainCtrl.createSkills);
app.get('/secrets/:username/:pin', middleware.verifyUser, mainCtrl.indexSecrets);



app.listen(8989, function(){
  console.log('listening on port 8989');
});
