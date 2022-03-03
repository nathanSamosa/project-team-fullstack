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
                where: {
                    commentId: {
                        equals: null
                    }
                },
                include: {
                    profile: {
                        include: {
                            user: true,
                        },
                    },
                    children: {
                        include: {
                            profile: {
                                include: {
                                    user: true
                                },
                            },
                            children: {
                                include: {
                                    profile: {
                                        include: {
                                            user: true
                                        },
                                    },
                                }
                            }
                        }
                    }
                }
            }
        }
    })
    res.json({ data: post })
}

const sendPost = async (req, res) => {
    const {
        category,
        title,
        content,
        profileId
    } = req.body

    const createdPost = await prisma.post.create({
        data: {
            category: category,
            title: title,
            content: content,
            profileId: profileId
        }
    })

    console.log(createdPost)

    res.json({ data: createdPost })
}

module.exports = {
    getPosts,
    getPostById,
    sendPost
}