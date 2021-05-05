const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Plant, PlantCategory } = require('../models');

router.get('/', (req, res) => {
  console.log('======================');
  Plant.findAll({
    attributes: [
      'id',
      'name',
      'waterAmount',
      'sunlightAmount',
      'category_id'
    ],
  })
    .then(dbPlantData => {
      const plants = dbPlantData.map(plant => plant.get({ plain: true }));

      res.render('homepage', {
        plants,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single post
router.get('/post/:id', (req, res) => {
  Plant.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'name',
      'waterAmount',
      'sunlightAmount',
      'category_id'
    ],
  })
    .then(dbPlantData => {
      if (!dbPlantData) {
        res.status(404).json({ message: 'No plants found with this id' });
        return;
      }

      const plant = dbPlantData.get({ plain: true });

      res.render('single-post', {
        plant,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;