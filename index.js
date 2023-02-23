const express = require('express');
const macbooksRouter = require('./routes/macbooks');
const indexRouter = require('./routes/index');
const app = express();

app.listen(80, () => { console.log('Server started on port: 5000') });

app.use('/', indexRouter);
app.use('/macbooks', macbooksRouter);

