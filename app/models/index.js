const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.consoles = require("./console.model.js")(mongoose);
db.manettes = require("./manette.model.js")(mongoose);
db.pieces = require("./piece.model.js")(mongoose);
db.clients = require("./client.model.js")(mongoose);
db.factures = require("./facture.model.js")(mongoose);


module.exports = db;