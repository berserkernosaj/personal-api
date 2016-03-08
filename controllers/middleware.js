var person = require('../models/Person');

module.exports = {
  addHeaders: function(req, res, next) {
  res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  });
  next();
  },
  verifyUser: function(req, res, next) {
    if(req.params.username === "chipotleBeans" && req.params.pin === "4chan"){
      next();
    }
    else{
      next("Begone foul Hacker!");
    }
  },
  generateId: function(req, res, next) {
    req.body.id = person.skills.length + 1;
    next();
  }
}
