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
        res.status(500).send("There was an error!");
    }


}

const postLoginDetails = async (req, res) => {
    try {
        const { username, password } = req.body;
        const findUser = await prisma.user.findUnique({
            where: {
                username
            }
        });
        if (findUser) {
            if (await bcrypt.compare(password, findUser.password)) {
                const token = jwt.sign(username, secret);
                return res.json({ userToken: token })
            } else {
                return res.json("Username or Password is incorrect.")
            }
        } else {
            return res.json("Username or Password is incorrect.");
        }
    } catch (error) {
        res.status(500).send("There was an error with your details.");
        console.log(error);
    }
}

module.exports = {
    postRegisterDetails,
    postLoginDetails
}