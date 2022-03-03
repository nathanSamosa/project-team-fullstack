const express = require('express');

const {
    getPosts,
<<<<<<< HEAD
    getPostById,
    postComment
=======
    getPostById
>>>>>>> d66285a60e7c6741bfab0cea5da7b24fc035db32
} = require("../controllers/post");

const router = express.Router();

router.get("/", getPosts);

router.get("/:id", getPostById);

<<<<<<< HEAD
router.post("/comment", postComment)

=======
>>>>>>> d66285a60e7c6741bfab0cea5da7b24fc035db32
module.exports = router;