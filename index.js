const express = require('express');
const cors = require('cors')
const indexRouter = require('./routes/index');
const PORT = process.env.PORT || '8080';
const app = express();

app.set('port', PORT);
app.listen(PORT, () => { console.log('Server started on port: ' + PORT) });

app.use(cors());

app.use('/', indexRouter);



app.get('/favicon.ico', function (req, res) {
    res.writeHead(204);
    res.end();
});