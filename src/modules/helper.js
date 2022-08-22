//  ES6
// export function minutes(hours) {
//     return hours * 60;
// }

function minutes(hours) {
    return hours * 60;
}

function dienos(years) {
    return years * 365;
}

// const n1 = minutes(12);
// console.log(n1);

module.exports = {
    minutes,
    dienos,
};