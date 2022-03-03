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
                    create: {}
                }
            }
        });

        console.log(newUser);
        res.json({ data: newUser });
        
    } catch(error) {
        console.log(error.message);
        res.status(500).send({ error: "There was an error!" });
    }


}

const postLoginDetails = async (req, res) => {
    console.log(req.body)
    try {
        const { username, password } = req.body;
        const findUser = await prisma.user.findUnique({
            where: {
                username
            }
        });

        console.log(findUser)

        const matchingPassword = findUser ? await bcrypt.compare(password, findUser.password) : null;


        if (findUser && matchingPassword) {
            const token = jwt.sign(username, secret);
            console.log(token)
            return res.json({ data: token })
        }

        return res.json( {error: "Username or Password is incorrect."});
        
    } catch (error) {
        res.status(500).send("There was an error with your details.");
        console.log(error);
    }
}

module.exports = {
    postRegisterDetails,
    postLoginDetails
}