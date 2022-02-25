const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');
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
                password: hashedPassword,
                profile: {
                    crate: {}
                }
            }
        });

        console.log(newUser)
        res.json({ data: newUser });
        
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

        const matchingPassword = await bcrypt.compare(password, findUser.password);

        if (findUser && matchingPassword) {
            const token = jwt.sign(username, secret);
            console.log(token)
            return res.json({ data: token })
        }

        return res.json("Username or Password is incorrect.");
        
    } catch (error) {
        res.status(500).send("There was an error with your details.");
        console.log(error);
    }
}

module.exports = {
    postRegisterDetails,
    postLoginDetails
}