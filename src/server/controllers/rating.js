const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const pokeNumber = 151;
const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);

const getRatings = async (req, res) => {
    const ratings = await prisma.rating.findMany({})
    res.json({ data: ratings })
}

const postRating = async (req, res) => {
    const {
        profileId,
        pokemonId,
        strength,
        companion,
        design
    } = req.body;

    const createdRating = await prisma.rating.create({
        data: {
            profileId: profileId,
            pokemonId: pokemonId,
            strength: strength,
            companion: companion,
            design: design
        }
    })

    res.json({ data: createdRating })
}

const seedRating = async (req, res) => {

    for (let i = 1; i <= pokeNumber; i++) {
        const pokemonId = i;
        const seededRating = await prisma.rating.create({
            data: {
                profileId: 1,
                pokemonId: pokemonId,
                strength: getRandom(1, 6),
                companion: getRandom(1, 6),
                design: getRandom(1, 6)
            }
        })
        console.log(seededRating)
    }
    res.json({ data: "ratings seeded" })
}

module.exports = {
    getRatings,
    postRating,
    seedRating
}