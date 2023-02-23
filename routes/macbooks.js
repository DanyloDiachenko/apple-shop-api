const express = require('express');
const router = express.Router();
const macbooks = require('../data/global/macbooks');

router.get('/', (req, res) => {
    res.json(macbooks);
});

router.get('/:id', (req, res) => {
    const macbookId = parseInt(req.params.id, 10);

    const macbook = macbooks.find((macbook) => macbook.id === macbookId);

    if (macbook) {
        return res.json(macbook);
    } else {
        return res.status(404).json({ responce: 'Macbook is not found' });
    }
});

module.exports = router;