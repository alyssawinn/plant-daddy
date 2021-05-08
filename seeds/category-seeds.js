const { PlantCategory } = require('../models');

const categoryData = [
    {
        id: 1,
        category: "Bonsai Tree"
    },
    {
        id: 2,
        category: "House Plant"
    },
    {
        id: 3,
        category: "Succulent"
    },
    {
        id: 4,
        category: "Orchid"
    }
];

const seedCategories = () => PlantCategory.bulkCreate(categoryData);

module.exports = seedCategories;