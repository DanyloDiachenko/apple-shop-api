const express = require('express');
const router = express.Router();
const macbooks = require('../data/short/macbooks');
const iphones = require('../data/short/iphones');

router.get('/short-macbooks', (req, res) => {
    res.json(macbooks);
});
router.get('/short-iphones', (req, res) => {
    res.json(iphones);
});
/* router.get('/short-ipads', (req, res) => {

}); */

module.exports = router;