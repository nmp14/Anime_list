const router = require("express").Router();
const { User } = require("../../models");

// Get user with anime (and movies later)
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.id }).populate("anime");

        res.status(200).json(user);
    } catch (e) {
        res.status(500).json(e);
        console.log(e);
    }
});
// Get all users
router.get("/", async (req, res) => {
    try {
        const users = await User.find({});

        res.status(200).json(users);
    } catch (e) {
        res.status(500).json(e);
        console.log(e);
    }
})

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
                req.session.user_id = user._id;
                req.session.loggedIn = true;
                req.session.save();
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

        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        const isValidPass = await user.comparePassword(req.body.password, (err, isMatch) => {
            if (err) {
                console.log(err)
            } else {
                if (!isMatch) {
                    res.status(400).json({ message: "Invalid username or password" });
                    return;
                } else {
                    req.session.user_id = user._id;
                    req.session.loggedIn = true;
                    req.session.save();
                    res.status(200).json({ message: "Successfully logged in" });
                }
            }
        });
    } catch (e) {
        res.status(500).json(e);
        console.log(e);
    }
});

// Logout
router.post("/logout", async (req, res) => {
    try {
        if (req.session.loggedIn) {
            req.session.destroy(() => {
                res.status(204).end();
            });
        } else {
            res.status(404).end();
        }
    } catch (e) {
        res.status(500).json(e);
        console.log(e);
    }
});
// Add anime to user
router.put("/addAnime", async (req, res) => {
    try {
        let user;
        if (!(await User.findOne({ _id: req.session.user_id, anime: req.body.anime_id }))) {
            user = await User.updateOne({ _id: req.session.user_id }, {
                $push: { anime: req.body.anime_id }
            });
        }
        else {
            res.status(400).json({ message: "Already have anime listed" });
            return;
        }

        res.status(200).json(user);
    } catch (e) {
        res.status(500).json(e);
        console.log(e);
    }
});
// Remove anime from user
router.put("/removeAnime", async (req, res) => {
    try {
        const user = await User.updateOne({ _id: req.session.user_id }, {
            $pull: { anime: req.body.anime_id }
        });

        res.status(200).json(user);
    } catch (e) {
        res.status(500).json(e);
        console.log(e);
    }
})

module.exports = router;