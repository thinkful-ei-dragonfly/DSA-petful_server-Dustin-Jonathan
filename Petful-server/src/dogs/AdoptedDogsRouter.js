const express = require('express');
const DogsService = require('./dogs-service');

const AdoptedDogsRouter = express.Router();

AdoptedDogsRouter.route('/').get((req, res, next) => {
  const dogs = DogsService.getAdoptedDogs();
  if (!dogs) {
    return res
      .status(400)
      .json({ error: "Sorry we didn't find any cats available to adopt" });
  }
  return res.json(dogs);
}); //end of get route

module.exports = AdoptedDogsRouter;
