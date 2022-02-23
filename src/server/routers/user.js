const express = require('express');

const { 
    postRegisterDetails 
} = require("../controllers/user");

const router = express.Router();

router.post("/register", postRegisterDetails);

module.exports = router;





