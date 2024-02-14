const express = require("express");

const app = express();

console.dir(app);

let port = 3000;
app.listen(port, () => {
    console.log('app listening on port ${port}');
});
