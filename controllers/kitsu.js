const axios = require("axios");
const router = require("express").Router();
const db = require("../models");

router.post("/", async (req, res) => {
    try {
        const fetchData = await axios.get(req.body.url);
        const info = fetchData.data;
        const anime = info.data;

        anime.forEach(async (data) => {
            const animeJapaneseTitle = data.attributes.titles.en_jp;
            const animeEnglishTitle = data.attributes.titles.en;
            const animeSynopsis = data.attributes.synopsis;
            const animeImage = data.attributes.posterImage.medium;

            const season = req.body.season;
            const year = req.body.year;

            const animeFetch = await db.Anime.create({
                jTitle: animeJapaneseTitle,
                eTitle: animeEnglishTitle,
                description: animeSynopsis,
                img: animeImage
            });

            if (!animeFetch) {
                console.log(`${animeJapaneseTitle} or ${animeEnglishTitle} had a problem`);
            }

            const seasonPush = await db.Season.updateOne({
                season,
                year
            }, { $push: { anime: animeFetch._id } });

        });

        res.status(200).json(anime[0]);
    } catch (e) {
        res.status(500).json(e);
        console.log(e);
    }
});

module.exports = router;