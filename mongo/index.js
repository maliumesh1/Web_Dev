// ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️

// installation mongoose @1.1
//  const mongoose = require("mongoose");
// mongoose.connect("mongodb://127.0.0.1:27017/test");

// // let url = "http://localhost:8080/users"
// // ya la ase lihito

// ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️
// installation mongoose @1.2
const mongoose = require("mongoose");
main()
  .then((res)=>{console.log(res);
    console.log("connection successful");
})
.catch((err) => console.log(err))

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}


// ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️
// installation mongoose @1.3
// creating a schema
const userschema = new mongoose.Schema({
    name:String,
    email :String,
    age:Number
});

// installation mongoose @1.4
// creating model .without model mongoose.Schema not created
const User = mongoose.model("User", userschema);

// ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️

// installation mongoose @1.5
// user data in mongoose.Schema
const user1 = new User ({name:"John", email:"John@example.com", age:34});
user1.save();

//op : terminal
// test> show collections
// student
// users
// test> db.users.find()

// test> db.users.find()
// [
//   {
//     _id: ObjectId('65c78118d46784df43e39962'),
//     name: 'John',
//     email: 'John@example.com',
//     age: 34,
//     __v: 0
//   }
// ]
// ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️
// installation mongoose @1.6



// ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️



// ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️


// ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️



// ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️
