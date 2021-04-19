const Mongoose = require("mongoose");

const Schema = Mongoose.Schema;

const UserSchema = new Schema({
    first_name: {
        type: String,
        trim: true,
        required: "First name is required"
    },
    last_name: {
        type: String,
        trim: true,
        required: "Last name is required"
    },
    username: {
        type: String,
        trim: true,
        unique: true,
        required: "Username is required"
    },
    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    anime: [
        {
            type: Schema.Types.ObjectId,
            ref: "Anime"
        }
    ],
    movies: [
        {
            type: Schema.Types.ObjectId,
            ref: "Movies"
        }
    ]
});

const User = Mongoose.model("User", UserSchema);

module.exports = User;