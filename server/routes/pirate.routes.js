const PirateController = require('../controllers/pirate.controller');
module.exports = function(app) {
    app.get('/api', PirateController.index);
    app.get('/api/pirates', PirateController.getPirates);
    app.get('/api/pirates/:id', PirateController.onePirate);
    app.post('/api/pirates/new', PirateController.createPirate);
    app.put('/api/pirates/update/:id', PirateController.updatePirate);
    app.delete('/api/pirates/delete/:id', PirateController.deletePirate);
}