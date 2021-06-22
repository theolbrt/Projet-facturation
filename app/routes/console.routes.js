module.exports = app => {
    const consoles = require("../controllers/console.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", consoles.create);
  
    // Retrieve all Tutorials
    router.get("/", consoles.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", consoles.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", consoles.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", consoles.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", consoles.delete);
  
    // Create a new Tutorial
    router.delete("/", consoles.deleteAll);
  
    app.use('/api/consoles', router);
  };