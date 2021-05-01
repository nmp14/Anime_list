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
// Create a new season
router.post("/", async (req, res) => {
    try {
        const season = db.Season.create({
            season: req.body.season,
            year: req.body.year
        }, (err, doc) => {
            if (err) {
                res.status(400).json({ message: err });
                return;
            }
            res.status(201).json(doc);
        });
    } catch (e) {
        res.status(500).json(e);
        console.log(e);
    }
});
//Get Season with anime
router.get("/:id", async (req, res) => {
    try {
        const season = await db.Season.findOne({ _id: req.params.id })
            .populate("anime")
            .exec((err, doc) => {
                if (err) {
                    res.status(404).json({ message: err });
                    return;
                }
                res.status(200).json(doc);
            });
    } catch (e) {
        res.status(500).json(e);
        console.log(e);
    }
})

// Add anime to Season
router.put("/addAnime", async (req, res) => {
    try {
        const season = await db.Season.updateOne({
            season: req.body.season,
            year: req.body.year
        }, { $push: { anime: req.body.anime_id } });

        res.status(200).json(season);
    } catch (e) {
        res.status(500).json(e);
        console.log(e);
    }
});

router.put("/removeAnime", async (req, res) => {
    try {
        const season = await db.Season.updateOne({
            season: req.body.season,
            year: req.body.year
        }, { $pull: { anime: req.body.anime_id } }, (err, doc) => {
            if (err) {
                res.status(400).json(err);
                return;
            }
            res.status(200).json(doc);
        })
    } catch (e) {
        res.status(500).json(e);
        console.log(e);
    }
})

module.exports = router;