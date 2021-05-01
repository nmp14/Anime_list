const Mongoose = require("mongoose");

const Schema = Mongoose.Schema;

const SeasonSchema = new Schema({
    season: {
        type: String,
        required: "Season is required",
        validate: [(inputSeason) => {
            const seasons = ["Spring", "Summer", "Fall", "Winter"];
            for (const season of seasons) {
                if (season === inputSeason) return true;
            }
            return false;
        }, "Not a valid season"]
    },
    year: {
        type: String,
        required: "Year is required",
        validate: [({ length }) => length === 4, "Must be length of 4 for year"],
    },
    anime: [
        {
            type: Schema.Types.ObjectId,
            ref: "Anime"
        }
    ]
});

const Season = Mongoose.model("Season", SeasonSchema);

module.exports = Season;