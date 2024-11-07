const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middleware/requireAuth');

const Track = mongoose.model('Track');

const router = express.Router();

router.use(requireAuth);

router.get("/tracks", async (req, res) => {

})
