const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
    .then(() => {
        console.log("connection succesfully established");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}


let allchats = [{
        from: "neha",
        to: "km",
        msg: "hiiiii",
        created_at: new Date(),
    },
    {
        from: "rm",
        to: "km",
        msg: "hello",
        created_at: new Date(),
    },
    {
        from: "km",
        to: "km",
        msg: "ram ram",
        created_at: new Date(),
    },
];

Chat.insertMany(allchats);

// Chat.insertMany([{
//     from: "neha",
//     to: "um",
//     msg: "hi",
//     created_at: new Date() //UTC Pramane
// }]);







// chat1.save().then((res) => {
//     console.log(res);
// });