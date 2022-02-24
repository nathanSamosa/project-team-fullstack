const express = require("express");
const {
    postProfile
} = require("../controllers/profile");

const router = express.Router()

router.post("/", postProfile)

module.exports = router;