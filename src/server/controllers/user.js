const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const express = require('express');
const bcrypt = require('bcrypt');

const saltRounds = 10;
const secret = "kjfjksn"

const postRegisterDetails = async (req, res) => {
    try {
        const { email, username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newUser = await prisma.user.create({
            data: {
                email: email,
                username: username,
                password: hashedPassword
            }
        });
        res.json({newUser: newUser});
        
    } catch(error) {
        res.status(500).send("Something Broke");
    }


}

module.exports = {
    postRegisterDetails
}