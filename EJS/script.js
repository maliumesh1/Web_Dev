// let n = 5;

// for (let i = 0; i < n; i++) {
//     console.log("Number", i);
// }

// console.log("Bye");

let args = process.argv;
for (let i = 0; i < args.length; i++) {
    console.log("Wlc", args[i]);
}