const express = require('express');

const {
    getPosts,
    getPostById,
    sendPost
} = require("../controllers/post");

const router = express.Router();

router.get("/", getPosts);

router.get("/:id", getPostById);

router.post("/", sendPost)

module.exports = router;