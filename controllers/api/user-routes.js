const router = require('express').Router();
const { User, PlantName, PlantCategory } = require('../../models');
const { destroy } = require('../../models/User');
const withAuth = require('../../utils/auth');


//GET /api/users
router.get('/', (req,res) => {
   User.findAll({
      attributes: { exclude: ['password'] }
   })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
});

//router.get by user id
router.get('/:id', (req,res) => {
   User.findOne({
      attributes: { exclude: ['password'] },
      where: {
         id: req.params.id
      },
      include: [
         {
            model: PlantName,
            attributes: ['id', 'name'] //need to add the rest of the attributes
         }
      ]
   })
      .then(dbUserData => {
         if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
         }
         res.json(dbUserData);
      })
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      }); 
});

//POST /api/users
router.post('/', (req,res) => {
   User.create({
      firstname: req.body.firstname,
      email: req.body.email,
      password: req.body.password,
   })
      .then(dbUserData => {
         req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.firstname = dbUserData.firstname;
            req.session.admin = false;
            req.session.loggedIn = true;

            res.json(dbUserData);
         });
      })
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
});

//router post login
router.post('/login', (req,res) => {
   
   User.findOne({ 
      where: {
         email: req.body.email
      }
   }).then(dbUserData => {
      if (!dbUserData) {
         res.status(400).json({ message: 'No user with that email address!' });
         return;
      }

      const validPassword = dbUserData.checkPassword(req.body.password);

      if (!validPassword) {
         res.status(400).json({ message: 'Incorrect password!' });
         return;
      }

      req.sessionsave(() => {
         req.session.user_id = dbUserData;
         req.session.firstname = dbUserData.firstname;
         req.session.loggedIn = true;

         res.json({ user: dbUserData, message: 'You are now logged in!' });
      });
   });
});

//logout of session post route
router.post('/logout', (req,res) => {
   if (req.session.loggedIn) {
      req.session.destroy(() => {
         res.status(204).end();
      });
   } else {
      res.status(404).end();
   }
});

//put route
router.put('/:id', (req,res) => {
   
   User.update(req.body, {
      individualHooks: true,
      where: {
         id: req.params.id
      }
   })
      .then(dbUserData => {
         if (!dbUserData[0]) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
         }
         res.json(dbUserData);
      })
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
});

//router delete
router.delete('/:id', (req,res) => {
   User.destroy({
      where: {
         id: req.params.id
      }
   })
      .then(dbUserData => {
         if (!dbUserData) {
            res.status(404).json({ message: 'No user found this id' });
            return;
         }
         res.json(dbUserData);
      })
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
});

module.exports = router;