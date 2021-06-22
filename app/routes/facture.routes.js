module.exports = app => {
  const factures = require("../controllers/facture.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", factures.create);

  // Retrieve all Tutorials
  router.get("/", factures.findAll);

  // Retrieve all published Tutorials
  router.get("/published", factures.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", factures.findOne);

  // Update a Tutorial with id
  router.put("/:id", factures.update);

  // Delete a Tutorial with id
  router.delete("/:id", factures.delete);

  // Create a new Tutorial
  router.delete("/", factures.deleteAll);

  app.use('/api/factures', router);
};