const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const password = process.env.JWT_SECRET

const getRatings = async (req, res) => {
    const {
        getPassword
    } = req.body
    if (getPassword === password) {
        const ratings = await prisma.rating.findMany({})
        res.json({ data: ratings })
    }
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

module.exports = {
    getRatings,
    postRating
}