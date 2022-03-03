const { PrismaClient } = require('@prisma/client');
<<<<<<< HEAD
const { createPortal } = require('react-dom');
=======
>>>>>>> d66285a60e7c6741bfab0cea5da7b24fc035db32
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
<<<<<<< HEAD
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

const postComment = async (req, res) => {
    
    const {
        postId, profileId, parentId, content
    } = req.body

    const comment = await prisma.comment.create({
        data: {
            postId: postId,
            profileId: profileId,
            parentId: parentId,
            content: content
=======
>>>>>>> d66285a60e7c6741bfab0cea5da7b24fc035db32
        }
        
    })

    res.json({ data: comment })
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

module.exports = {
    getPosts,
<<<<<<< HEAD
    getPostById,
    postComment
}




=======
    getPostById
}
>>>>>>> d66285a60e7c6741bfab0cea5da7b24fc035db32
