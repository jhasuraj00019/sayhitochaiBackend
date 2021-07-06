const drinksController = require('../controllers/drinks')
const dessertsController = require('../controllers/desserts')


const express = require("express")
const router = express.Router()

router.get('/drinks', drinksController.getDrinks);
router.get('/desserts', dessertsController.getDesserts)
router.get("/drinks/:drink", drinksController.drinkByCategory)


module.exports = router;