const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const plantRoutes = require('./plant_routes.js');

router.use('/users', userRoutes);
router.use('/plants', postRoutes);

module.exports = router;