const { Plant } = require('../models');

const plantData = [
    {
        id: 1,
        name: "Fern",
        sunlightAmount: "Part Sun",
        waterAmount: "When soil is dry",
        category_id: 2,
        user_id: []
    },
    {
        id: 2,
        name: "Snake Plant",
        sunlightAmount: "Sun or Shade",
        waterAmount: "Every other week",
        category_id: 2,
        user_id: []
    },
    {
        id: 3,
        name: "Ficus",
        sunlightAmount: "Part Sun",
        waterAmount: "When soil is dry",
        category_id: 2,
        user_id: []
    },
    {
        id: 4,
        name: "Cactus",
        sunlightAmount: "Full Sun",
        waterAmount: "When soil is dry",
        category_id: 3,
        user_id: []
    },
    {
        id: 5,
        name: "Aloe Vera",
        sunlightAmount: "Full Sun",
        waterAmount: "Every other week",
        category_id: 3,
        user_id: []
    },
    {
        id: 6,
        name: "Echeveria",
        sunlightAmount: "Full Sun",
        waterAmount: "Every other week",
        category_id: 3,
        user_id: []
    },
    {
        id: 7,
        name: "Jade Crassula",
        sunlightAmount: "Full Sun",
        waterAmount: "When soil is dry",
        category_id: 3,
        user_id: []
    },
    {
        id: 8,
        name: "Chinese Elm",
        sunlightAmount: "Full Sun",
        waterAmount: "Once a week",
        category_id: 1,
        user_id: []
    },
    {
        id: 9,
        name: "Dwarf Hawaiian Umbrella Tree",
        sunlightAmount: "Full Sun",
        waterAmount: "Twice a week",
        category_id: 1,
        user_id: []
    },
    {
        id: 10,
        name: "Phalaenopsis",
        sunlightAmount: "Sun or Shade",
        waterAmount: "Once a week",
        category_id: 4,
        user_id: []
    },
    {
        id: 11,
        name: "Purple",
        sunlightAmount: "Part Sun",
        waterAmount: "When soil is dry",
        category_id: 4,
        user_id: []
    },
    {
        id: 12,
        name: "Mini",
        sunlightAmount: "Sun or Shade",
        waterAmount: "When soil is dry",
        category_id: 4,
        user_id: []
    }
];

const seedPlant = () => PlantName.bulkCreate(plantData);

module.exports = seedPlant;

