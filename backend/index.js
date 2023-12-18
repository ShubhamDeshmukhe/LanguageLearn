const express = require("express");
const cors = require('cors');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const User = require('./models/user');
const mongoose = require("mongoose");
const questions = require("./routes/quize.js")
const app = express();
app.use(express.json());

app.use(cors({ origin: 'http://localhost:3000' }));

app.use("/api/", questions)

const dotenv = require('dotenv');
dotenv.config();

// MongoDB Connection
const mongo = process.env.MONGO_URL

mongoose.connect(mongo)
    .then(() => console.log("MongoDB Connected Successfully"))
    .catch((err)=>console.log(err) )


// Login Authentication
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email })
        if (!user) {
            return res.status(401).json({ msg: 'User does not exits' });
        }
        const ispassvalid = await bcrypt.compare(password, user.password)

        if (!ispassvalid) {
            return res.status(401).json({ msg: "invalid credentials." })
        }

        const token = jwt.sign({ id: user.id, email: user.email, name: user.name }, process.env.JWT_SECRET, {expiresIn: '1hr'});
        console.log('Generated Token:', token);

        delete user.password;

        console.log('Token Payload:', jwt.decode(token));
        res.status(200).json({ token, user });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

app.get("/api", async (req, res) => {
    const userInfo = await User.find();
    res.send(userInfo)
})

//Register User
app.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hashedpass = await bcrypt.hash(password, 10)
        const newUser = new User({ name, email, password: hashedpass })
        await newUser.save()
        res.status(201).json({ message: 'User Registered Successfully' })
    } catch (error) {
        res.status(500).json({ error: "Error" })
    }
})

// App Listen
const port = process.env.PORT
app.listen(port, () => {
    console.log('Server is running.')
})








