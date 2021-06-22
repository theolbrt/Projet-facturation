module.exports = app => {
    const manettes = require("../controllers/manette.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", manettes.create);
  
    // Retrieve all Tutorials
    router.get("/", manettes.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", manettes.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", manettes.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", manettes.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", manettes.delete);
  
    // Create a new Tutorial
    router.delete("/", manettes.deleteAll);
  
    app.use('/api/manettes', router);
  };