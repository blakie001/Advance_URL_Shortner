const express = require("express");
const urlController = require("../controller/url.controller")
const router = express.Router();

router.post("/", urlController.shortUrl);
router.get("/:tinyUrl", urlController.getShortUrl);


exports.router = router