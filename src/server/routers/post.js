const express = require('express');

const {
    getPosts,
    getPostById,
    sendPost,
    postComment,
    getPostsByProfileId,
    deletePost
} = require("../controllers/post");

const router = express.Router();

router.get("/", getPosts);

router.get("/:id", getPostById);

router.get("/user/:id", getPostsByProfileId)

router.post("/", sendPost)

router.post("/comment", postComment)

router.delete("/:id", deletePost)

module.exports = router;