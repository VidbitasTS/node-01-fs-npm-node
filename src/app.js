'use strict';
//  ES 6

// import { minutes } from 'helper';

const { minutes, dienos } = require('./modules/helper');
const sum = require('./modules/sum');
// const { minutes, dienos } = require('./helper');

// console.log('app.js');
// const name = 'James';

// const fulName = `${name} Bond`;

// console.log('fulName ===', fulName);

console.log(minutes(12));
console.log(dienos(10));
console.log(sum(10, 30));