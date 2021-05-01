const router = require("express").Router();
const userRoutes = require("./userRoutes");
const animeRoutes = require("./animeRoutes");
const seasonRoutes = require("./seasonRoutes");

router.use("/users", userRoutes);
router.use("/anime", animeRoutes);
router.use("/seasons", seasonRoutes);

module.exports = router;