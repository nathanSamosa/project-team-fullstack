const express = require('express');

const { 
    postRegisterDetails,
    postLoginDetails
} = require("../controllers/user");

const router = express.Router();

router.post("/register", postRegisterDetails);

router.post("/login", postLoginDetails);

module.exports = router;





