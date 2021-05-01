const Mongoose = require("mongoose");

const Schema = Mongoose.Schema;

const AnimeSchema = new Schema({
    jTitle: {
        type: String,
    },
    eTitle: {
        type: String
    },
    description: {
        type: String,
        required: "Must have a description"
    },
    img: {
        type: String
    }
});

const Anime = Mongoose.model("Anime", AnimeSchema);

module.exports = Anime;