const Drinks = require("../Models/drinkSchema");

exports.getDrinks = (req, res) => {
  Drinks.find()
    .then((response) => {
      res.status(200).json({
        message: "Drinks menu data fetched Successfully",
        drinks: response,
      });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

exports.drinkByCategory = (req, res) => {
  const category = req.params.drink;
  Drinks.find({ category: category })
    .then((response) => {
      res.status(200).json({
        message: `Menu of Drinks by category has been fetched`,
        drinks: response,
      });
    })
    .catch((err) => res.status(500).json({ error: err }));
};
