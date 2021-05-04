const { PlantCategory } = require('../models');

const categoryData = [
    {
        id: 1,
        category: "Bonsai Trees"
    },
    {
        id: 2,
        category: "House Plants"
    },
    {
        id: 3,
        category: "Succulents"
    },
    {
        id: 4,
        category: "Orchids"
    }
];

const seedCategories = () => PlantCategory.bulkCreate(categoryData);

module.exports = seedCategories;