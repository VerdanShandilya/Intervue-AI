const { authenticatetoken } = require("../middleware/AuthMiddleware");
const { createinterview } = require("../controllers/InterviewController");
const express = require('express');

const router = express.Router();

router.post("/interview", authenticatetoken, createinterview);

module.exports = router;