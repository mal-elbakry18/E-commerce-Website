const express = require('express');
const adminApp = require('./Routes/admin');
const webApp = require('./Routes/web');

const app = express();
const PORT = 8080

app.use(adminApp);
app.use(webApp);

app.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}`);
})