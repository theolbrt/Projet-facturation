module.exports = mongoose => {
    const Manette = mongoose.model(
      "manette",
      mongoose.Schema(
        {
          name: String,
          etat: String,
          quantity: Number
        },
        { timestamps: true }
      )
    );
  
    return Manette;
  };