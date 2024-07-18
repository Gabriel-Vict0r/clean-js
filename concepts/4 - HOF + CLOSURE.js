
function sum({ x, y }) { 
    return x + y
}

function sub({ x, y }) { 
    return x - y;
}

function res({ x, y, operation }) { 
    return operation({x: x, y: y})
}

console.log(res({x: 1, y: 2, operation: sum})); 
console.log(res({x: 1, y: 2, operation: sub})); 


//critério 2 - passar uma função para ser retornada depois

const multiplicador = (fator) => { 
    return function (numero) { 
        return numero * fator;
    }
}

const multiplicador1 = multiplicador(2); 
const multiplicador2 = multiplicador(5);


console.log('multplicador por 2', multiplicador1(2))
console.log('multplicador por 2', multiplicador2(3))
console.log(result)