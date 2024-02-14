// const { faker } = require("@faker-js/faker");

// let createRandomUser = () => {
//     return {
//         userId: faker.string.uuid(),
//         username: faker.internet.userName(),
//         email: faker.internet.email(),
//         avatar: faker.image.avatar(),
//         password: faker.internet.password(),
//         birthdate: faker.date.birthdate(),
//         registeredAt: faker.date.past(),
//     };
// }
// console.log(createRandomUser());


//gitbash op screen
// aades@UMESH MINGW64 ~/desktop/sql
// $ node index.js
// {
//   userId: 'd0c74b08-a576-47ca-b741-f43f6391fd97',
//   username: 'Kathryne.Mraz',
//   email: 'Maverick63@yahoo.com',
//   avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt
// 5AJBiyvHye/avatar/523.jpg',
//   password: '9LTwKlk2zwQVaB7',
//   birthdate: 1960-01-28T02:43:12.376Z,
//   registeredAt: 2023-08-08T01:26:10.319Z
// }

// aades@UMESH MINGW64 ~/desktop/sql


const { faker } = require("@faker-js/faker");
const mysql = require("musql2");

const connection = mysw.createConnection({
    host: "localhost",
    user: "root",
    database: "delta",
    password: "9527",
});

try {
    connection.query("SHOW TABLES", (err, result) => {
        if (err) throw err;
        console.log(result);
    });
} catch (err) {
    console.log(err);
}

let getRandomUser = () => {
    return {
        userId: faker.string.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate(),
        registeredAt: faker.date.past(),
    };
};
