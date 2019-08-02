const express = require('express');
const CatsService = require('./cat-service');

const AdoptedCatsRouter = express.Router();

AdoptedCatsRouter.route('/').get((req, res, next) => {
  const cats = CatsService.getAdoptedCats();
  if (!cats) {
    return res
      .status(400)
      .json({ error: "Sorry we didn't find any cats available to adopt" });
  }
  return res.json(cats);
}); //end of get route

module.exports = AdoptedCatsRouter;
