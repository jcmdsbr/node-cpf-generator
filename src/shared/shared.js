'use strict';

exports.getRandom = (n) => {
    var ranNum = Math.round(Math.random() * n);
    return ranNum;
}

exports.mod = (dividend, divider) => {
    return Math.round(dividend - (Math.floor(dividend / divider) * divider));
}