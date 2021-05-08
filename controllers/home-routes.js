const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, PlantType, PlantCategory } = require('../models');

router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/search', (req, res) => {
  res.render('search');
});

/* router.get('/', (req, res) => {
  console.log('======================');
  PlantType.findAll({
    attributes: [
      'id',
      'name',
      'waterAmount',
      'sunlightAmount',
      'category_id'
    ],
  })
    .then(dbPlantTypeData => {
      const PlantTypes = dbPlantTypeData.map(PlantType => PlantType.get({ plain: true }));

      res.render('homepage', {
        PlantTypes,
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
  PlantType.findOne({
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
    .then(dbPlantTypeData => {
      if (!dbPlantTypeData) {
        res.status(404).json({ message: 'No PlantTypes found with this id' });
        return;
      }

      const PlantType = dbPlantTypeData.get({ plain: true });

      res.render('single-post', {
        PlantType,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}); */

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;