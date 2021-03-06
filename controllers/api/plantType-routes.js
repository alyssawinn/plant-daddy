const router = require('express').Router();
const { PlantType, Plant, PlantCategory, User } = require('../../models');

router.get('/', (req, res) => {
PlantType.findAll({
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
    .then(dbPlantTypeData => res.json(dbPlantTypeData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    PlantType.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'name',
            'waterAmount',
            'sunlightAmount',
            'category_id',
            'image_url',
        ]
    })
    .then(dbPlantTypeData => {
            if (!dbPlantTypeData) {
            res.status(404).json({ message: 'No plant found with that id'});
            return;
            }
        res.json(dbPlantTypeData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/userPlant/:id', (req,res) => {
    Plant.findAll({
        where: {
            user_id: req.params.id
        },
        attributes: [
            'id'
        ],
        include: [
            {
                model: User,
                attributes: ['id']
            },
            {
                model: PlantType,
                attributes: ['id', 'name', 'waterAmount', 'sunlightAmount', 'image_url'],
                include: {
                    model: PlantCategory,
                    attributes: ['id', 'category']
                }
            }
        ]
    })
    .then(dbPlantData => {
        if (!dbPlantData) {
            res.status(404).json({ message: 'No plant found with that id'});
            return;
        }
        res.json(dbPlantData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    PlantType.create({
        name: req.body.name,
        waterAmount: req.body.waterAmount,
        sunlightAmount: req.body.sunlightAmount,
        category_id: req.body.category_id,
        image_url: req.body.image_url
    })
    .then(dbPlantTypeData => res.json(dbPlantTypeData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
    });
});

router.post('/userPlant', (req,res) => {
    Plant.create({
        user_id: req.body.user_id,
        plantType_id: req.body.plantType_id
    })
    .then(dbPlantData => res.json(dbPlantData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})
module.exports = router;
