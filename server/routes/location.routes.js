const LocationController = require('../controllers/location.controller');

module.exports = function(app){

    app.get('/api/locations', LocationController.getAllLocations);

    app.post('/api/locations', LocationController.createLocation);

    app.get('/api/locations/:id', LocationController.getLocation);

    app.put('/api/locations/:id', LocationController.updateLocation);
}