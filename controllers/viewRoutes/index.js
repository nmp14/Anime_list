const router = require("express").Router();

// Get home page
router.get("/", (req, res) => {
    try {
        res.render("home", {
            loggedIn: req.session.loggedIn
        })
    } catch (e) {
        res.status(500).json(e);
    }
})

module.exports = router;