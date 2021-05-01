const router = require("express").Router();
const db = require("../../models");

router.get("/", async (req, res) => {
    try {
        const seasons = await db.Season.find({}).sort({ year: "desc" });

        if (!(seasons.length > 0)) {
            res.status(404).json({ message: "Could not find any seasons" });
            return;
        }

        res.status(200).json(seasons);
    } catch (e) {
        res.status(500).json(e);
        console.log(e);
    }
});

module.exports = router;