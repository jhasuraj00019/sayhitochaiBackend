const Desserts = require('../Models/dessertSchema')


exports.getDesserts = (req, res) => {
    Desserts.find().then((response) => {
        res.status(200).json({
            message: "Menu of desserts has been fetched",
            "desserts": response
        })
    }).catch(err => res.status(500).json({error: err}))
}
