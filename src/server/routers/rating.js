const express = require("express");
const {
    getRatings,
    updateRating,
    postRating,
    seedRating
} = require("../controllers/rating");

const router = express.Router()

router.get("/seed", seedRating)

router.get("/", getRatings)
router.put("/", updateRating)
router.post("/", postRating)

module.exports = router;