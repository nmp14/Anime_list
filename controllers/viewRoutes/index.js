const router = require("express").Router();

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
router.get("/members", (req, res) => {
    try {
        res.render("members", {
            loggedIn: req.session.loggedIn
        })
    } catch (e) {
        res.status(500).json(3);
    }
})

module.exports = router;