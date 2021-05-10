const { PlantType } = require('../models');

const plantData = [
    {
        id: 1,
        name: "Fern",
        sunlightAmount: "Part Sun",
        waterAmount: "When soil is dry",
        category_id: 2,
        image_url: 'https://res.cloudinary.com/duryryfnr/image/upload/v1620264916/plant_daddy/fern.jpg'
    },
    {
        id: 2,
        name: "Snake Plant",
        sunlightAmount: "Sun or Shade",
        waterAmount: "Every other week",
        category_id: 2,
        image_url: 'https://res.cloudinary.com/duryryfnr/image/upload/v1620264946/plant_daddy/snake_plant.jpg'
    },
    {
        id: 3,
        name: "Ficus",
        sunlightAmount: "Part Sun",
        waterAmount: "When soil is dry",
        category_id: 2,
        image_url: 'https://res.cloudinary.com/duryryfnr/image/upload/v1620264903/plant_daddy/Ficus.jpg'
    },
    {
        id: 4,
        name: "Cactus",
        sunlightAmount: "Full Sun",
        waterAmount: "When soil is dry",
        category_id: 3,
        image_url:'https://res.cloudinary.com/duryryfnr/image/upload/v1620264913/plant_daddy/cactus.jpg'
    },
    {
        id: 5,
        name: "Aloe Vera",
        sunlightAmount: "Full Sun",
        waterAmount: "Every other week",
        category_id: 3,
        image_url: 'https://res.cloudinary.com/duryryfnr/image/upload/v1620264912/plant_daddy/aloe_vera.jpg'
    },
    {
        id: 6,
        name: "Echeveria",
        sunlightAmount: "Full Sun",
        waterAmount: "Every other week",
        category_id: 3,
        image_url: 'https://res.cloudinary.com/duryryfnr/image/upload/v1620264466/plant_daddy/Echeveria.jpg'
    },
    {
        id: 7,
        name: "Jade Crassula",
        sunlightAmount: "Full Sun",
        waterAmount: "When soil is dry",
        category_id: 3,
        image_url: 'https://res.cloudinary.com/duryryfnr/image/upload/v1620264471/plant_daddy/Jade_Crassula.jpg'
    },
    {
        id: 8,
        name: "Chinese Elm",
        sunlightAmount: "Full Sun",
        waterAmount: "Once a week",
        category_id: 1,
        image_url: 'https://res.cloudinary.com/duryryfnr/image/upload/v1620264462/plant_daddy/Chinese_Elm.jpg'
    },
    {
        id: 9,
        name: "Dwarf Hawaiian Umbrella Tree",
        sunlightAmount: "Full Sun",
        waterAmount: "Twice a week",
        category_id: 1,
        image_url: 'https://res.cloudinary.com/duryryfnr/image/upload/v1620264464/plant_daddy/Dwarf_Hawaiian_Umbrella_Tree.jpg'
    },
    {
        id: 10,
        name: "Phalaenopsis",
        sunlightAmount: "Sun or Shade",
        waterAmount: "Once a week",
        category_id: 4,
        image_url: 'https://res.cloudinary.com/duryryfnr/image/upload/v1620264473/plant_daddy/Phalaenopsis.jpg'
    },
    {
        id: 11,
        name: "Purple",
        sunlightAmount: "Part Sun",
        waterAmount: "When soil is dry",
        category_id: 4,
        image_url: 'https://res.cloudinary.com/duryryfnr/image/upload/v1620265072/plant_daddy/Purple_Orchid.jpg'
    },
    {
        id: 12,
        name: "Mini",
        sunlightAmount: "Sun or Shade",
        waterAmount: "When soil is dry",
        category_id: 4,
        image_url: 'https://res.cloudinary.com/duryryfnr/image/upload/v1620265070/plant_daddy/Mini_Orchid.jpg'
    }
];

const seedPlants = () => PlantType.bulkCreate(plantData);

module.exports = seedPlants;