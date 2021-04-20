const router = require("express").Router();
const { User } = require("../../models");

// Create user
router.post("/", async (req, res) => {
    try {
        const user = new User({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });

        const savedUser = await user.save(function (err, doc) {
            if (err) {
                res.status(400).json(err);
            } else {
                res.status(201).json(doc);
            }
        });
    } catch (e) {
        res.status(500).json(e);
        console.log(e);
    }
});

// Login
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        console.log(user);
        res.status(200).json(user);
    } catch (e) {
        res.status(500).json(e);
    }
})

module.exports = router;