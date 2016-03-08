var person = require('../models/Person');



module.exports = {
  createSkills: function(req, res, next){
    person.skills.push(req.body);
    res.status(200).json(person.skills);
  },
  createHobbies: function(req, res, next){
    person.hobbies.push(req.body);
    res.status(200).json(person.hobbies);
  },
  createOccupations: function(req, res, next){
    person.occupations.push(req.body.occupations);
    res.status(200).json(person.occupations);
  },
  indexSkills: function(req, res, next){
    var experienceLevel = req.query.experience;
    var results = [];
    var skills = person.skills;
    if(experienceLevel){
      for (var i = 0; i < skills.length; i++){
        if(experienceLevel === skills[i].experience){
          results.push(skills[i]);
        }
      }
      res.status(200).json(results);
    }
    else{
    res.status(200).json(person.skills);
    }
  },
  indexSecrets: function(req, res, next){
    res.status(200).json(person.secrets);
  },
  indexName: function(req, res, next){
    console.log("hey");
    res.status(200).json(person.name);
  },
  indexLocation: function(req, res, next){
     res.status(200).json(person.location);
  },
  indexOccupations: function(req, res, next){
    var orderWhat = req.query.order;
    var order;
    if(orderWhat === 'asc'){
      order = person.occupations.sort();
    }
    if(orderWhat === 'desc'){
      order = person.occupations.sort().reverse();
    }
    res.status(200).json(order);
  },
  indexHobbies: function(req, res, next){
    res.status(200).json(person.hobbies);
  },
  indexHobbiesType: function(req, res, next){
    var types = req.params.type;
    var hobbie = person.hobbies;
    var results = [];
    console.log(types);
    for (var i = 0; i < hobbie.length; i++){
      console.log(hobbie[i].type);
      if (hobbie[i].type === String(types)){
        results.push(hobbie[i]);
        console.log(results);
      };
    };
    res.status(200).json(results);
  },
  showOccupationsLatest: function(req, res, next){
    res.status(200).json(person.occupations[person.occupations.length -1]);
  },
  updateName: function(req, res, next){
    person.name = req.body.name;
    console.log(person);
    res.status(200).json(person.name);
  },
  updateLocation: function(req, res, next){
    person.location = req.body.location;
    console.log(person);
    res.status(200).json(person.location);
  }
}
