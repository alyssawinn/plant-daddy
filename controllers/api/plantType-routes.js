const router = require('express').Router();
const { PlantType } = require('../../models');

router.get('/', (req, res) => {
PlantType.findAll({
    order: [['category_id', 'DESC']],
    attributes: [
            'id',
            'name',
            'category_id'
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
            'category_id'
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

router.post('/', (req, res) => {
    PlantType.create({
        name: req.body.name,
        waterAmount: req.body.waterAmount,
        sunlightAmount: req.body.sunlightAmount,
        category_id: req.body.category_id
    })
    .then(dbPlantTypeData => res.json(dbPlantTypeData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
    });
});

router.put('/', (req, res) => {
    Post.update(
        {
            name: req.body.name,
            waterAmount: req.body.waterAmount,
            sunlightAmount: req.body.sunlightAmount
        },
    {
        where: {
            id: req.params.id
        }
    }
    )
    .then(dbPlantTypeData => {
        if (!dbPlantTypeData) {
            res.status(404).json({ message: 'no post found with this id '});
            return;
        }
        res.json(dbPlantTypeData); 
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
    PlantType.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbPlantTypeData => {
        if (!dbPlantTypeData) {
            res.status(404).json({ message: 'No plant found with this id'});
            return;
        }
        res.json(dbPlantTypeData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
