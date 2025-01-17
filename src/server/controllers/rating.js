const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const pokeNumber = 151;
const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);

const password = process.env.JWT_SECRET


const getRatings = async (req, res) => {
    // const {  !!!!!     removed this to avoid get request error.
    //     getPassword
    // } = req.body
    // if (getPassword === password) {
        const ratings = await prisma.rating.findMany({
            include: {
                pokemon: true
            }
        })
        res.json({ data: ratings })
    // }
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

const updateRating = async (req, res) => {
    const {
        id, stat, ratingValue
    } = req.body

    

    const rating = await prisma.rating.update({
        where: { id: id },
        data: { [stat]: ratingValue }
    })
    console.log(rating)
    res.json({ data: rating })
}

module.exports = {
    getRatings,
    updateRating,
    postRating,
    seedRating
}