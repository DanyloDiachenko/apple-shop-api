const express = require('express');
const macbooksRouter = require('./routes/macbooks');
const indexRouter = require('./routes/index');
const macbooks = require('./data/short/macbooks');
const app = express();

app.listen(5000, () => { console.log('Server started on port: 5000') });

app.get('/short-macbooks', (req, res) => {
    res.json(macbooks);
});
app.use('/macbooks', macbooksRouter);

