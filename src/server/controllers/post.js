const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getPosts = async (req, res) => {
    const posts = await prisma.post.findMany({
        include: {
        profile: {
            include: {
                user: true,
            },
        }
        }
    })
    res.json({ data: posts });
}

module.exports = {
    getPosts
}