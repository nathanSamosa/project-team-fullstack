const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
    const user = await createUser()
    const post = await createPost(user)
    await createComment(user, post)
    process.exit(0);
}
    

const createUser = async() => {
    const user = await prisma.user.create({
        data: {
            email: "nathanthesamosa@gmail.com",
            username: "NathanTheSamosa",
            password: "my-secret",
            profile: {
                create: {}
            }
        },
        include: {
            profile: true
        }
    })

    console.log("createUser", user)
    return user
}

const createPost = async(user) => {
    const { profile } = user

    const post = await prisma.post.create({
        data: {
            title: "This post was created in the seed!",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            category: "discussion",
            profile: {
                connect: {
                    id: profile.id
                }
            }
        }
    })

    console.log("createPost", post)
    return post
}

const createComment = async(user, post) => {
    const { profile } = user

    const comments = [
        {
            content: "This is an automatic comment to postid 1",
            postId: post.id,
            profileId: profile.id
        },
        {
            content: "This is an automatic reply to parentId 1 on postid 1",
            postId: post.id,
            profileId: profile.id
        },
        {
            content: "This is an automatic reply to parentId 2 on postid 1",
            postId: post.id,
            profileId: profile.id
        },
    ]

    const postedComments = [];

    for (let i = 0; i < comments.length; i++) {

        let commentData = {
            content: comments[i].content,
            profile: {
                connect: {
                    id: comments[i].profileId
                }
            },
            post: {
                connect: {
                    id: comments[i].postId
                }
            }
        }

        if(postedComments[i-1]) {
            commentData = {...commentData, parentId: postedComments[i-1].id}
        }

        const newComment = await prisma.comment.create({ data: commentData })

        console.log("createComment", newComment)
        postedComments.push(newComment)
    }
}

seed()
    .catch(async e => {
        console.error(e);
        await prisma.$disconnect();
    })
    .finally(() => process.exit(1));