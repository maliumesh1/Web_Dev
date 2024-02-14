const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public", "static")));
main()
    .then(() => {
        console.log("connection succesfully established");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

// 11:14 time 
//index route
app.get("/chats", async(req, res) => {
    let chats = await Chat.find();
    console.log(chats);
    res.render("index.ejs", { chats });
    // res.send("working"); 
});

app.get("/", (req, res) => {
    res.send("root is working");
});
app.listen(8080, () => {
    console.log("server listening on port 8080");
});
