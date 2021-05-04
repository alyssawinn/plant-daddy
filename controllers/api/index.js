const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const plantRoutes = require('./plant-routes.js');

router.use('/users', userRoutes);
router.use('/plants', plantRoutes);

module.exports = router;