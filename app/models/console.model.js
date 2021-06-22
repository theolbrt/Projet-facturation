module.exports = mongoose => {
  const Console = mongoose.model(
    "console",
    mongoose.Schema(
      {
        name: String,
        etat: String,
        quantity: Number
      },
      { timestamps: true }
    )
  );

  return Console;
};