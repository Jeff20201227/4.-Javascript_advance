// const c = require('./func');
// console.log(c.func.a(10));
// console.log(c.func.b(20));

// const os = require('os');
// console.log(os.cpus());

// Работа с файлами
const fs = require('fs');
let users = [{ name: 'Иван', age: 15 }];
fs.writeFile('test.json', JSON.stringify(users), err => {
    if (err) {
        console.log(err);
    }
});

let user = '{"name": "Алексей", "age": 10}';
fs.readFile('test.json', 'utf-8', (err, data) => { //data - исходные данные из файла test.json (считанный файл)
    if (err) {
        console.log(err);
        } else {
            let users = JSON.parse(data);
            users.push(JSON.parse(user));
            fs.writeFile('test.json', JSON.stringify(users), err => {
    if (err) {
        console.log(err);
    }
});
    }
})