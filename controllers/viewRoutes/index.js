const router = require("express").Router();
const authCheck = require("../../middlewares");
const db = require("../../models");

// Get home page
router.get("/", (req, res) => {
    try {
        res.render("home", {
            loggedIn: req.session.loggedIn
        });
    } catch (e) {
        res.status(500).json(e);
    }
});

// Login Page
router.get("/login", (req, res) => {
    try {
        res.render("login", {
            loggedIn: req.session.loggedIn
        });
    } catch (e) {
        res.status(500).json(e);
    }
});

// Member landing page
router.get("/members", authCheck, async (req, res) => {
    try {
        const user = await (await db.User.findOne({ _id: req.session.user_id }, 'username anime movies')).populate("anime").populate("movies");

        res.render("members", {
            user,
            loggedIn: req.session.loggedIn
        })
    } catch (e) {
        res.status(500).json(3);
    }
})

module.exports = router;