const mongoose = require('mongoose');

const PirateSchema = new mongoose.Schema({
    pName: {
        type:String,
        required: [true, "Name is required"],
        minlength: [3, "Must be greater than three"]},
    image: {
        type:String, 
        required: [true, "Image URL is required"]
    }, 
    numChest: {
        type: Number,
        required: [true, "Treasure chests required"],
        min:[0, "Invalid chest number"]
    },
    catchPhrase: {
        type:String,
        required: [true, "Catchphrase is required"]
    },
    position: {
        type: String,
        required: [true, "Crew is required"]
    },
    pegleg : {
        type:Boolean
    },
    eyepatch: {
        type:Boolean
    },
    hookhand: {
        type: Boolean
    }
}, {timestamps: true})

module.exports = mongoose.model('Pirate', PirateSchema);