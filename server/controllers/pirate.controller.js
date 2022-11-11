
const Pirate = require('../models/pirate.model')


module.exports.index = (req, res) => {
    res.json({
        message: "Hello world!"
    });
}


//Create One
module.exports.createPirate = (req, res) => {
    const newPirate = req.body;
    Pirate.create(newPirate)
        .then(pirate => res.json(pirate))
        .catch(err => res.status(400).json(err))
}

//Get All 
module.exports.getPirates = (req, res) => {
    Pirate.find().collation({locale: "en"}).sort({pName: "asc"})
        .then(pirates => res.json(pirates))
        .catch(err => res.json(err))
}

//Get One
module.exports.onePirate = (req,res) => {
    const idFromParams = req.params.id
    Pirate.findOne({_id: idFromParams})
        .then(onePirate => res.json({Pirate: onePirate}))
        .catch(err => res.json(err));
}

//Update
module.exports.updatePirate =  (req, res) => {
    const idFromParams = req.params.id;
    Pirate.findOneAndUpdate(
        {_id: idFromParams},
        req.body,
        {new: true, runValidators: true }
    )
        .then(updatedPirate => res.json(updatedPirate))
        .catch(err => res.status(400).json(err))
}

//Delete
module.exports.deletePirate = (req, res) => {
    Pirate.deleteOne({_id: req.params.id})
        .then(result => res.json({result: result}))
        .catch(err => res.json({message: "Something went wrong", error: err}))
}