const express = require("express");
const router = express.Router();
const visitorController = require("../controller/visitor.controller");


router.get("/visitors/:code", visitorController.getVisitors);


exports.router = router;