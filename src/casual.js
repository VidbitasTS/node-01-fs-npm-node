'use strict';

const casual = require('casual');

const sent1 = casual.sentence;
const city1 = casual.city;

console.log('sent1 = ', sent1);
console.log('city1 = ', city1);

function fullName() {
    return casual.full_name;
}

console.log('fullname === ', fullName());

// Generate value using function
var title = casual._title();
// Same as
var title = casual.title;

// Pass generator as callback
var array_of = function(times, generator) {
    var result = [];

    for (var i = 0; i < times; ++i) {
        result.push(generator());
    }

    return result;
};

// Will generate array of five random timestamps
var array_of_timestamps = array_of(5, casual._unix_time);
console.log(array_of_timestamps);

function makeCard(x) {
    let arr = [];
    for (let i = 0; i <= x; i++) {
        arr.push({
            id: i,
            type: casual.card_type,
            number: casual.card_number(),
            exp: casual.card_exp,
            holder_name: casual.full_name,
        });
        // arr.push(casual.card_data);
    }
    return arr;
}

console.log('korteles === ', makeCard(5));