const express = require("express");
const {
    getRatings,
    postRating
} = require("../controllers/rating");

const router = express.Router()

router.get("/", getRatings)

router.post("/", postRating)

module.exports = router;