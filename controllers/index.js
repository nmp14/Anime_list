const router = require("express").Router();
const viewRoutes = require("./viewRoutes");
const apiRoutes = require("./api");
const kitsuRoutes = require("./kitsu");

router.use("/", viewRoutes);
router.use("/api", apiRoutes);
router.use("/kitsu", kitsuRoutes);

module.exports = router;