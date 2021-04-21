const Mongoose = require("mongoose");

const Schema = Mongoose.Schema;

const MovieSchema = new Schema({
    title: {
        type: String,
        required: "Movie title is required"
    },
    description: {
        type: String
    },
    year: {
        type: Date
    }
});

const Movie = Mongoose.model("Movie", MovieSchema);

module.exports = Movie;