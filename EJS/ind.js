//Day33 Get post Request @1.1
// const express = require("express");
// const app = express();
// const port = 8080;

// app.listen(port, () => {
//     console.log('listening on port ' + port);
// });

//bash command op
// aades@UMESH MINGW64 ~
// $ cd desktop
// aades@UMESH MINGW64 ~/desktop
// $ cd Backend
// aades@UMESH MINGW64 ~/desktop/Backend
// $ nodemon ind.js
// [nodemon] 3.0.3
// [nodemon] to restart at any time, enter `rs`
// [nodemon] watching path(s): *.*
// [nodemon] watching extensions: js,mjs,cjs,json
// [nodemon] starting `node ind.js`
// listening on port 8080

// //Day33 Get post Request @1.2
// const express = require("express");
// const app = express();
// const port = 8080;
// app.get("/register", (req, res) => {
//     let { user, password } = req.query.user;
//     res.send("Standard GET Response.WLC " + user);
// });
// app.post("/register", (req, res) => {
//     res.send("Standard POST Response");
// });
// app.listen(port, () => {
//     console.log('listening on port ' + port);
// });



//Day33 Get post Request @2
const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));


app.get("/register", (req, res) => {
    let { user, password } = req.query.user;
    res.send("Standard GET Response.WLC " + user);
});
app.post("/register", (req, res) => {
    console.log(req.body);
    res.send("Standard POST Response");
});
app.listen(port, () => {
    console.log('listening on port ' + port);
});