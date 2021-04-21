const Mongoose = require("mongoose");

const Schema = Mongoose.Schema;

const AnimeSchema = new Schema({
    jTitle: {
        type: String,
        required: "Anime title is required (Japanese)"
    },
    eTitle: {
        type: String
    },
    description: {
        type: String
    }
});

const Anime = Mongoose.model("Anime", AnimeSchema);

module.exports = Anime;