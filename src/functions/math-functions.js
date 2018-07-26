'use strict';

exports.getRandom = (n) => {
    return Math.round(Math.random() * n);
}

exports.mod = (dividend, divider) => {
    return Math.round(dividend - (Math.floor(dividend / divider) * divider));
}