const express = require('express');
const DogService = require('./dogs-service');

const DogsRouter = express.Router();

DogsRouter.route('/')
  .get((req,res,next)=>{
    return DogService.getDogs().then(dogs =>{
      if(!dogs){
        return res.status(400).json({error: 'Sorry we can\'t find any available dogs'})
      }
      return res.json(dogs);
    });
  });//end of get endpoint