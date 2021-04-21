const mongoose = require("mongoose");
const seedUsers = require("./user-seed");
const seedAnime = require("./anime-seed");
const { User } = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/AniMovesDB", { useNewUrlParser: true, useUnifiedTopology: true });

const seedAll = async () => {
    try {
        await seedUsers();
        console.log("Users seeded \n_______\n");

        await seedAnime();
        console.log("Anime seeded \n_______\n");

        process.exit(0);
    } catch (e) {
        console.log(e);
    }
}

seedAll();