const express = require("express");
const {
    getRatings,
    postRating,
    seedRating
} = require("../controllers/rating");

const router = express.Router()

router.get("/seed", seedRating)

router.get("/", getRatings)

router.post("/", postRating)

module.exports = router;