const express = require('express');
const adminApp = require('./Routes/admin');
const webApp = require('./Routes/web');
const bodyParser = require('body-parser');
const { InitController } = require('./Controllers/InitController');
const initController = new InitController() 

const app = express();
const PORT = 8080;


var cors = require('cors');
app.use(cors());


app.use(bodyParser.json())

app.use('/admin', adminApp);
app.use('/web', webApp);


app.post('/DatabaseInit', initController.checkDatabase);

app.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}`);
})