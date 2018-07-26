'use strict';

const ValidationContract = require("../contracts/validation-contract");

class CpfContract extends ValidationContract {
   
}

CpfContract.prototype.algorithmIsValid = (cpf) => {
    let sum, leftover;
    sum = 0;
    if (cpf == "00000000000") return false;

    for (let i = 1; i <= 9; i++) sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    leftover = (sum * 10) % 11;

    if ((leftover == 10) || (leftover == 11)) leftover = 0;
    if (leftover != parseInt(cpf.substring(9, 10))) return false;

    sum = 0;
    for (let i = 1; i <= 10; i++) sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    leftover = (sum * 10) % 11;

    if ((leftover == 10) || (leftover == 11)) leftover = 0;
    if (leftover != parseInt(cpf.substring(10, 11))) return false;

    return true;
}

module.exports = CpfContract;