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

        user.save((err, newUser) => {
            if (err) {
                console.log(err);
                res.status(400).json(err);
                return;
            }
        });

        res.status(200).json(user);
    } catch (e) {
        res.status(500).json(e);
    }
});

module.exports = router;