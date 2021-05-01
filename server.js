const express = require("express");
const exphs = require("express-handlebars");
const session = require("express-session");
const path = require("path");
const mongoose = require("mongoose");
const MongoStore = require('connect-mongo');
const logger = require("morgan");
const helpers = require("./utils/helpers");
const controllers = require("./controllers");
// const middleware = require("./middlewares");

// Scraping tools
var axios = require("axios");
var cheerio = require("cheerio");

const app = express();
const PORT = process.env.PORT || 8000;
const hbs = exphs.create({ helpers });
// Use morgan logger for logging requests
app.use(logger("dev"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/AniMovesDB", { useNewUrlParser: true, useUnifiedTopology: true });

const sess = {
    secret: "The secret passage of animes and movies",
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 },
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: 'mongodb://localhost/AniMovesDB',
        ttl: 24 * 60 * 60, // = 1 days. Default
        autoRemove: 'native'
    }),
    unset: 'destroy'
};

app.use(session(sess));

// Handlebars engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(controllers);

app.listen(PORT, () => console.log(`Listening on the coolest PORT ${PORT}`));