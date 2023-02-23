const express = require('express');
const macbooksRouter = require('./routes/macbooks');
const indexRouter = require('./routes/index');
const PORT = process.env.PORT || '8080';
const app = express();

app.set('port', PORT);
app.listen(PORT, () => { console.log('Server started on port: ' + PORT) });

app.use('/', indexRouter);
app.use('/macbooks', macbooksRouter);