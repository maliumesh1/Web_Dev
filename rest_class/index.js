const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));

app.set("view engine ", "ejs");
app.set("views", path.join(__dirname, "views"));


app.get("/", (req, res) => {
    res.send("Server working");
});

app.set(express.static(path.join(__dirname, "public")));
app.listen(port, () => {
    console.log("listening on port ");
});
