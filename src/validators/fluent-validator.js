'use strict';

let errors = [];

function ValidationContract() {
    errors = [];
}

ValidationContract.prototype.isRequired = (value, message) => {
    if (!value || value.length <= 0)
        errors.push({ message: message });
}

ValidationContract.prototype.isFixedLen = (value, len, message) => {
    if (value.length != len)
        errors.push({ message: message });
}

ValidationContract.prototype.errors = () => { 
    return errors; 
}

ValidationContract.prototype.clear = () => {
    errors = [];
}

ValidationContract.prototype.isValid = () => {
    return errors.length == 0;
}

ValidationContract.prototype.CpfIsValid = (cpf)=> {
    let sum , leftover;
    sum = 0;
    if (cpf == "00000000000") return false;
     
    for (i=1; i<=9; i++) sum = sum + parseInt(cpf.substring(i-1, i)) * (11 - i);
    leftover = (sum * 10) % 11;
     
    if ((leftover == 10) || (leftover == 11))  leftover = 0;
    if (leftover != parseInt(cpf.substring(9, 10)) ) return false;
     
    sum = 0;
    for (i = 1; i <= 10; i++) sum = sum + parseInt(cpf.substring(i-1, i)) * (12 - i);
    leftover = (sum * 10) % 11;
     
    if ((leftover == 10) || (leftover == 11))  leftover = 0;
    if (leftover != parseInt(cpf.substring(10, 11) ) ) return false;

    return true;
}

ValidationContract.prototype.CnpjIsValid = (cnpj) => {
    cnpj = cnpj.replace(/[^\d]+/g,'');
 
    if(cnpj == '') return false;
     
    if (cnpj.length != 14)
        return false;
 
    if (cnpj == "00000000000000" || 
        cnpj == "11111111111111" || 
        cnpj == "22222222222222" || 
        cnpj == "33333333333333" || 
        cnpj == "44444444444444" || 
        cnpj == "55555555555555" || 
        cnpj == "66666666666666" || 
        cnpj == "77777777777777" || 
        cnpj == "88888888888888" || 
        cnpj == "99999999999999")

        return false;
         
    // Valida DVs
    let size = cnpj.length - 2
    let numbers = cnpj.substring(0,size);
    let digits = cnpj.substring(size);

    let sum = 0;
    let pos = size - 7;
    for (i = size; i >= 1; i--) {
      sum += numbers.charAt(size - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    result = sum % 11 < 2 ? 0 : 11 - sum % 11;
    if (result != digits.charAt(0))
        return false;
         
    size = size + 1;
    numbers = cnpj.substring(0,size);
    sum = 0;
    pos = size - 7;

    for (i = size; i >= 1; i--) {
      sum += numbers.charAt(size - i) * pos--;
      if (pos < 2)
            pos = 9;
    }

    result = sum % 11 < 2 ? 0 : 11 - sum % 11;
   
    if (result != digits.charAt(1))
          return false;
           
    return true;
}

module.exports = ValidationContract;