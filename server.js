//dependencies
const express = require('express');
const path = require('path');
// const fs = require('fs');

const app = express();
let PORT = process.env.PORT || 3000;

//Sets up express app to handle parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));



require("./Routes/apiRoutes")(app);
require("./Routes/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});