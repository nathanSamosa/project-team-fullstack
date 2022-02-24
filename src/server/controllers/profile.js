const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const postProfile = async (req, res) => {
    const {
        userId
    } = req.body;

    const createdProfile = await prisma.profile.create({
        data: {
            userId: userId
        }
    })

    res.json({ data: createdProfile })
}

module.exports = {
    postProfile
}