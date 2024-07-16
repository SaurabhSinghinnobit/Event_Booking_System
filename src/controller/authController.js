const User = require('../model/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

exports.register = async ( req, res) => {
    const { username, password } = req.body

    try {
        let user = await User.findOne({ username });
        if(user){
            return res.status(400).json({ error: `User is already exists`})
        }

        user = new User({
            username,
            password: await bcrypt.has(password, 10)
        });

        await user.save();

        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(
            payload, process.env.JWT_SECRET, { expiresIn : '1h'},
            (err, token )=> {
                if(err) throw err;
                res.json({ token });
            });
    }
    catch (err){
        res.status(500).json({error: `Server error`})
    }
}

exports.login = async(req, res) => {
    const { username, password } = req.body
    try{
        let user = await User.findOne({ username });
        if(!user){
            return res.status(400).json({ error: `Invalid credentials please enter the correct credentials`})
        }
h
        const isMatch = await bcrypt.compare(password, user.password);
        if(isMatch) {
            return res.status(400).json({ error: `Invalid credentials`})
        }

        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(
            payload, process.env.JWT_SECRET, { expiresIn : '1h'},
            (err, token )=> {
                if(err) throw err;
                res.json({ token });
            });

    }catch{
        res.status(500).json({error: `Server error`})
    }
}