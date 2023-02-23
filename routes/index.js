const express = require('express');
const router = express.Router();
const macbooks = require('../data/short/macbooks');

router.get('/short-macbooks', (req, res) => {
    res.json(macbooks);
});
/* router.get('/short-iphones', (req, res) => {

});
router.get('/short-ipads', (req, res) => {

}); */

module.exports = router;