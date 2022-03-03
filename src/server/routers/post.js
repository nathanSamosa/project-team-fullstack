const express = require('express');

const {
    getPosts,
    getPostById,
    postComment
} = require("../controllers/post");

const router = express.Router();

router.get("/", getPosts);

router.get("/:id", getPostById);

router.post("/comment", postComment)

module.exports = router;