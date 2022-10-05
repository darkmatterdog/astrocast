const { Location } = require('../models/location.model');

module.exports.createLocation = (request, response) => {
    const { name, latitude, longitude } = request.body;
    Location.create({
        name,
        latitude,
        longitude
    })
    // needs way to automatically add elevation into the location - probably called with an update?
    .then(location => response.json(location))
    .catch(err => response.json(err));
}

module.exports.getLocation = (request, response) => {
    Location.findOne({_id: request.params.id})
    .then(location => response.json(location))
    .catch(err => response.json(err));
}

module.exports.getAllLocations = (request, response) => {
    Location.find({})
    .then(locations => response.json(locations))
    .catch(err => response.json(err));
}

module.exports.updateLocation = (request, response) => {

}