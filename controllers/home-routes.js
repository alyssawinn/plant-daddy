const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, PlantType, PlantCategory } = require('../models');

router.get('/', (req, res) => {
  res.render('homepage', {
    loggedIn: req.session.loggedIn,
    firstname: req.session.firstname
  });
});

router.get('/search', (req, res) => {
  res.render('search');
});

router.get('/myplants', (req, res) => {
  res.render('myplants');
})

router.get('/plantType', (req, res) => {
  PlantType.findAll({
    attributes: [
      'id',
      'name',
      'waterAmount',
      'sunlightAmount',
      'category_id',
      'image_url',
    ],
  })
    .then(dbPlantTypeData => {
      const PlantType = dbPlantTypeData.map(PlantType => PlantType.get({ plain: true }));

      res.render('search', {
        PlantType,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/plantType/:id', (req, res) => {
  PlantType.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'name',
      'waterAmount',
      'sunlightAmount',
      'image_url',
    ],
    include: [
      {
        model: PlantCategory,
        attribute: ['category']
      }
    ]
  })
  .then(dbPlantTypeData => {
    if (!dbPlantTypeData) {
      res.status(404).json({ message: 'No plant type found with this id' });
      return
    }
    const planttype = dbPlantTypeData.get({ plain: true });
    res.render('plants-info', { planttype })
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

/* router.get('/post/:id', (req, res) => {
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
  } else {
    res.render('login');
  }
  
});

module.exports = router;