module.exports = mongoose => {
    const Accessoires = mongoose.model(
      "accessoires",
      mongoose.Schema(
        {
          name: String,
          etat: String,
          quantity: Number
        },
        { timestamps: true }
      )
    );
  
    return Accessoires;
  };