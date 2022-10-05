const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
    name: { 
        type: String,
        unique: true 
    },
    latitude: { 
        type: Number,
        required: true 
    },
    longitude: { 
        type: Number,
        required: true
    },
    elevation: { type: Number },
    
    astronomy: { type: Object },
    weather: { type: Object }

}, { timestamps: true });

module.exports.Location = mongoose.model('Location', LocationSchema);