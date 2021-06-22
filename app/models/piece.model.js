module.exports = mongoose => {
    const Pieces = mongoose.model(
      "piece",
      mongoose.Schema(
        {
          name: String,
          etat: String,
          platform: String,
          type: String,
          quantity: Number
        },
        { timestamps: true }
      )
    );
  
    return Pieces;
  };