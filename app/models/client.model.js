module.exports = mongoose => {
  const Client = mongoose.model(
    "client",
    mongoose.Schema(
      {
        nom: String,
        prenom: String,
        adresse: String,
        ville: String,
        code: Number,
        tel: Number,
        email: String
      },
      { timestamps: true }
    )
  );

  return Client;
};