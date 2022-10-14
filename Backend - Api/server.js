const express = require('express');
const adminApp = require('./Routes/admin');
const webApp = require('./Routes/web');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8080;


var cors = require('cors');
app.use(cors());


app.use(bodyParser.json())

app.use('/admin', adminApp);
app.use('/web', webApp);
app.use(bodyParser.json())

app.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}`);
})