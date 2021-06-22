const db = require("../models");
const Clients = db.clients;

exports.create = (req, res) => {
  if (!req.body.nom) {
    console.log(req.body.nom)
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const client = new Clients({
    nom: req.body.nom,
    prenom: req.body.prenom,
    adresse: req.body.adresse,
    code: req.body.code,
    ville: req.body.ville,
    tel: req.body.tel,
    email: req.body.email,
  });

  client
    .save(client)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the data."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const nom = req.query.nom;
  var condition = nom ? { nom: { $regex: new RegExp(nom), $options: "i" } } : {};
  
  Clients.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving data."
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Clients.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      } else {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};