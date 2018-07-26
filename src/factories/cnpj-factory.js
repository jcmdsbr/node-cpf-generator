'use strict';

const math = require("../functions/math-functions")

class CnpjFactory {}

CnpjFactory.prototype.Create = () => {
    let n = 9;
    let n1 = math.getRandom(n);
    let n2 = math.getRandom(n);
    let n3 = math.getRandom(n);
    let n4 = math.getRandom(n);
    let n5 = math.getRandom(n);
    let n6 = math.getRandom(n);
    let n7 = math.getRandom(n);
    let n8 = math.getRandom(n);
    let n9 = 0;
    let n10 = 0;
    let n11 = 0;
    let n12 = 1;

    let d1 = n12 * 2 + n11 * 3 + n10 * 4 + n9 * 5 + n8 * 6 + n7 * 7 + n6 * 8 + n5 * 9 + n4 * 2 + n3 * 3 + n2 * 4 + n1 * 5;


    d1 = 11 - (math.mod(d1, 11));

    if (d1 >= 10) d1 = 0;

    let d2 = d1 * 2 + n12 * 3 + n11 * 4 + n10 * 5 + n9 * 6 + n8 * 7 + n7 * 8 + n6 * 9 + n5 * 2 + n4 * 3 + n3 * 4 + n2 * 5 + n1 * 6;

    d2 = 11 - (math.mod(d2, 11));

    if (d2 >= 10) d2 = 0;

    return '' + n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10 + n11 + n12 + d1 + d2;
}

module.exports = CnpjFactory;