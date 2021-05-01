const router = require("express").Router();
const db = require("../../models");

router.get("/", async (req, res) => {
    try {
        const anime = await db.Anime.find({}).sort({ jTitle: "asc" });

        if (!(anime.length > 0)) {
            res.status(404).json({ message: "Could not find any anime" });
            return;
        }

        res.status(200).json(anime);
    } catch (e) {
        res.status(500).json(e);
        console.log(e);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const anime = await db.Anime.findOne({ _id: req.params.id }).exec();

        if (!anime) {
            res.status(404).json({ message: "Could not find that anime" });
            return;
        }

        res.status(200).json(anime);
    } catch (e) {
        res.status(500).json(e);
        console.log(e);
    }
});

module.exports = router;