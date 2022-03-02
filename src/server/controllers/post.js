const { PrismaClient } = require('@prisma/client');
const { post } = require('../routers/post');
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

const getPostById = async (req, res) => {
    const postId = parseInt(req.params.id)
    const post = await prisma.post.findFirst({
        where: {
            id: postId
        },
        include: {
            profile: {
                include: {
                    user: true,
                },
            },
            comment: {
                include: {
                    profile: {
                        include: {
                            user: true
                        }
                    }
                }
            }
        }
    })
    res.json({ data: post })
}

module.exports = {
    getPosts,
    getPostById
}