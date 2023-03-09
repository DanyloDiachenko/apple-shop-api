const express = require('express');
const router = express.Router();
const macbooks = require('../data/macbooks');
const iphones = require('../data/iphones');
const ipads = require('../data/ipads');

router.get('/short-macbooks', (req, res) => {
    res.json(macbooks);
});
router.get('/short-iphones', (req, res) => {
    res.json(iphones);
});
router.get('/short-ipads', (req, res) => {
    res.json(ipads);
});

module.exports = router;