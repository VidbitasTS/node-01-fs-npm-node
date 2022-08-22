'use strict';
console.log('fs.js');

const fs = require('fs');

function irasyti() {
    fs.writeFile('./user.txt', 'Username=James\nage=25', (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('failas sukurtas sekmingai');
    });
}

function skaitom(path) {
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err.message);
            return;
        }
        console.log(data.toString().split('\n'));
    });
}

istrink('./delete.txt');

function istrink(path) {
    if (fs.existsSync(path)) {
        console.log('file exists');
        fs.unlink(path, (err) => {
            if (err) {
                console.log(err.message);
                return;
            }
            console.log('file delete');
        });
    } else {
        console.log('file not found');
    }
}