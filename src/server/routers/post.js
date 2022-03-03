const express = require('express');

const {
    getPosts,
    getPostById,
    sendPost,
    postComment
} = require("../controllers/post");

const router = express.Router();

router.get("/", getPosts);

router.get("/:id", getPostById);

router.post("/", sendPost)

router.post("/comment", postComment)

module.exports = router;