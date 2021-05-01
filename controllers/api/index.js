const router = require("express").Router();
const userRoutes = require("./userRoutes");
const animeRoutes = require("./animeRoutes");

router.use("/users", userRoutes);
router.use("/anime", animeRoutes);

module.exports = router;