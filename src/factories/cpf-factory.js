'use strict';

const shared = require("../shared/shared")

class CpfFactory {}

CpfFactory.prototype.Create = () => {

    let n = 9;
    let n1 = shared.getRandom(n);
    let n2 = shared.getRandom(n);
    let n3 = shared.getRandom(n);
    let n4 = shared.getRandom(n);
    let n5 = shared.getRandom(n);
    let n6 = shared.getRandom(n);
    let n7 = shared.getRandom(n);
    let n8 = shared.getRandom(n);
    let n9 = shared.getRandom(n);

    let d1 = n9 * 2 + n8 * 3 + n7 * 4 + n6 * 5 + n5 * 6 + n4 * 7 + n3 * 8 + n2 * 9 + n1 * 10;

    d1 = 11 - (shared.mod(d1, 11));

    if (d1 >= 10) d1 = 0;

    let d2 = d1 * 2 + n9 * 3 + n8 * 4 + n7 * 5 + n6 * 6 + n5 * 7 + n4 * 8 + n3 * 9 + n2 * 10 + n1 * 11;

    d2 = 11 - (shared.mod(d2, 11));

    if (d2 >= 10) d2 = 0;

    return '' + n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + d1 + d2;
}

module.exports = CpfFactory;