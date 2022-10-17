const express = require("express");
const path = require('path');
const PORT = '8080';
const app = express();
app.use('/public', express.static(path.join(__dirname, '/public')))
app.get('/', (req, res) => {
    var duongdanFile = path.join(__dirname, './public/index.html')
    res.sendFile(duongdanFile)
});
app.listen(PORT, () =>{
    console.log(`Running on ${PORT}`);
});