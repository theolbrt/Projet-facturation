module.exports = app => {
    const pieces = require("../controllers/piece.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", pieces.create);
  
    // Retrieve all Tutorials
    router.get("/", pieces.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", pieces.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", pieces.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", pieces.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", pieces.delete);
  
    // Create a new Tutorial
    router.delete("/", pieces.deleteAll);
  
    app.use('/api/pieces', router);
  };