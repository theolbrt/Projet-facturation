module.exports = mongoose => {
  const Facture = mongoose.model(
    "facture",
    mongoose.Schema(
      {
        nom: String,
        prenom: String,
        adresse: String,
        code: Number,
        ville: String,
        tel: Number,
        email: String,

        titre: String,
        description: String,
        quantite: Number,
        prixUnitaire: Number,
        reduction: Number,
        total: Number,
      },
      { timestamps: true }
    )
  );

  return Facture;
};