const db = require("../models");
const Factures = db.factures;


exports.create = (req, res) => {
  if (!req.body.nom) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const facture = new Factures({
    nom: req.body.nom,
    prenom: req.body.prenom,
    adresse: req.body.adresse,
    code: req.body.code,
    ville: req.body.ville,
    tel: req.body.tel,
    email: req.body.email,

    titre: req.body.titre,
    description: req.body.description,
    quantite: req.body.quantite,
    prixUnitaire: req.body.prixUnitaire,
    reduction: req.body.reduction,
    total: req.body.total
  });

  facture
    .save(facture)
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
  
  Factures.find(condition)
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

  Factures.findByIdAndRemove(id)
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